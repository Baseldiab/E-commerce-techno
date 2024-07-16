import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Button, TableFooter, Typography } from "@mui/material";
import { useCartStore } from "../../store/cart";
import { CartDto } from "../types/cartDto";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

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
}));

export default function ShoppingCart() {
  const { localStorageList, sendDeleteItemCart, sendUpdateCart } = useCartStore();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
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
              {/* ADD TO CART LIST */}
              <StyledTableCell component="th" scope="row">
                <div className="flex justify-start items-center gap-3">
                  <Button
                    variant="contained"
                    className={
                      "!p-1 !rounded-full !bg-transparent shadow-none  !text-red-700 !min-w-[30px] "
                    }
                    onClick={() => sendDeleteItemCart(product.id)}
                  >
                    <HighlightOffIcon />
                  </Button>
                  <img src={product.image} className="!max-w-[50px]" alt="product image" />

                  <Typography color="text.primary">{product.title}</Typography>
                </div>
              </StyledTableCell>

              <StyledTableCell>
                <Typography color="text.primary" className="!font-bold text-base">
                  {Number(product.price).toFixed(2)}$
                </Typography>
              </StyledTableCell>

              <StyledTableCell>
                <input
                  className="quantity-field !min-w-[20px] !p-2 border border-slate-500"
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  defaultValue={product.quantity}
                  onChange={(e) => {
                    const payload: CartDto = {
                      userId: 2,
                      date: "2024-6-13",
                      products: [{ productId: product.id, quantity: Number(e.target.value) }],
                    };
                    sendUpdateCart(payload, product, Number(e.target.value));
                  }}
                />
              </StyledTableCell>

              <StyledTableCell>
                <Typography color="text.primary" className="!font-bold text-base">
                  {(Number(product.quantity) * Number(product.price)).toFixed(2)}$
                </Typography>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <StyledTableCell>
            <Button variant="outlined">Update Cart</Button>
          </StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell>
            <Link className="text-sky-500 text-base" color="inherit" to="/products">
              Continue shopping <EastIcon />
            </Link>
          </StyledTableCell>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
