import { useGlobalStore } from "../../../store/global";
import { errorNotification } from "../../notifications/notifications";
import { GET_USER_CARTS } from "../constants";

export async function get_user_carts() {
  const { setLoading } = useGlobalStore.getState();

  try {
    setLoading(true);

    const response = await fetch(GET_USER_CARTS(), { cache: "no-cache" });

    const body = await response.json();

    return body;
  } catch (e) {
    console.log(e);
    errorNotification("Bad Request");

    return {
      data: {},
    };
  } finally {
    setLoading(false); // Set loading to false after fetching data
  }
}
