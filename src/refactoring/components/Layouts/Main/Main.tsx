import { initialCoupons } from "../../../contents/initialCoupons";
import { initialProducts } from "../../../contents/initialProducts";
import { useCoupons, useProducts } from "../../../hooks";
import { AdminPage } from "../../Pages/Admin/AdminPage";
import { CartPage } from "../../Pages/Card/CartPage";


const Main = ({isAdmin}: {isAdmin: boolean}) => {
    const { products, updateProduct, addProduct } = useProducts(initialProducts);
    const { coupons, addCoupon } = useCoupons(initialCoupons);

return (
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


)
}

export default Main;