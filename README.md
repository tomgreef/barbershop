# Barbershop
This repositorie is for a Barbershop/Hair Salon project called OnHair Barbershop in the centre of Málaga.

## Setup
1. Run `npm run dev` from the API folder.
2. Run `npm start` from the frontend folder.

## Step by step commands in CLI for the creation of API folder
1. `npm init`
This command will create our backend with Mongo and Express.
2. `npm install express mongoose`
This will install express and mongoose, which is a third party that will allow us to modify the mongo db easily.
3. `npm install --save-dev nodemon`
This will only be installed in the development environment. Nodemon will refresh the page everytime we make a change. We need to add this to our package.json scripts.

## API creation
We will start by modifying the index.js file within the API folder to start creating the server with Express. After that we will need to create the models and controllers that will be used in the routes. Furthermore, we created basic functions such as Add, Get, Modify and Delete to our controllers (except the service model).

