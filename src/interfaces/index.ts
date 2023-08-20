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

export interface IWishlistButton {
  wishlist: boolean;
  setWishlist: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IBuyButton {
  add: boolean;
  setAdd: React.Dispatch<React.SetStateAction<boolean>>;
}
