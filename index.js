const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./src/router/routes.js');
require('dotenv').config();
app.use(bodyParser.json());
app.use('/', router);
DB = process.env.Database;

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('mongodb is connected...'))
  .catch((err) => console.log(err));
