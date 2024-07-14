import { ProductModel } from "../types/productModel";

export type WishState = {
    list: ProductModel[];
    localStorageList: ProductModel[];
    totalPrice: number;
    sendGetList: () => void;
    sendAddToWish: (v: ProductModel , productItem: ProductModel) => void;
    sendDeleteItemWish: (id: string) => void;
  }