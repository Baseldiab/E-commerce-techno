import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProductsState } from "../components/types/product.state";
import { get_all_products } from "../components/api/requests/getAllProducts.request";
import { get_all_categories } from "../components/api/requests/getCategories.request";
import { get_single_product } from "../components/api/requests/getSingleProduct.request";
import { get_category_products } from "../components/api/requests/getCategoryProducts.request";
import { ProductDto } from "../components/types/productDto";
import { add_new_products } from "../components/api/requests/addPorduct.request";

export const useProductStore = create<ProductsState>()(
  devtools(
    (set, get) => ({
      list: [],
      categories: [],
      item: null,
      sendGetProductsList: async () => {
        const response = await get_all_products();

        set({
          list: response,
        });
      },
      
      sendGetCategoriesList: async () => {
        const response = await get_all_categories();

        set({
          categories: response,
        });
      },

      sendGetItem: async (id: string) => {
        const response = await get_single_product(id);
        set({ item: response });
      },

      sendGetCategoryProducts: async (category: string) => {
        const response = await get_category_products(category);
        set({ list: response });
      },

      sendGetSearchList: async (query: string) => {
        const currentList = get().list;

        const filteredList = currentList.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );

        set({ list: filteredList });
      },

      sendAdd: async (v: ProductDto) => {
        const response = await add_new_products(v);
        const currentList = get().list;
        currentList.unshift(response);
        set({ list: [...currentList] });
      },

      // sendUpdate: async (v: ProductDto & { id: string }) => {
      //   const response = await xPostForm(ADMINS_UPDATE(v.id), v);
      //   const currentList = get().list;
      //   const foundIndex = currentList.findIndex((e) => e.id === v.id);
      //   if (foundIndex !== -1) {
      //     currentList[foundIndex] = response;
      //     set({ list: [...currentList] });
      //   }
      // },
      // sendDelete: async (id: string) => {
      //   await xDelete(ADMINS_DELETE(id));
      //   const currentList = get().list;
      //   const foundIndex = currentList.findIndex((e) => e.id === id);
      //   if (foundIndex !== -1) {
      //     currentList.splice(foundIndex, 1);
      //     set({ list: [...currentList] });
      //   }
      // },
    })
    //   { enabled: isDevelopment() }
  )
);
