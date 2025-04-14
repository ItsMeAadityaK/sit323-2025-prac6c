1. Verified running pods using: `kubectl get pods`
2. Checked service exposure via: `kubectl get services`
3. Forwarded traffic from the cluster to local machine using:
  `kubectl port-forward service/my-microservice-service 8080:80`
4. Opened browser and accessed the app at `http://localhost:8080`
5. Confirmed connection with expected `Cannot GET /` response
6. Tested the forwarded service on localhost:8080 via Postman
