import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import { useCartStore } from "../../store/cart";

import { Add, Remove } from "@mui/icons-material";
import { IoMdCloseCircle } from "react-icons/io";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&:nth-of-type(odd)": {
    // backgroundColor: "#dde8ef73",
  },
}));

export default function ShoppingCart() {
  const { localStorageList, sendDeleteItemCart, increaseItemQty, decreaseItemQty } = useCartStore();

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 700,
        }}
        aria-label="customized table"
      >
        <TableHead className="bg-featuresBg">
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell>Quantity</StyledTableCell>
            <StyledTableCell>Total</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {localStorageList.map((product) => (
            <StyledTableRow key={product.id}>
              {/* DELETE CART ITEM AND IMG */}
              <StyledTableCell component="th" scope="row">
                <div className="flex justify-start items-center gap-3">
                  <Button
                    // variant="contained"
                    className={" !rounded-full bg-transparent !size-4 !min-w-10 !min-h-10 "}
                    onClick={() => sendDeleteItemCart(product.id)}
                  >
                    <IoMdCloseCircle className="!text-6xl font-bold text-black" />
                  </Button>
                  <img src={product.image} className="!max-w-[50px]" alt="product image" />

                  <Typography color="text.primary">{product.title}</Typography>
                </div>
              </StyledTableCell>

              {/* PRICE */}
              <StyledTableCell>
                <Typography color="text.primary" className="!font-bold text-base">
                  {Number(product.price).toFixed(2)}$
                </Typography>
              </StyledTableCell>

              {/* COUNTER */}
              <StyledTableCell>
                <div className="flex items-center justify-between my-2  md:h-[35px] h-[30px] border-background border-[.5px] md:!max-w-[70px] max-w-[80px] rounded-sm font-extrabold text-background">
                  <button
                    className=" cursor-pointer bg-slate-100 hover:bg-slate-300 !h-full col-span-1 px-0.5 !min-w-[20px]"
                    onClick={() => {
                      decreaseItemQty(product);
                      // sendUpdateCart(payload, product, qty as number);
                    }}
                  >
                    <Remove className="!text-sm" />
                  </button>
                  <span className="min-w-[30px] text-base text-center">{product.quantity}</span>
                  <button
                    className="cursor-pointer bg-slate-100 hover:bg-slate-300 !h-full col-span-1 px-0.5 !min-w-[20px]"
                    onClick={() => {
                      // sendUpdateCart(payload, product, qty as number);
                      increaseItemQty(product);
                    }}
                  >
                    <Add className="!text-base" />
                  </button>
                </div>
              </StyledTableCell>

              {/* TOTAL OF ITEM PRICE  */}
              <StyledTableCell>
                <Typography color="text.primary" className="!font-bold text-base">
                  {(Number(product.quantity) * Number(product.price)).toFixed(2)}$
                </Typography>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

        {/* <TableFooter className="border-t border-slate-300">
          <StyledTableCell>
            <Button variant="outlined">Update Cart</Button>
          </StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell colSpan={2}>
            <Link className="text-sky-500 text-sm !min-w-fit" color="inherit" to="/products">
              Continue shopping <EastIcon className="!text-sm" />
            </Link>
          </StyledTableCell>
        </TableFooter> */}
      </Table>
    </TableContainer>
  );
}
