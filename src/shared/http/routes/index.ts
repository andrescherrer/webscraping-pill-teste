import { Router } from 'express';

const routes = Router();

routes.get('/heathcheck', (request, response) => {
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

export { routes };
