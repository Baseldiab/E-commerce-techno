import { UserForm } from "./userForm";

export type AuthState = {
    token: string,
    username: string,
    sendLogin: (v: UserForm ) => void;
    logout: () => void;
    isAuthenticated: () => boolean;
  }