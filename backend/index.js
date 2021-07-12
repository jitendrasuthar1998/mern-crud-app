const todos = require('../backend/routes/todos')
const cors = require('cors');
const express = require('express');

//this app represent express application.
const app = express();



const mongoose = require('mongoose');

app.use(cors());

app.use(express.json());

app.use("/api/todos", todos)

//dotenv used to read environment variables from .env file.
require('dotenv').config()

const port = process.env.PORT || 5000;

app.listen(port, () =>
{
  console.log(`Listening on Port ${port}`)
})

//const connection_string is assigned connection string to mongoDB connection.
const connection_string = process.env.CONNECTION_STRING;

//used mongoose to connect to mongoDB, and passed some object parameters to it.

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


app.get('/', (req, res) =>
{
  res.send('Hello World from Jitendra suthar.Learning to create server using Express')
})

