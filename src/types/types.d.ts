export interface Variant {
  productVariant?: string;
  productColour?: string;
  productPrice?: number;
  inStock?: boolean;
  imageUrl?: string;
  id?: string;
};

export type ResponseVariant = {
  [id: string]: Variant;
}

export type DataSetVariant = Omit<Variant, 'productPrice' | 'inStock'> 
  & { productPrice?: string, inStock?: string } 
  & DOMStringMap