import { ProductRepository } from '@product/repositories/ProductRepository';
import { Request, Response, Router } from 'express';

const productRoute = Router();
const productRepository = new ProductRepository();

productRoute.post('/', (request: Request, response: Response) => {
  const { name, barcode, brand, image, price } = request.body;
  const product = productRepository.create({
    name,
    barcode,
    brand,
    image,
    price,
  });

  return response.status(201).json(product);
});

productRoute.get('/', (request: Request, response: Response) => {
  const products = productRepository.findAll();

  return response.json(products);
});

export { productRoute };
