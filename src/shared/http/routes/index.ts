import { Router } from 'express';
import { productRoute } from '@product/http/product.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'OK!' });
});

routes.get('/healthcheck', (request, response) => {
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

routes.use('/product', productRoute);

export { routes };
