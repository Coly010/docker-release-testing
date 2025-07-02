import express from 'express';
import { sharedUtils } from '@org/shared-utils';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/shared', (req, res) => {
  res.send({ message: `Hello ${sharedUtils()}` });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
