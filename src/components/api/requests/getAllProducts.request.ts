import { ALL_PRODUCTS } from '../constants';
import { ProductModel } from '../../types/productModel';
import { getCachedData, setCachedData } from '../cashingUtility';
import { errorNotification } from '../../notifications/notifications';
import { useGlobalStore } from '../../../store/global';

export const get_all_products = async (): Promise<ProductModel[]> => {
  const { setLoading } = useGlobalStore.getState(); 
  
  const cacheKey = 'allProducts';
  const cachedData = getCachedData<ProductModel[]>(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  try {
    setLoading(true);
    const response = await fetch(ALL_PRODUCTS, { cache: 'no-cache' });

    if (!response.ok) {
      throw new Error('Error fetching products');
    }

    const body: ProductModel[] = await response.json();
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
