import express, { response } from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.get('/users', (req, res)=>{
  return res.json({message: "Diego dev"});
});

app.post('/orphanages', (req, res)=>{
  console.log(req.body);
  return res.json({message: "Diego Dev"});
})

app.listen(3333);