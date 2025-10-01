export interface Product {
  id: string | number;
  name: string;
  title?: string;
  price: string | number;
  image: string;
  supplier?: string;
  origin?: string;
  unit: string;
  moq?: string;
  quantity?: string;
  description?: string;
}

export interface CartItem extends Product {
  cartQuantity: number;
  subtotal: number;
}
