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

app.get('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
      hoursStart: true,
      hoursEnd: true,
      weekDays: true,
      useVoicheChannel: true,
      yearsPlaying: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  res.json(
    ads.map((ad) => ({
      ...ad,
      weekDays: ad.weekDays.split(','),
    })),
  );
});

app.get('/ads', (req, res) => {
  res.json([{ name: 'Anúncio 1' }]);
});

app.get('/ads/:id/discord', async (req, res) => {
  const id = req.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    where: {
      id,
    },
    select: {
      discord: true,
    },
  });

  res.json(ad);
});

app.post('/ads', (req, res) => {
  res.json([{ name: 'Anúncio 1' }]);
});

app.listen(3002, () => console.log('Example app listening on port 3002!'));
