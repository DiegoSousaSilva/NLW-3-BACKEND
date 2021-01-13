import express, { response } from 'express';

import {getRepository} from 'typeorm';
import Orphanage  from './models/Orphanage';

import './database/connection';

const app = express();

app.use(express.json());

app.get('/users', (req, res)=>{
  return res.json({message: "Diego dev"});
});

app.post('/orphanages', async (req, res)=>{
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  } = req.body;

  const orphanageRepository = getRepository(Orphanage);

  const orphanage = orphanageRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  });

 await orphanageRepository.save(orphanage);
  
  return res.json({orphanage: orphanage.name});
})

app.listen(3333);