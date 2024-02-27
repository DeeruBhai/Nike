import Nav from "../components/Nav";
import ProductsCard from "../components/ProductsCard";
import { products } from "../constants";
import Footer from "./Footer";

function Products() {
  return (
    <>
      <Nav />
      <section id="products" className="max-container max-sm:mt-12">
        <div className="flex  flex-row justify-center 5">
          <h2 className="text-4xl font-palanquin font-bold mt-28  ">
            Products
          </h2>
        </div>
        <div className="my-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {products.map((product) => (
            <ProductsCard key={product.name} {...product} />
          ))}
        </div>
      </section>
      <section className="bg-black padding-x padding-t pb-8 ">
        <Footer />
      </section>
    </>
  );
}

export default Products;
