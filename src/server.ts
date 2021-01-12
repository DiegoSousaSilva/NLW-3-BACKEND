import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (req, res)=>{
  return res.json({message: "Diego dev"});
});

app.listen(3333);