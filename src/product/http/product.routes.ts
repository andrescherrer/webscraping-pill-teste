import { Product } from '@product/entities/Product';
import { Router } from 'express';

const productRoutes = Router();

const products: Product[] = [];

productRoutes.get('/', (request, response) => {
  return response.json(products);
});

productRoutes.post('/', (request, response) => {
  const { name, barcode, brand, image, price } = request.body;
  const product = new Product();
  Object.assign(product, {
    name,
    barcode,
    brand,
    image,
    price,
    created_at: new Date(),
  });

  products.push(product);

  return response.status(201).json(product);
});

export { productRoutes };
