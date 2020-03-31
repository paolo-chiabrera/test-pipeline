const express = require('express');
const path = require('path');

const WEBAPP_BUILD_PATH = path.join(__dirname, '../..', 'client/build');

const app = express();

app.use('/', express.static(WEBAPP_BUILD_PATH));

app.get('/', (req, res) => {
  res.json({ status: 'OK' });
});

app.get('/api', (req, res) => {
  res.json({ name: 'John', surname: 'Doe' });
});

module.exports = app;
