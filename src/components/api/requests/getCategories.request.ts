// import {  CATEGORIES } from "../constants";

//     export async function get_all_categories() {
//         try {
//             const response = await fetch(CATEGORIES, { cache: "no-cache" });
            
//             const body = await response.json();
            
//             return body;
//         } catch (e) {
//             console.log(e);
//             return {
//                 data: {},
//             };
//         }
//     }

import { CATEGORIES } from '../constants';
import { getCachedData, setCachedData } from '../cashingUtility';
import { errorNotification } from '../../notifications/notifications';

export const get_all_categories = async (): Promise<string[]> => {
  const cacheKey = 'allCategories';
  const cachedData = getCachedData<string[]>(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  try {
    const response = await fetch(CATEGORIES, { cache: 'no-cache' });
    
    if (!response.ok) {
      throw new Error('Error fetching categories');
    }

    const body: string[] = await response.json();
    setCachedData(cacheKey, body);
    return body;
  } catch (e) {
    console.log(e);
    errorNotification("Bad Request");

    return [];
  }
};
