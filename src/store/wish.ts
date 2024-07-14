import { create } from "zustand";
// import { get_all_products } from "../../../api/requests/getAllProducts.request";
import { devtools } from "zustand/middleware";
import { ProductModel } from "../components/types/productModel";
import { WishState } from "../components/types/wishState";

// const getInitialCart = () => {
//   const wish = localStorage.getItem("wish");
//   return wish ? JSON.parse(wish) : [];
// };

// I MAKE THE USER ID IS TO BE "2" FOR ALL CART
export const useCartStore = create<WishState>()(
  devtools((set, get) => ({
    list: [],
    localStorageWishList: [] ,
    totalPrice: 0,
    sendGetList: async () => {
      const wish = localStorage.getItem("wish");
      if (wish) {
        set({
          localStorageWishList: JSON.parse(wish),
        });
      }else {set({
        localStorageWishList: [],
      });
      }
 
    },

    sendAddToWish: async ( productItem: ProductModel) => {
      try {
        const currentList = get().list;
        const currentLocalStorageWishList = get().localStorageWishList;
    
    
        // const products = useProductStore.getState().list;
        const foundProduct = currentLocalStorageWishList.find((e) => e.id.toString() === productItem.id.toString());
    
        if (foundProduct) {
          foundProduct.quantity = Number(foundProduct.quantity) + 1;
        } else {
          const productClone = { ...productItem, quantity: 1, idAddedToCart: true };
          currentLocalStorageWishList.push(productClone);
          
        }
    
        localStorage.setItem("wish", JSON.stringify(currentLocalStorageWishList));
    
        set({
          list: [...currentList],
          localStorageWishList: [...currentLocalStorageWishList]
        });
      } catch (error) {
        console.error("Error in sendAddToCart:", error);
      }
    },

    sendDeleteItemWish: async (id: string) => {
      
      const currentList = get().localStorageWishList;
      const foundIndex = currentList.findIndex((e) => e.id === id);
      if (foundIndex !== -1) {
        currentList.splice(foundIndex, 1);
        set({ localStorageWishList: [...currentList] });
      localStorage.setItem("wish", JSON.stringify(currentList));

      }
    },
    
  
  }))
);
