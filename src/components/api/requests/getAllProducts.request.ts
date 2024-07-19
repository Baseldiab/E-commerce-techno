
// import { ALL_PRODUCTS } from "../constants";

//     export async function get_all_products() {
//         try {
//             const response = await fetch(ALL_PRODUCTS, { cache: "no-cache" });
            
//             if (!response.ok) {
//                 throw new Error('Error fetching products');
//             }

//             const body = await response.json();
//             return body;
//         } catch (e) {
//             console.log(e);
//             return {
//                 data: {},
//             };
//         }
//     }

import { ALL_PRODUCTS } from '../constants';
// import { getCachedData, setCachedData } from './cache';
import { ProductModel } from '../../types/productModel';
import { getCachedData, setCachedData } from '../cashingUtility';

export const get_all_products = async (): Promise<ProductModel[]> => {
  const cacheKey = 'allProducts';
  const cachedData = getCachedData<ProductModel[]>(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  try {
    const response = await fetch(ALL_PRODUCTS, { cache: 'no-cache' });

    if (!response.ok) {
      throw new Error('Error fetching products');
    }

    const body: ProductModel[] = await response.json();
    setCachedData(cacheKey, body);
    return body;
  } catch (e) {
    console.log(e);
    return [];
  }
};
