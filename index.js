const express = require('express');
const app = express();

// Import the middleware
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const ejs = require('ejs');

// Configure the CORS middleware


// Configure the Helmet middleware
app.use(helmet());

// Configure the Morgan middleware
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());

// Configure the EJS middleware
app.set('view engine', 'ejs');

// Define a route for the root path ('/') that sends a response to the client.

app.use(require('./routes'))
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

