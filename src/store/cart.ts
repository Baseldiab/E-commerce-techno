import { create } from "zustand";
// import { get_all_products } from "../../../api/requests/getAllProducts.request";
import { devtools } from "zustand/middleware";
import { CartState } from "../components/types/cartState";
import { get_user_carts } from "../components/api/requests/getUserCart.request";
import { CartDto } from "../components/types/cartDto";
import { ProductModel } from "../components/types/productModel";
import { add_new_cart } from "../components/api/requests/addCart.request";
import { update_cart } from "../components/api/requests/updateCart.request";

// const getInitialCart = () => {
//   const cart = localStorage.getItem("cart");
//   return cart ? JSON.parse(cart) : [];
// };

// I MAKE THE USER ID IS TO BE "2" FOR ALL CART
export const useCartStore = create<CartState>()(
  devtools((set, get) => ({
    cartList: [],
    localStorageList: JSON.parse(localStorage.getItem("cart") ?? '[]') ,
    totalPrice: 0,
    isContinuing: false,
    isConfirmedOrder: false,
    isSelectedPayment: false,
    sendGetList: async () => {
      const response = await get_user_carts();
      const cart = localStorage.getItem("cart");
      if (cart) {
        set({
          localStorageList: JSON.parse(cart),
        });
      }else {set({
        localStorageList: [],
      });
      }
      set({
        cartList: response,
      });
    },

    sendAddToCart: async (v: CartDto, productItem: ProductModel) => {
      try {
        const response = await add_new_cart(v);
        const currentList = get().cartList;
        const currentLocalStorageList = get().localStorageList;
    
        currentList.unshift(response);
    
        // const products = useProductStore.getState().cartList;
        const foundProduct = currentLocalStorageList.find((e) => e.id.toString() === productItem.id.toString());
    
        if (foundProduct) {
          foundProduct.quantity = Number(foundProduct.quantity) + 1;
        } else {
          const productClone = { ...productItem, quantity: 1, idAddedToCart: true };
          currentLocalStorageList.push(productClone);
          
        }
    
        localStorage.setItem("cart", JSON.stringify(currentLocalStorageList));
    
        set({
          cartList: [...currentList],
          localStorageList: [...currentLocalStorageList]
        });
      } catch (error) {
        console.error("Error in sendAddToCart:", error);
      }
    },

    sendUpdateCart: async (v, productItem: ProductModel, qty: number) => {
      const response = await update_cart(v, "2");

      console.log(response)

      // const products = useProductStore.getState().cartList;
      const currentList = get().localStorageList;
      const foundIndex = currentList.findIndex((item) => item.id === productItem.id);
      if (foundIndex !== -1) {
        currentList[foundIndex].quantity = qty;
        set({
          localStorageList: [...currentList],
        });
      }else {
        const productClone = { ...productItem, quantity: 1, idAddedToCart: true };
        currentList.push(productClone);
        
      }
      localStorage.setItem("cart", JSON.stringify(currentList));
    },

    sendDeleteItemCart: async (id: string) => {
      // await delete_cart(id);
      
      const currentList = get().localStorageList;
      const foundIndex = currentList.findIndex((e) => e.id === id);
      if (foundIndex !== -1) {
        currentList.splice(foundIndex, 1);
        set({ localStorageList: [...currentList] });
      localStorage.setItem("cart", JSON.stringify(currentList));

      }
    },
    
    calculateTotalPrice:  () => {
      const currentList = get().localStorageList;
      const totalPrice = currentList.reduce((acc: number, product) => {
        acc +=( Number(product.price) * Number(product.quantity));
        return acc;
      }, 0);

      set({ totalPrice: totalPrice });
    },

    continueShopping:  () => {
      set({ isContinuing: true });
    },

    confirmOrder: () => {
      set({ isConfirmedOrder: true });
      const isConfirmed = get().isConfirmedOrder;

  // console.log(isConfirmed);

      if (isConfirmed) {
        localStorage.removeItem("cart")
      
      set({
        cartList: [],
        localStorageList: [],
        totalPrice: 0,
        // isSelectedPayment: false, 
      });
      
    
  }
    },
    checkSelectedPayment: () => {
      set({
        isSelectedPayment: false, 
      });
        
      
    },

    resetCart: () => {
      localStorage.removeItem("cart")
      
      window.location.href =("/")
      set({
        cartList: [],
        localStorageList: [],
        totalPrice: 0,
        isContinuing: false,
        isConfirmedOrder: false,
        isSelectedPayment: false,
      });
    },
  }))
);
