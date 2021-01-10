import express from 'express';

const app = express();

app.get('/users', (req, res)=>{
  return res.send("Ola Mundo");
});

app.listen(3333);