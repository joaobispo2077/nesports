import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log('hello world');
  res.json({ message: 'Hello World!' });
});

app.get('/games', (req, res) => {
  res.json([{ name: 'Anúncio 1' }]);
});

app.get('/games/:id/ads', (req, res) => {
  res.json([{ name: 'Anúncio 1' }]);
});

app.get('/ads', (req, res) => {
  res.json([{ name: 'Anúncio 1' }]);
});

app.get('/ads/:id/discord', (req, res) => {
  res.json([{ name: 'Anúncio 1' }]);
});

app.post('/ads', (req, res) => {
  res.json([{ name: 'Anúncio 1' }]);
});

app.listen(3002, () => console.log('Example app listening on port 3002!'));
