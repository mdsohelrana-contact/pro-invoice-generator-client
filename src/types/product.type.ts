export type TProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  unit: string;
  stock?: number;
  image: string;
};