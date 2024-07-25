// DELETE_USER_CARTS

import { useGlobalStore } from "../../../store/global";
import { errorNotification } from "../../notifications/notifications";
import { DELETE_USER_CARTS } from "../constants";

export async function delete_cart(cartId: string | number) {
  const { setLoadingActions } = useGlobalStore.getState();

  try {
    setLoadingActions(true);
    const response = await fetch(DELETE_USER_CARTS(cartId), {
      method: "DELETE",
      cache: "no-cache",
    });

    const body = await response.json();

    return body;
  } catch (e) {
    console.log(e);
    errorNotification("Bad Request");

    return {
      data: {},
    };
  } finally {
    setLoadingActions(false); // Set loading to false after fetching data
  }
}
