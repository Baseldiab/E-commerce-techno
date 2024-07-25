// ADD_NEW_CART

import { errorNotification } from "../../notifications/notifications";
import { CartDto } from "../../types/cartDto";
import { ADD_NEW_CART } from "../constants";

    export async function add_new_cart(data_form: CartDto) {
        try {
            const response = await fetch(ADD_NEW_CART,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data_form),
                cache: "no-cache"
            });
            
            const body = await response.json();
            
            return body;
        } catch (e) {
            console.log(e);
    errorNotification("Bad Request")

            return {
                data: {},
            };
        }
    }