import {  Coupon, Product } from "../../../../types";
import { useCart } from "../../../hooks";
import CartDetails from "./Units/CartDetails/CartDetails";
import ProductList from "./Units/ProductList/ProductList";

interface Props {
  products: Product[];
  coupons: Coupon[];
}

export const CartPage = ({ products, coupons }: Props) => {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    applyCoupon,
    calculateTotal,
    selectedCoupon
  } = useCart();


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">장바구니</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductList
        products={products}
        cart={cart}
        addToCart={addToCart}
        />
        <CartDetails
        cart={cart}
        coupons={coupons}
        selectedCoupon={selectedCoupon}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        applyCoupon={applyCoupon}
        calculateTotal={calculateTotal}
        />
      </div>
    </div>
  );
};
