const connectToMongo = require ("./db");
const express = require('express');

connectToMongo();
const app = express()
const port = 80;

app.use(express.json());//if we want to use request body

//Available routes

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, () => {
  console.log(`Backend API listening on port ${port}`)
})