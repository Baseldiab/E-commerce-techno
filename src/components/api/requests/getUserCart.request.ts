// import { useGlobalStore } from "../../../store/global";
// import { errorNotification } from "../../notifications/notifications";
// import { GET_USER_CARTS } from "../constants";

// export async function get_user_carts() {
//   const { setLoading } = useGlobalStore.getState();

//   try {
//     setLoading(true);

//     const response = await fetch(GET_USER_CARTS(), { cache: "no-cache" });

//     const body = await response.json();

//     return body;
//   } catch (e) {
//     console.log(e);
//     errorNotification("Bad Request");

//     return {
//       data: {},
//     };
//   } finally {
//     setLoading(false); // Set loading to false after fetching data
//   }
// }
import { useGlobalStore } from '../../../store/global';
import { errorNotification } from '../../notifications/notifications';
import { CartModel } from '../../types/cartModel';
import { getCachedData, setCachedData } from '../cashingUtility';
import { GET_USER_CARTS } from '../constants';

export interface UserCart {
  id: string;
  items: { productId: string; quantity: number }[];
}

export const get_user_carts = async (): Promise<CartModel[]> => {
  const cacheKey = 'userCarts';
  const cachedData = getCachedData<CartModel[]>(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const { setLoading } = useGlobalStore.getState();

  try {
    setLoading(true);

    const response = await fetch(GET_USER_CARTS(), { cache: 'no-cache' });

    if (!response.ok) {
      throw new Error('Error fetching user carts');
    }

    const body: CartModel[] = await response.json();
    setCachedData(cacheKey, body);
    return body;
  } catch (e) {
    console.log(e);
    errorNotification('Bad Request');
    return [];
  } finally {
    setLoading(false); // Set loading to false after fetching data
  }
};
