import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/heathcheck', (request, response) => {
  const heathcheck = {
    uptime: process.uptime(),
    message: 'OK!',
    timestamp: Date.now(),
  };

  try {
    response.send(heathcheck);
  } catch (error) {
    heathcheck.message = error;
    response.status(503).send();
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}!`);
});
