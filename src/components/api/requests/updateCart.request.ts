// UPDATE_USER_CARTS

import { useGlobalStore } from "../../../store/global";
import { errorNotification } from "../../notifications/notifications";
import { CartDto } from "../../types/cartDto";
import { UPDATE_USER_CARTS } from "../constants";

export async function update_cart(data_form: CartDto, userId: string | number) {
  const { setLoadingActions } = useGlobalStore.getState();

  try {
    setLoadingActions(true);
    const response = await fetch(UPDATE_USER_CARTS(userId), {
      method: "PUT",
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
