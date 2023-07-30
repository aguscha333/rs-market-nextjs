// eslint-disable-next-line import/prefer-default-export
export const API = {
  // auth
  authToken: "/auth-token/",
  accountConfirmEmail: "/dj-rest-auth/registration/verify-email",
  passwordChange: "/dj-rest-auth/password/change/",
  passwordReset: "/dj-rest-auth/password/reset/",
  passwordResetConfirm: "/dj-rest-auth/password/reset/confirm",
  signUp: "/dj-rest-auth/registration",
  signUpResendEmail: "/dj-rest-auth/registration/resend-email/",
  signUpVerifyEmail: "/dj-rest-auth/registration/verify-email/",
  signIn: "/dj-rest-auth/login",
  signOut: "/dj-rest-auth/logout",
  tokenRefresh: "/dj-rest-auth/token/refresh/",
  tokenVerify: "/dj-rest-auth/token/verify/",
  user: "/dj-rest-auth/user/",

  // categories
  categories: "/api/categories/",
  category: (id: number) => `/api/categories/${id}/`,

  // orders
  orders: "/api/orders/",
  ordersProductList: "/api/orders/product_list/",

  // products
  products: "/api/products/",
  product: (id: number) => `/api/products/${id}/`,
  favoriteAProduct: (id: number) => `/api/products/${id}/favorite/`,
  unfavoriteAProduct: (id: number) => `/api/products/${id}/unfavorite/`,
  productFavorites: "/api/products/favorites/",

  // shopping cart
  addProductToShoppingCart: "/api/shopping_cart/add_product_to_cart/",
  removeProductFromShoppingCart: "/api/shopping_cart/remove_product_from_cart/",
  completePurchase: "/api/shopping_cart/complete_purchase/",
  getShoppingCartDetails: "/api/shopping_cart/get_detail/",
};
