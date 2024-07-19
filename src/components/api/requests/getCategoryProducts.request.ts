// import { CATEGORY_PRODUCTS } from "../constants";

// export async function get_category_products(categoryName: string) {
//     try {
//         const response = await fetch(CATEGORY_PRODUCTS(categoryName), { cache: "no-cache" });
        
//         const body = await response.json();
        
//         return body;
//     } catch (e) {
//         console.log(e);
//         return {
//             data: {},
//         };
//     }
// }

import { CATEGORY_PRODUCTS } from '../constants';
import { getCachedData, setCachedData } from '../cashingUtility';
import { ProductModel } from '../../types/productModel';

export const get_category_products = async (categoryName: string): Promise<ProductModel[]> => {
  const cacheKey = `categoryProducts_${categoryName}`;
  const cachedData = getCachedData<ProductModel[]>(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  try {
    const response = await fetch(CATEGORY_PRODUCTS(categoryName), { cache: 'no-cache' });

    if (!response.ok) {
      throw new Error(`Error fetching products for category: ${categoryName}`);
    }

    const body: ProductModel[] = await response.json();
    setCachedData(cacheKey, body);
    return body;
  } catch (e) {
    console.log(e);
    return [];
  }
};
