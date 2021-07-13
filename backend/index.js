const todos = require('../backend/routes/todos')
const cors = require('cors');
const express = require('express');

//this app represent express application.
const app = express();

const mongoose = require('mongoose');

//cors is a middleware. Cross origin resource sharing. It let you to access resource from any domain
app.use(cors());

app.use(express.json());

//app is using /api/todos router, to post or get todo from todos collection of todoApp database.
//(api/todos path assigned after the home directory of localhost:5000/, and on that path, you have added functionality of get and post method using express.router's get and post method.)

app.use("/api/todos", todos)

//dotenv used to read environment variables from .env file.
require('dotenv').config()

const port = process.env.PORT || 5000;

//you have created server, and the server is running on port 5000. you can see the message in console that on which port server is running.

app.listen(port, () =>
{
  console.log(`Listening on Port ${port}`)
})

//const connection_string is assigned connection string to mongoDB connection.
const connection_string = process.env.CONNECTION_STRING;

//used mongoose to connect to mongoDB, and passed some object parameters to it.

//after connection string, you have added options, so that you will not get unnecessary warning, when your server got connected to the mongodb cluster and then mongodb database.

mongoose.connect(connection_string, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
  .then(() =>
  {
    //if connection is successful, then show this message in log.
    console.log("MongoDB connection was successful.")
  })
  .catch((error) =>
  {
    console.error('MongoDB connection failed', error);
  })

//get apis
//when you enter the path - localhost:5000/, that time browser send get request to server, and then server send a response back to browser. and in this case, the response is a string.
//if you get the string, it mean the get request is working fine between server and browser.

app.get('/', (req, res) =>
{
  res.send('Hello World from Jitendra suthar.Learning to create server using Express')
})