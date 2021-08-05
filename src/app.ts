import express from 'express';
import userRoutes from './routes/user'
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
    res.send(`Hello world!`);
});

app.post('/', (req: express.Request, res: express.Response) => {
    res.send(`Hello world with this params: ${JSON.stringify(req.body)}`);
});

app.use('/user/', userRoutes);


app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
}).on("error", (err) => {
    return console.error(err);
});