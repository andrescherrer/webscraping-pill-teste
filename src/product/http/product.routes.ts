import { Router } from 'express';

const productRoutes = Router();

productRoutes.get('/', (request, response) => {
  return response.json({ message: 'Product GET' });
});

export { productRoutes };
