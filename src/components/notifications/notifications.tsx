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
