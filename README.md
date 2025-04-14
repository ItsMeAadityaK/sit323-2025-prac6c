
1. First, I logged into the Google Cloud Console and created a **Standard Kubernetes Cluster** named `sit323-cluster`.
2. While setting up the cluster, I selected the `australia-southeast2` region and manually chose the Kubernetes version `1.32.2-gke.1182001` to avoid policy restrictions enforced by the organization.
3. Once the cluster was created, I confirmed that my GCP account (`s223309593@deakin.edu.au`) was active using `gcloud config configurations list`.
4. I then switched to this student account and made sure my project `sit323-25t1-kulkarni-c60fbf8` was correctly selected.
5. For the microservice image, I used an already published Docker image from my Docker Hub repository: `aadityakulk/calc-microservice`.
6. I used the existing `deployment.yaml` file to create a Kubernetes deployment pointing to the Docker Hub image.
7. I applied the deployment configuration using the command `kubectl apply -f deployment.yaml`.
8. I verified that the deployment was successful and both pods were running using `kubectl get pods`.
9. I then applied the `service.yaml` file which exposed the microservice via a Kubernetes LoadBalancer service.
10. I checked the service status and retrieved the **External IP address** using `kubectl get services`.
11. To allow public access to the service, I created a new firewall rule in GCP to allow the http request for port 80 
12. After the firewall rule was added, I accessed the application via the external IP in my browser.
13. The application responded with "Cannot GET /", confirming that the service was running and externally accessible.
14. Finally, I captured all required screenshots and confirmed the application was running successfully on GCP Kubernetes.
