import { ProductModel } from "../types/productModel";

export type WishState = {
  wishList: ProductModel[];
    localStorageWishList: ProductModel[];
    sendGetList: () => void;
    sendAddToWish: ( productItem: ProductModel) => void;
    sendDeleteItemWish: (id: string) => void;
  }