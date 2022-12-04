export const state = () => ({
  cart: [],
});

export const getters = {
  getTotalItems: (state) => {
    var total = 0;
    state.cart.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return total.toFixed(2);
  },
};

export const mutations = {
  LoadCart(state) {
    let cart = localStorage.getItem("myCart");
    if (cart) {
      state.cart = JSON.parse(cart);
    }
  },

  AddToCart(state, product) {
    //Check if item is in cart
    let itemFound = state.cart.find((p) => p.product.id === product.id);
    if (!itemFound) {
      state.cart.push({ product, quantity: 1 });
      this.$swal({
        toast: true,
        text: "Item Added To Cart.",
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        position: "top-end",
      });
    }
    if (itemFound) {
      itemFound.quantity = 1;
      this.$swal({
        toast: true,
        text: "Item Already In Cart.",
        icon: "error",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        position: "middle",
      });
    }

    //Update local storage
    localStorage.setItem("myCart", JSON.stringify(state.cart));
  },

  DecreaseItemCount(state, index) {
    let item = state.cart[index];
    if (!item) return;
    if (item.quantity == 1) {
      state.cart.splice(index, 1);
      this.$swal({
        toast: true,
        text: "Cart Deleted.",
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        position: "top-end",
      });
    } else {
      item.quantity -= 1;
      this.$swal({
        toast: true,
        text: "Cart Updated.",
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        position: "top-end",
      });
    }
  },
  RemoveCartItem(state, index) {
    state.cart.splice(index, 1);

    this.$swal({
      toast: true,
      text: "Item Removed From Cart.",
      icon: "success",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });
  },

  IncreaseItemCount(state, index) {
    let item = state.cart[index];
    item.quantity += 1;
    this.$swal({
      toast: true,
      text: "Cart Updated.",
      icon: "success",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });
  },

  ClearCart(state) {
    state.cart = [];
    //Update local storage
    localStorage.removeItem("myCart");
  },
};

export const actions = {};
