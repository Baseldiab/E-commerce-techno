import { CartDto } from "../types/cartDto";
import { CartModel } from "../types/cartModel";
import { ProductModel } from "../types/productModel";

export type CartState = {
    cartList: CartModel[];
    localStorageList: ProductModel[];
    totalPrice: number;
    sendGetList: () => void;
    sendAddToCart: (v: CartDto , productItem: ProductModel) => void;
    sendUpdateCart: (v: CartDto , productId: string, qty: number) => void;
    sendDeleteItemCart: (id: string) => void;
    calculateTotalPrice: () => void;
  }