import Swal from "sweetalert2";

export const successAddToWish = () => {
  //     const succesLogin = () => {
  //   dispatch(addToWish(singleProduct));
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
    title: "successfully Add To Wishlist",
  });
};
export const successNotification = (title: string) => {
  //     const succesLogin = () => {
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
    title: title,
  });
};

export const deleteModalNotification = (
  sendDelete: (productId: string) => void,
  productId: string
) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      sendDelete(productId);

      Swal.fire({
        title: "Deleted!",
        text: "Your Product has been removed.",
        icon: "success",
      });
    }
  });
};

export const mustLogin = () => {
  Swal.fire({
    title: "<strong>SIGN IN TO SYNC YOUR SAVED ITEMS ACROSS ALL YOUR DEVICES</strong>",
    icon: "warning",
    // timer: 1000,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: "<a class= 'text-light' href='/login' >SIGN IN</a>",
    confirmButtonAriaLabel: "Thumbs up, great!",
    cancelButtonText: "CONTINUE SHOPPING",
    cancelButtonAriaLabel: "Thumbs down",
  });
};
