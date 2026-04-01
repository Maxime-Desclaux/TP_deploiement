const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon application !');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});