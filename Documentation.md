# HNG Internship (Task 2)

## The Task Overview

REST API capable of CRUD operations on a "person" resource.

## Links

GitHub Repository: https://github.com/quadri-usman/HNG_task2
Hosting: https://hngtask2-production-98ad.up.railway.app/api

## Feature Requests

- CREATE: Adding a new person
- READ: Fetching details of a person
- UPDATE: Modifying details of an existing person
- DELETE: Removing a person

#### Prerequisites

- Download and Install new version of node from https://nodejs.org
- Download and install Mongo DB Compass

#### Running the Server

- Clone the repo using: git clone https://github.com/zuri-training/Team-wolf-w2.git
- To install packages, run: npm install
- Open a .env file in the root/cloned directory and put the following inside it
  - PORT = 3000
  - MONGODB_URI="mongodb://localhost:27017/person"
- To start the server, run: npm start (or npm run dev)

  ### Endpoints

  - The api endpoints can be found and tested in the api.rest file
  - Note: After creating a person, replace the "id" value for fetching, updating and removing the person.

## Chanllenges

- I tried to host the API on fly.io but faced a lot of challenges. I had to contact a colleague at the internship who helped out to host on railway
