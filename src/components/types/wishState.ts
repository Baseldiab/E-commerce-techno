import { ProductModel } from "../types/productModel";

export type WishState = {
    list: ProductModel[];
    localStorageWishList: ProductModel[];
    totalPrice: number;
    sendGetList: () => void;
    sendAddToWish: ( productItem: ProductModel) => void;
    sendDeleteItemWish: (id: string) => void;
  }