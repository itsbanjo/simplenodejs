*Requirements:*

1. oc client
2. git
3. Personal Access token setup in github

*Deploy*


```
$ oc login -u username -p password api.uat.ocp4.openshift.integrate.zone:6443
$ oc new-project simplenodejs-<your username>
$ oc new-app nodejs-14~https://github.com/<your username>/simplenodejs --as-deployment-config
$ oc create secret generic gchatwebhook --from-literal WEBHOOK_URL='https://yourwebhookurl'
$ oc set env bc/nodejs --from secret/gchatwebhook
$ oc set build-hook bc/nodejs --post-commit --script="node webhook"
$ oc get pods -w
 NOTE: wait for the BUILD pod to finish, and the SECOND pod running.

$ oc get pods
NAME                            READY   STATUS      RESTARTS   AGE
simplenodejs-1-build            0/1     Completed   0          2m14s
simplenodejs-766564fb79-x2qwk   1/1     Running     3          48s

$ oc expose svc/simplenodejs
route.route.openshift.io/simplenodejs exposed

$ oc get route
Grab the Domain name in the above output and browse the website.
```


*Updating the code*

Go to your cloned simplenodejs and edit index.html by adding your name

```
$ vi simplenodejs/index.html

...  ....
  <h1> I Love NodeJs! and my name is: Banjo  </h1>
... ....


$ git add . && git commit -m "Update" && git push

```

*Re deploy the new code, watch until the second build is finish, and the new container is started then browse the URL again*

```
$ oc start-build bc/simplenodejs
$ oc get pods -w
  NOTE: 

[banjo@jumphost simplenodejs]$ oc get pods
NAME                    READY   STATUS      RESTARTS   AGE
simplenodejs-1-build    0/1     Completed   0          15m
simplenodejs-1-deploy   0/1     Completed   0          13m
simplenodejs-2-65bw7    1/1     Running     0          88s
simplenodejs-2-deploy   0/1     Completed   0          92s

```
