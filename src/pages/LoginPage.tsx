import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuthStore } from "../store/auth";
import PageTitle from "../components/title/PageTitle";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { loginSchema } from "../components/rules/rules";
import { successNotification } from "../components/notifications/notifications";

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { sendLogin } = useAuthStore();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "kevinryan",
      password: "kev02937@",
    },
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      await sendLogin(data);

      // successLogin();
      successNotification("Signed in successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <PageTitle title={"Login"} />
      <div className="md:py-16 py-10 shadow-md">
        <form
          className="addProduct-form md:w-[60%] !min-w-[250px] !max-w-[600px] mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-3">
            <TextField
              fullWidth
              id="filled-required"
              label="Username"
              variant="filled"
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username ? errors.username.message : ""}
            />
          </div>
          <div className="mb-3">
            <FormControl fullWidth variant="filled">
              <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword((show) => !show)}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                error={!!errors.password}
              />
              {errors.password && (
                <p style={{ color: "red", margin: "5px 0 0 0" }}>{errors.password.message}</p>
              )}
            </FormControl>
          </div>
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
