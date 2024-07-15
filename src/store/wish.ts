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
export const useWishStore = create<WishState>()(
  devtools((set, get) => ({
    wishList: JSON.parse(localStorage.getItem("wish") ?? "[]"),
    localStorageWishList: [] ,
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
        const currentList = get().wishList;
        const currentLocalStorageWishList = get().localStorageWishList;
    
    
        // const products = useProductStore.getState().wishList;
        const foundProduct = currentLocalStorageWishList.find((e) => e.id.toString() === productItem.id.toString());
    
        if (!foundProduct) {
          currentList.push(productItem);
          localStorage.setItem("wish", JSON.stringify(currentList));
          set({
          wishList: [...currentList],
          localStorageWishList: [...currentList]
        });
      }
      } catch (error) {
        console.error("Error in sendAddToCart:", error);
      }
    },

    sendDeleteItemWish: async (id: string) => {
      
      const currentList = get().localStorageWishList;
      const updatedList = currentList.filter((e) => e.id !== id);
        set({
          wishList: [...updatedList],
          localStorageWishList: [...updatedList]
        });

      localStorage.setItem("wish", JSON.stringify(updatedList));

      
    },
    
  
  }))
);
