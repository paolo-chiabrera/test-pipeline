const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ status: 'OK' });
});

app.get('/api', (req, res) => {
  res.json({ name: 'John', surname: 'Doe' });
});

module.exports = app;
