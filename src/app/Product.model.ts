export interface Product {
quantity: any;
  id: number;
  title: string;
  description: string;
  handle: string;
  product_type: string;
  vendor: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
