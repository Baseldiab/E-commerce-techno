import { useGlobalStore } from "../../../store/global";
import { errorNotification } from "../../notifications/notifications";
import { UserForm } from "../../types/userForm";
import { LOGIN } from "../constants";

export async function LoginForm(v: UserForm) {
  const { setLoadingActions } = useGlobalStore.getState();

  try {
    setLoadingActions(true);
    const response = await fetch(LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(v),
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
