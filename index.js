const express = require("express");
require('dotenv').config()
const morgan = require('morgan');

const app = express();

app.set("port",process.env.PORTSERVER || 3000)

app.use(morgan('dev'));

app.listen(app.get('port'), () => {
    console.log("Server start on port");
  });