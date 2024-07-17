import Radio from "@mui/material/Radio";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { FaPaypal, FaAmazon } from "react-icons/fa";
import { BiLogoVenmo } from "react-icons/bi";
import { TfiMoney } from "react-icons/tfi";
import { CiCreditCard1 } from "react-icons/ci";
import CheckoutRadioLabel from "./checkoutRadioLabel";
import { useCartStore } from "../../store/cart";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CheckoutOrder from "./CheckoutOrder";
import { paySchema } from "../rules/rules";
import { CheckoutFormType } from "../types/checkoutFormType";

export default function CheckoutForm() {
  const { confirmOrder } = useCartStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(paySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      zipCode: "",
      email: "",
      phoneNumber: "",
      governorate: "cairo",
      city: "zamalek",
      region: "Upscale residential area",
      paymentMethod: "paypal",
    },
  });

  const onSubmit = (data: CheckoutFormType) => {
    confirmOrder();
    console.log(data);
    navigate("/orderPlaced", { replace: true });
  };

  return (
    <>
      <form className="flex-grow" onSubmit={handleSubmit(onSubmit)}>
        <section className="myContainer py-8 flex md:justify-between justify-center items-start gap-4 max-md:flex-wrap">
          <div>
            <Controller
              name="paymentMethod"
              control={control}
              render={({ field }) => (
                <FormControl
                  className="!border border-solid !border-gray-300"
                  sx={{ border: "1px solid #E4E7E9", width: "100%" }}
                >
                  <FormLabel className="!border-b !p-4" id="demo-form-control-label-placement">
                    Payment Methods
                  </FormLabel>
                  <RadioGroup
                    className="md:!justify-between !justify-center p-4"
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    {...field}
                  >
                    <FormControlLabel
                      className="my-2"
                      value="paypal"
                      control={<Radio />}
                      label={
                        <CheckoutRadioLabel
                          icon={<FaPaypal className="text-3xl text-blue-700" />}
                          text={"Paypal"}
                        />
                      }
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="amazon"
                      control={<Radio />}
                      label={
                        <CheckoutRadioLabel
                          icon={<FaAmazon className="text-3xl" />}
                          text={"Amazon Pay"}
                        />
                      }
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="venmo"
                      control={<Radio />}
                      label={
                        <CheckoutRadioLabel
                          icon={<BiLogoVenmo className="text-3xl text-sky-500" />}
                          text={"Venmo"}
                        />
                      }
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="cash"
                      control={<Radio />}
                      label={
                        <CheckoutRadioLabel
                          icon={<TfiMoney className="text-3xl text-secondary" />}
                          text={"Cash on delivery"}
                        />
                      }
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="credit"
                      control={<Radio />}
                      label={
                        <CheckoutRadioLabel
                          icon={<CiCreditCard1 className="text-3xl text-secondary" />}
                          text={"Debid/Credit Card"}
                        />
                      }
                      labelPlacement="top"
                    />
                  </RadioGroup>
                </FormControl>
              )}
            />
            {errors.paymentMethod && (
              <p className="text-red-600 text-sm">{errors.paymentMethod.message}</p>
            )}

            <div className="my-5">
              <h2 className="font-semibold py-4">Payment Description</h2>
              <div className="flex justify-between items-center gap-4 my-5">
                <TextField
                  fullWidth
                  id="firstName"
                  label="First Name"
                  {...register("firstName")}
                  variant="outlined"
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                />
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  {...register("lastName")}
                  variant="outlined"
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                />
              </div>
              <div className="mb-5">
                <TextField
                  fullWidth
                  id="address"
                  label="Address"
                  {...register("address")}
                  variant="outlined"
                  error={!!errors.address}
                  helperText={errors.address?.message}
                />
              </div>

              <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 mb-5 gap-4">
                <Controller
                  name="governorate"
                  control={control}
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <InputLabel id="governorates-label">Governorates</InputLabel>
                      <Select
                        labelId="governorates-label"
                        {...field}
                        label="Governorates"
                        error={!!errors.governorate}
                      >
                        <MenuItem value={"cairo"}>Cairo</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <InputLabel id="cities-label">Cities</InputLabel>
                      <Select
                        labelId="cities-label"
                        {...field}
                        label="Cities"
                        error={!!errors.city}
                      >
                        <MenuItem value={"zamalek"}>Zamalek</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
                <Controller
                  name="region"
                  control={control}
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <InputLabel id="regions-label">Regions</InputLabel>
                      <Select
                        labelId="regions-label"
                        {...field}
                        label="Regions"
                        error={!!errors.region}
                      >
                        <MenuItem value={"Upscale residential area"}>
                          Upscale residential area
                        </MenuItem>
                      </Select>
                    </FormControl>
                  )}
                />
                <TextField
                  fullWidth
                  id="zip-code"
                  label="Zip Code"
                  {...register("zipCode")}
                  variant="outlined"
                  error={!!errors.zipCode}
                  helperText={errors.zipCode?.message}
                />
              </div>

              <div className="flex justify-between items-center gap-4 mb-5">
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  {...register("email")}
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
                <TextField
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  {...register("phoneNumber")}
                  variant="outlined"
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber?.message}
                />
              </div>
            </div>
          </div>

          <CheckoutOrder />
        </section>
      </form>
    </>
  );
}
