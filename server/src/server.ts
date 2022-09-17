import { PrismaClient } from '@prisma/client';
import express from 'express';

const app = express();
const prisma = new PrismaClient({
  log: ['query'],
});

app.get('/', (req, res) => {
  console.log('hello world');
  res.json({ message: 'Hello World!' });
});

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });
  return res.json(games);
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
