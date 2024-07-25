

import { CATEGORIES } from '../constants';
import { getCachedData, setCachedData } from '../cashingUtility';
import { errorNotification } from '../../notifications/notifications';
import { useGlobalStore } from '../../../store/global';

export const get_all_categories = async (): Promise<string[]> => {
  const { setLoading } = useGlobalStore.getState(); 
  

  const cacheKey = 'allCategories';
  const cachedData = getCachedData<string[]>(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  try {
    setLoading(true);
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
  } finally {
    setLoading(false); // Set loading to false after fetching data
  }
};
