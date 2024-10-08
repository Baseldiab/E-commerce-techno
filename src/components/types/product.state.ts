import { ProductDto } from "../types/productDto";
import { ProductModel } from "../types/productModel";

export type ProductsState = {
    list: ProductModel[];
    categories: string[];
    item: ProductModel | null;
    sendGetProductsList: () => void;
    sendGetCategoriesList: () => void;
    sendGetItem: (id: string) => void;
    sendGetCategoryProducts: (category: string) => void;
    sendGetSearchList: (query: string) => void;
    sendAdd: (v: ProductDto) => void;
    // sendUpdate: (v: ProductDto & { id: string }) => void;
    // sendDelete: (id: string) => void;
  }