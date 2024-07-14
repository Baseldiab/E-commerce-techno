import Swal from "sweetalert2";
import { useAuthStore } from "../store/auth";
import { z } from "zod";
import { FormEvent, useState } from "react";
import PageTitle from "../components/title/PageTitle";
import {
  //   Alert,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function LoginPage() {
  // STATES
  const [username, setUsername] = useState<string>("kevinryan");
  const [password, setPassword] = useState<string>("kev02937@");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // STORE
  const { sendLogin, token } = useAuthStore();

  //   console.log(token);

  // SHOW AND HIDE PASSWORD
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  //   const handleMouseDownPassword = (event) => {};

  //   const passwordMinLength = 6;
  const passwordRegex = new RegExp(
    "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{9,}$"
  );

  const loginSchema = z.object({
    username: z.string().min(3, {
      message: "userName must be more than 3 characters",
    }),
    password: z.string().refine((value: string) => passwordRegex.test(value), {
      message: `Password must be at least 8 characters long`,
    }),
  });

  const successLogin = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Signed in successfully",
    });
  };

  const formatSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validatedData = loginSchema.parse({ username, password });
    sendLogin(validatedData);
    if (token !== "") {
      successLogin();
    }
  };

  return (
    <>
      <PageTitle title={"Login"} />
      <div className=" md:py-16 py-10 shadow-md">
        <form
          className="addProduct-form md:w-[60%] !min-w-[250px] !max-w-[600px] mx-auto"
          onSubmit={formatSubmit}
        >
          <div className="mb-3">
            <TextField
              required
              fullWidth
              id="filled-required"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="filled"
            />
          </div>
          <div className="mb-3">
            <FormControl fullWidth variant="filled">
              <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
              <FilledInput
                fullWidth
                required
                value={password}
                // defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          {/* {errorMsg && <Alert severity="error">{errorMsg}</Alert>} */}
          <div className="form__submit-btn">
            <button className="w-full bg-primary text-white py-2 px-4 rounded" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
