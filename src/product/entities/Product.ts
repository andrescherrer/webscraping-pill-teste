import { v4 as uuidv4 } from 'uuid';

export class Product {
  id?: string;
  name: string;
  barcode: string;
  brand: string;
  image: string;
  price: number;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
