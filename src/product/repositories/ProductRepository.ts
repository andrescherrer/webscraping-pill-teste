import { Product } from '@product/entities/Product';

type CreateProductDTO = {
  name: string;
  barcode: string;
  brand: string;
  image: string;
  price: string;
};

export class ProductRepository {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  create({ name, barcode, brand, image, price }: CreateProductDTO): Product {
    const product = new Product();
    Object.assign(product, {
      name,
      barcode,
      brand,
      image,
      price,
      created_at: new Date(),
    });

    this.products.push(product);
    return product;
  }

  findAll(): Product[] {
    return this.products;
  }
}
