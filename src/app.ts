import express, {
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';
import todoRoutes from './routes/todos';
import { json } from 'body-parser';

const app = express();

const PORT = process.env.PORT;
console.log('PORT', PORT);

app.use(json());

app.use('/', (req, res) => {
  res.send('ahoj');
});

app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
