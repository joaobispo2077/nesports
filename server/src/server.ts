import { PrismaClient } from '@prisma/client';
import express from 'express';

import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes';
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string';

const app = express();
app.use(express.json());

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
  const gameId = String(req.params.id);

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

  return res.json(
    ads.map((ad) => ({
      ...ad,
      weekDays: ad.weekDays.split(','),
      hoursStart: convertMinutesToHourString(ad.hoursStart),
      hoursEnd: convertMinutesToHourString(ad.hoursEnd),
    })),
  );
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

  return res.json(ad);
});

app.post('/games/:gameId/ads', async (req, res) => {
  const {
    name,
    yearsPlaying,
    hoursStart,
    hoursEnd,
    weekDays,
    useVoicheChannel,
    discord,
  } = req.body;
  const gameId = req.params.gameId;

  const createdAd = await prisma.ad.create({
    data: {
      name,
      gameId,
      yearsPlaying,
      hoursStart: convertHourStringToMinutes(hoursStart),
      hoursEnd: convertHourStringToMinutes(hoursEnd),
      weekDays: weekDays.join(','),
      useVoicheChannel,
      discord,
    },
  });

  return res.status(201).json(createdAd);
});

app.listen(3002, () => console.log('Example app listening on port 3002!'));
