import express from 'express';

const app = express();

app.get('/', (req, res) => {

  console.log("hello world");
  res.json({ message: 'Hello World!' });
});

app.get('/ads', (req, res) => {

  res.json([{ name: 'Anúncio 1' }]);
});

app.listen(3002, () => console.log('Example app listening on port 3002!'));