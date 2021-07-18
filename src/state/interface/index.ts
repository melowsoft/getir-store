export interface Product {
  tags: string[];
  price: 10.99;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: string;
}

export interface BasketPick {
  name: string;
  price: number;
  quantity: number;
}

export interface CartItem {
  name: string;
  price: number;
}