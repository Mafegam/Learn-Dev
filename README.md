# LearnDev

This project is an Angular-based website designed to provide programming tutorials on HTML, CSS and Java Sctipt.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Table of Contents

1. Introduction
2. Features
3. Setup
4. Prerequisites
5. Frontend (Angular)
6. Backend
7. Usage

## Introduction

This website aims to offer high-quality programming tutorials covering a wide range of languages and technologies. It provides a user-friendly interface to browse and access tutorials easily, as well as create an account where the user
will be able to save their favorite tutorials to watch later.

## Features

* User Authentication: Allow users to register, login, and manage their profiles.
* Tutorial Categories: Organize tutorials to watch later.

## Setup

### Prerequisites

Before starting, please make sure you have the following installed:

* Node.js and npm: Download [Node.js](https://nodejs.org/en)
* Angular CLI: Install globally using npm with ```npm install -g @angular/cli```
* MongoDB: Create a [MondoDB](https://www.mongodb.com/) account
* [Postman](https://www.postman.com/)

## Building the Frontend
1. Create Github repository and clone it into local repository
2. In the terminal, start Angular project: ```ng new Learn-Dev```
3. Clear Angular's default HTML and CSS files 
4. Create components withg ng generate component Component/Name --skip-tests

## Building the Backend
1. Createa a Backend folder independant from the Frontend
2. In the terminal, Node project ```npm i node```
3. Create .gitignore file and add node_modules
4. Install Express: ```npm i express```
5. Install Mongoose ```npm i mongoose```
6. Install Morgan ```npm i morgan```
7. Install dotenv ```npm i dotenv```
8. Install Nodemon ```npm i nodemon```
9. Import dependencies to Index.js
10. Review package.json file to ensure all dependencies, plugins, etc. are installes
11. Create the connectuion to the databasea

 * Create a ```databaseConnection.js``` file and create the connection
```javascript
mongoose.connect(process.env.MONGODB_ATLAS_URI).then((dato)=>{
    console.log("Conectado a la base de datos");
}).catch((error)=>{
    console.log("No se conectó a la base de datos");
})
```

 * Create a ```server.js``` file and stablish contection to database
```javascript
servidor.get(`/`,  (request, answer)=>{
    respuesta.status(404).send("Root connected");
})
```

 * In index.js:
```javascript
   // Import module to use environment variables
import "dotenv/config";

// Import the connection to database
import "./databaseConnection.js";

// Import the server connection
import servidor from "./server.js";

// Set the server in port 3000
servidor.listen(3000, ()=>{
    console.log("Server runs inport 3000!");
});
```

12. Set environment variables
  * Create a `.env` file and define MongoDB connection string and other necessary variables: 
```javascript
MONGODB_ATLAS_URI="mongodb+srv://Mafegam:secretKey@cluster0.sjfou0b.mongodb.net/usersControl?retryWrites=true&w=majority&appName=ClusterName"
```
13. Test the connection with the database doing a GET request to the root
 * In Postman, create a GET request using the URL ```http://localhost:3000```
14. Create the User Model
15. Create Controllers
16. Test connection to database

## Additional libraries used
* Json Web Token ```npm i jsonwebtoken```
* BcryptJS ```npm i bcryptjs```
* Cors middleware ```npm i cors-middleware```
* auth0/angular-jwt ```npm i @auth0/angular-jwt```

## Frontend design libraries
* [TailwindCSS](https://tailwindcss.com/docs/installation)
* [Flowbite](https://flowbite.com/docs/getting-started/quickstart/)
* [TailwindCSS Typography](https://github.com/tailwindlabs/tailwindcss-typography)
