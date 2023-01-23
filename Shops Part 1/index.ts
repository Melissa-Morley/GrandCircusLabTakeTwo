import express, { Application, Request, Response } from 'express';
import { itemRouter } from './routes';

const app:Application = express();

//whatever port makes sense for you
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/shops", itemRouter);

app.listen(port, ():void => {
    console.log(`Listening on port ${port}`);
});