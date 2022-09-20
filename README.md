# Learning Docker from the basics!

This repository will be updated with my progress into the Container's World! 

<br><br>
<div align="center">
  <img src="./docker.png">
</div>

# Useful commands (used so far)

- >```docker ps```
  - shows running containers;
  <hr>

- >```docker ps -a```
  - shows all containers;
  <hr>

- >```docker images```
  - shows all images (running and stopped);
  <hr>

- >```docker tag [imageID] [giveItAName]```
  - naming an already built image;
  <hr>

- >```docker tag [imageID] [giveItAName]:[butAlsoATag]```
  - giving an already existing image a name and a tag;
  <hr>

- >```docker build [PATH]```
  - if the Dockerfile with your image settings is located in the same path you are, you can use <code>.</code> , else use a path;
  <hr>

- >```docker build -t [giveItAName] [PATH]```
  - Flag -t (tag) lets you name your image when you are building it;
  <hr>

- >```docker build -t [giveItAName]:[butAlsoATag] [PATH]```
  - you can not just name it while building it, but also TAG it;
  <hr>

- >```docker run [image]```
  - creates and starts a new container;
  <hr>

- >```docker run -d [image]```
  - flag -d (detached) runs a new container without holding the terminal;
  <hr>

- >```docker run -p [imagePORT:appPORT] [image]```
  - flag -p (port) specifies the port the container will be running. You access localhost:imagePORT and it uses the port you made available in your app;
  <hr>

- >```docker run -d -p [imagePORT:appPORT] [image]```
  - a combination of the two last commands. It runs an image on a new container on specific port with a free terminal;
  <hr>

- >```docker run -d -p [imagePORT:appPORT] --name [giveItAName] [image]```
  - you can give a name to your container when creating it. Names should be unique, as IDs;
  <hr>

- >```docker stop [container]```
  - used to stop the specific container running, use container's ID or its name to stop it;
  <hr>

- >```docker start [container]```
  - after stopping a container, you can always start it again;
  <hr>

- >```docker start -i [container]```
  - You can always see your logs or interactively pass commands on the terminal with your --interactive flag;
  <hr>
