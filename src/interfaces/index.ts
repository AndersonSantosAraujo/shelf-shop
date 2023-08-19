export interface IProduct {
  id: number;
  image: string;
  name: string;
  listPrice: number;
  bestPrice: number;
  numberInstallments: number;
  installmentsPrice: number;
}

export interface ICard {
  product: IProduct;
}
