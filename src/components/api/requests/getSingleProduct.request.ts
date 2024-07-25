// import { SINGLE_PRODUCT } from "../constants";

// export async function get_single_product(productId: string | number) {
//     try {
//         const response = await fetch(SINGLE_PRODUCT(productId), { cache: "no-cache" });
        
//         const body = await response.json();
        
//         return body;
//     } catch (e) {
//         console.log(e);
//         return {
//             data: {},
//         };
//     }
// }


import { SINGLE_PRODUCT } from '../constants';
import { getCachedData, setCachedData } from '../cashingUtility';
import { ProductModel } from '../../types/productModel';
import { errorNotification } from '../../notifications/notifications';

export const get_single_product = async (productId: string | number): Promise<ProductModel | null> => {
  const cacheKey = `singleProduct_${productId}`;
  const cachedData = getCachedData<ProductModel>(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  try {
    const response = await fetch(SINGLE_PRODUCT(productId), { cache: 'no-cache' });

    if (!response.ok) {
      throw new Error(`Error fetching product with ID: ${productId}`);
    }

    const body: ProductModel = await response.json();
    setCachedData(cacheKey, body);
    return body;
  } catch (e) {
    console.log(e);
    errorNotification("Bad Request");

    return null;
  }
};
