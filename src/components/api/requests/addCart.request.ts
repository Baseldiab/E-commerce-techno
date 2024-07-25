// ADD_NEW_CART

import { useGlobalStore } from "../../../store/global";
import { errorNotification } from "../../notifications/notifications";
import { CartDto } from "../../types/cartDto";
import { ADD_NEW_CART } from "../constants";

export async function add_new_cart(data_form: CartDto) {
  const { setLoadingActions } = useGlobalStore.getState();

  try {
    setLoadingActions(true);
    const response = await fetch(ADD_NEW_CART, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data_form),
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
