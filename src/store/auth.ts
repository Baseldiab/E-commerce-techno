import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { UserForm } from "../components/types/userForm";
import { LoginForm } from "../components/api/requests/login.requests";
import { AuthState } from "../components/types/authState";
import { errorNotification, successNotification } from "../components/notifications/notifications";

export const ROUTE_HOME = "/";
export const ROUTE_LOGIN = "/login";

export const useAuthStore = create(
  devtools(
    persist<AuthState>(
      (set) => ({
        token: localStorage.getItem("token") ?? "",
        username: localStorage.getItem("username") ?? "",
        
            sendLogin: async (v: UserForm) => {
              const response = await LoginForm(v);
            
            if (response && response.token) {
              localStorage.setItem("username", v.username);
                
              localStorage.setItem("token", response.token);
              successNotification("Signed in successfully");
                
                set({
                  token: response.token,
                  
                  username: v.username,
          })
          
          // window.location.href = ROUTE_HOME;
            } else {
              errorNotification("Username or password is incorrect");
        }
        },
            
        isAuthenticated: () => {
          return !!localStorage.getItem("token");
        },
        
        logout: () => {

          localStorage.removeItem("token")
          set({
            token: "",
            username: "",
          });

          // window.location.href = "/login";
        },
      }),
      {
        name: "auth",
        storage: createJSONStorage(() => localStorage),
      }
    ),
    {
      //   enabled: isDevelopment(),
    }
  )
);
