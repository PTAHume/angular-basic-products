export default interface IProduct {
  id: number | null;
  productName: string;
  productCode: string;
  category: string;
  tags?: string[];
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}

export default interface ProductResolved {
  product: IProduct | null;
  error?: string;
}
