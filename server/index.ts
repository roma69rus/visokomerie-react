import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import sequilize from './db';
import models from './models/models';
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT || 5000;


const app: Express = express();
app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: 'WORKING'})
})





const start = async function start() {
  try {
    await sequilize.authenticate()
    console.log('Connection has been established successfully.');
    await sequilize.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start();


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

