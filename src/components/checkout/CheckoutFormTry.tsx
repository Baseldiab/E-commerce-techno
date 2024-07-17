// import * as React from "react";
// import Radio from "@mui/material/Radio";
// import {
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   InputLabel,
//   MenuItem,
//   RadioGroup,
//   Select,
//   TextField,
// } from "@mui/material";
// import { FaPaypal } from "react-icons/fa6";
// import CheckoutRadioLabel from "./checkoutRadioLabel";
// import { FaAmazon } from "react-icons/fa";
// import { BiLogoVenmo } from "react-icons/bi";
// import { TfiMoney } from "react-icons/tfi";
// import { CiCreditCard1 } from "react-icons/ci";
// import { useCartStore } from "../../store/cart";
// import { z } from "zod";
// import EastIcon from "@mui/icons-material/East";
// import { Button } from "@mui/material";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function CheckoutFormTry() {
//   // STATES
//   const [selectedValue, setSelectedValue] = React.useState("paypal");
//   const [firstName, setFirstName] = useState<string>("");
//   const [lastName, setLastName] = useState<string>("");
//   const [address, setAddress] = useState<string>("");
//   // const [country, setCountry] = useState<string>("");
//   const [city, setCity] = useState<string>("");
//   const [region, setRegion] = useState<string>("");
//   const [zipCode, setZipCode] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [phoneNumber, setPhoneNumber] = useState<string>("");
//   const [governorate, setGovernorate] = useState("");

//   const [firstNameError, setFirstNameError] = React.useState<string>("");
//   const [lastNameError, setLastNameError] = useState<string>("");
//   const [addressError, setAddressError] = useState<string>("");
//   // const [setCountryError] = useState<string>("");
//   // const [setCityError] = useState<string>("");
//   // const [setRegionError] = useState<string>("");
//   const [zipCodeError, setZipCodeError] = useState<string>("");
//   const [emailError, setEmailError] = useState<string>("");
//   const [phoneNumberError, setPhoneNumberError] = useState<string>("");

//   // STORE
//   const { localStorageList, totalPrice, confirmOrder } = useCartStore();

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedValue(event.target.value);
//   };

//   const navigate = useNavigate();

//   const paySchema = z.object({
//     firstName: z.string().min(3, {
//       message: "First Name must be more than 3 characters",
//     }),
//     lastName: z.string().min(3, {
//       message: "Last Name must be more than 3 characters",
//     }),
//     address: z.string().min(3, {
//       message: "Last Name must be more than 3 characters",
//     }),

//     zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Invalid zip code format"),
//     email: z.string().email("Invalid email format"),
//     phoneNumber: z.string().regex(/^\d{10}$/, "Invalid phone number format"),
//   });
//   // console.log(selectedValue);

//   const formatSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const validatedData = paySchema.parse({
//         firstName,
//         lastName,
//         address,
//         zipCode,
//         email,
//         phoneNumber,
//       });
//       confirmOrder();

//       console.log(validatedData);
//       navigate("/orderPlaced", { replace: true });
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         // Reset errors
//         setFirstNameError("");
//         setLastNameError("");
//         setAddressError("");
//         // setCountryError("");
//         // setCityError("");
//         // setRegionError("");
//         setZipCodeError("");
//         setEmailError("");
//         setPhoneNumberError("");

//         // Set errors
//         error.errors.forEach((err) => {
//           switch (err.path[0]) {
//             case "firstName":
//               setFirstNameError(err.message);
//               break;
//             case "lastName":
//               setLastNameError(err.message);
//               break;
//             case "address":
//               setAddressError(err.message);
//               break;
//             // case "country":
//             //   setCountryError(err.message);
//             //   break;
//             // case "city":
//             //   setCityError(err.message);
//             //   break;
//             // case "region":
//             //   setRegionError(err.message);
//             //   break;
//             case "zipCode":
//               setZipCodeError(err.message);
//               break;
//             case "email":
//               setEmailError(err.message);
//               break;
//             case "phoneNumber":
//               setPhoneNumberError(err.message);
//               break;
//             default:
//               break;
//           }
//         });
//       } else {
//         // Handle other errors
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <>
//       <form className="flex-grow" onSubmit={formatSubmit}>
//         <section className="myContainer py-8 flex md:justify-between justify-center items-start gap-4 max-md:flex-wrap">
//           <div>
//             <FormControl
//               className="!border border-solid !border-gray-300"
//               sx={{ border: "1px solid #E4E7E9", width: "100%" }}
//             >
//               <FormLabel className="!border-b !p-4" id="demo-form-control-label-placement">
//                 Payment Methods
//               </FormLabel>
//               <RadioGroup
//                 className="md:!justify-between !justify-center p-4"
//                 row
//                 aria-labelledby="demo-form-control-label-placement"
//                 name="position"
//                 defaultValue="top"
//               >
//                 <FormControlLabel
//                   className="my-2"
//                   value="paypal"
//                   control={<Radio checked={selectedValue === "paypal"} onChange={handleChange} />}
//                   label={
//                     <CheckoutRadioLabel
//                       icon={<FaPaypal className="text-3xl text-blue-700" />}
//                       text={"Paypal"}
//                     />
//                   }
//                   labelPlacement="top"
//                 />

//                 <FormControlLabel
//                   value="amazon"
//                   control={<Radio checked={selectedValue === "amazon"} onChange={handleChange} />}
//                   label={
//                     <CheckoutRadioLabel
//                       icon={<FaAmazon className="text-3xl" />}
//                       text={"Amazon Pay"}
//                     />
//                   }
//                   labelPlacement="top"
//                 />
//                 <FormControlLabel
//                   value="venmo"
//                   control={<Radio checked={selectedValue === "venmo"} onChange={handleChange} />}
//                   label={
//                     <CheckoutRadioLabel
//                       icon={<BiLogoVenmo className="text-3xl text-sky-500" />}
//                       text={"Venmo"}
//                     />
//                   }
//                   labelPlacement="top"
//                 />
//                 <FormControlLabel
//                   value="cash"
//                   control={<Radio checked={selectedValue === "cash"} onChange={handleChange} />}
//                   label={
//                     <CheckoutRadioLabel
//                       icon={<TfiMoney className="text-3xl text-secondary" />}
//                       text={"Cash on delivery"}
//                     />
//                   }
//                   labelPlacement="top"
//                 />
//                 <FormControlLabel
//                   value="credit"
//                   control={<Radio checked={selectedValue === "credit"} onChange={handleChange} />}
//                   label={
//                     <CheckoutRadioLabel
//                       icon={<CiCreditCard1 className="text-3xl text-secondary" />}
//                       text={"Debid/Credit Card"}
//                     />
//                   }
//                   labelPlacement="top"
//                 />
//               </RadioGroup>
//             </FormControl>

//             <div className="my-5">
//               <h2 className="font-semibold py-4">Payment Description</h2>
//               {/* FIRST NAME AND LAST NAME */}
//               <div className="flex justify-between items-center gap-4 my-5">
//                 <TextField
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                   variant="outlined"
//                   error={!!firstNameError}
//                   helperText={firstNameError}
//                 />
//                 {/* Last Name */}
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                   variant="outlined"
//                   error={!!lastNameError}
//                   helperText={lastNameError}
//                 />
//               </div>
//               {/* Address */}
//               <div className="mb-5">
//                 <TextField
//                   required
//                   fullWidth
//                   id="address"
//                   label="Address"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                   variant="outlined"
//                   error={!!addressError}
//                   helperText={addressError}
//                 />
//               </div>

//               <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 mb-5 gap-4">
//                 <FormControl fullWidth>
//                   <InputLabel id="governorates-label">Governorates</InputLabel>
//                   <Select
//                     required
//                     labelId="governorates-label"
//                     id="governorates"
//                     value={governorate}
//                     onChange={(event) => setGovernorate(event.target.value)}
//                     label="Governorates"
//                   >
//                     <MenuItem value={"cairo"}>Cairo</MenuItem>
//                     {/* Add more options as needed */}
//                   </Select>
//                 </FormControl>
//                 <FormControl fullWidth>
//                   <InputLabel id="cities-label">Cities</InputLabel>
//                   <Select
//                     required
//                     labelId="cities-label"
//                     id="cities"
//                     value={city}
//                     onChange={(event) => setCity(event.target.value)}
//                     label="Cities"
//                   >
//                     <MenuItem value={"zamalek"}>Zamalek</MenuItem>
//                     {/* Add more options as needed */}
//                   </Select>
//                 </FormControl>
//                 <FormControl fullWidth>
//                   <InputLabel id="regions-label">Regions</InputLabel>
//                   <Select
//                     required
//                     labelId="regions-label"
//                     id="regions"
//                     value={region}
//                     onChange={(event) => setRegion(event.target.value)}
//                     label="Regions"
//                   >
//                     <MenuItem value={"Upscale residential area"}>Upscale residential area</MenuItem>
//                     {/* Add more options as needed */}
//                   </Select>
//                 </FormControl>
//                 <TextField
//                   required
//                   fullWidth
//                   id="zip-code"
//                   label="Zip Code"
//                   value={zipCode}
//                   onChange={(e) => setZipCode(e.target.value)}
//                   variant="outlined"
//                   error={!!zipCodeError}
//                   helperText={zipCodeError}
//                 />
//               </div>

//               <div className="flex justify-between items-center gap-4 mb-5">
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   variant="outlined"
//                   error={!!emailError}
//                   helperText={emailError}
//                 />

//                 <TextField
//                   required
//                   fullWidth
//                   id="phone"
//                   label="Phone Number"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   variant="outlined"
//                   error={!!phoneNumberError}
//                   helperText={phoneNumberError}
//                 />
//               </div>
//             </div>
//           </div>

//           <section className="p-4 border rounded-md min-w-[270px]">
//             <div className="">
//               <h2 className="uppercase font-bold">Application summery</h2>

//               {localStorageList.map((product, index) => (
//                 <React.Fragment key={`cart-product-${index}`}>
//                   <div className="flex justify-start items-center my-2 gap-4">
//                     <figure>
//                       <img src={product.image} className="!max-w-[50px]" alt="product image" />
//                     </figure>
//                     <div className="max-w-[170px] *:text-start">
//                       <span>{product.title}</span>
//                       <p>
//                         <span className="text-sky-500 font-semibold">
//                           {Number(product.price).toFixed(2)}$
//                         </span>
//                         <span className="mx-0.5">x</span>
//                         <span>{product.quantity}</span>
//                       </p>
//                     </div>
//                   </div>
//                 </React.Fragment>
//               ))}

//               <div className="flex justify-between items-center my-1.5">
//                 <span>total</span>
//                 <span>{totalPrice.toFixed(2)}</span>
//               </div>

//               <div className="flex justify-between items-center my-1.5">
//                 <span>Delivery</span>
//                 <span>Free</span>
//               </div>

//               <div className="flex justify-between items-center my-1.5">
//                 <span>Discount</span>
//                 <span>{"5.00$"}</span>
//               </div>

//               <div className="flex justify-between items-center my-1.5">
//                 <span>Tax</span>
//                 <span>{"10.00$"}</span>
//               </div>
//             </div>
//             <hr className="my-2" />
//             <div className="flex justify-between items-center my-1.5">
//               <span className="font-semibold">subtotal</span>
//               <span className="font-bold text-xl">{(totalPrice - 5).toFixed(2)}</span>
//             </div>
//             <div className="pt-3">
//               <Button
//                 variant="contained"
//                 className={"w-full shadow-none !bg-secondary "}
//                 type={"submit"}
//                 // onClick={(e) => {
//                 //   // confirmOrder();
//                 //   // formatSubmit(e);
//                 // }}
//               >
//                 {/* <Link className="text-white text-sm py-2" color="inherit" to="/orderPlaced">
//             </Link> */}
//                 Confirm Order <EastIcon />
//               </Button>
//             </div>
//           </section>
//         </section>
//       </form>
//     </>
//   );
// }
