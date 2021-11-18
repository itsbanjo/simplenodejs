*Requirements:*

1. oc client
2. git
3. Personal Access token setup in github

*Deploy*


```
$ oc login -u username -p password api.uat.ocp4.openshift.integrate.zone:6443
$ oc new-project simplenodejs-<your username>
$ oc new-app nodejs~https://github.com/<your username>/simplenodejs --as-deployment-config
$ oc create secret generic gchatwebhook --from-literal WEBHOOK_URL='https://yourwebhookurl'
$ oc create configmap nodejs --from-literal=NAME="Your Name" --from-literal=AGE="1234"
$ oc set env bc/nsimpleodejs --from secret/gchatwebhook
$ oc set env deployment --from cm/nodejs
$ oc set build-hook bc/simplenodejs --post-commit --script="node webhook"
$ oc set probe deployment simplenodejs --readiness --get-url=http://:8080/q/health
$ oc set probe deployment simplenodejs --liveness --get-url=http://:8080/q/ready
$ oc expose svc/simplenodejs
route.route.openshift.io/simplenodejs exposed
```
