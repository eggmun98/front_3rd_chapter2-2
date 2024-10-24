import { useState } from 'react';
import { CartPage } from './components/CartPage.tsx';
import { AdminPage } from './components/AdminPage.tsx';
import { Coupon, Product } from '../types.ts';
import { useCoupons, useProducts } from "./hooks";
import { initialProducts } from './contents/initialProducts.ts';
import { initialCoupons } from './contents/initialCoupons.ts';
import { useToggle } from './hooks/useToggle.ts';
import Navigation from './components/Layouts/Navigation/Navigation.tsx';

const App = () => {
  const { products, updateProduct, addProduct } = useProducts(initialProducts);
  const { coupons, addCoupon } = useCoupons(initialCoupons);
  const {value: isAdmin, toggle: onClickToggleAdmin} = useToggle()

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation isAdmin={isAdmin} onClickToggleAdmin={onClickToggleAdmin}/>
      <main className="container mx-auto mt-6">
        {isAdmin ? (
          <AdminPage
            products={products}
            coupons={coupons}
            onProductUpdate={updateProduct}
            onProductAdd={addProduct}
            onCouponAdd={addCoupon}
          />
        ) : (
          <CartPage products={products} coupons={coupons}/>
        )}
      </main>
    </div>
  );
};

export default App;
