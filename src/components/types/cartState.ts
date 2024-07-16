import { CartDto } from "../types/cartDto";
import { CartModel } from "../types/cartModel";
import { ProductModel } from "../types/productModel";

export type CartState = {
    cartList: CartModel[];
    localStorageList: ProductModel[];
    totalPrice: number;
    isContinuing: boolean;
    isConfirmedOrder: boolean;
    isSelectedPayment: boolean;
    sendGetList: () => void;
    sendAddToCart: (v: CartDto , productItem: ProductModel) => void;
    sendUpdateCart: (v: CartDto ,  productItem: ProductModel, qty: number) => void;
    sendDeleteItemCart: (id: string) => void;
    calculateTotalPrice: () => void;
    continueShopping: () => void;
    confirmOrder: () => void; 
    checkSelectedPayment: () => void; 
    resetCart: () => void;
  }