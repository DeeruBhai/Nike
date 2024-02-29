import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/CartTile";
import Nav from "../components/Nav";
import Button from "../components/Button";
import Footer from "./Footer";

function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  console.log(cart, totalCart);
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="mt-2">
        <section className="flex max-container max-sm:mt-12 justify-center">
          {cart && cart.length ? (
            <div className="flex max-sm:flex-col space-between max-sm:space-y-2 justify-center items-center gap-12 max-sm:gap-0 mt-16 ">
              <div className="min-h-[80vh] max-sm:min-h-[60vh] grid md:grid-cols-1 max-w-6xl mx-auto mt-16 justify-center items-center overflow-hidden">
                <div
                  id="cartflex"
                  className="flex flex-col justify-center items-center p-3  overflow-auto"
                >
                  {cart.map((cartItem) => (
                    <CartTile key={cartItem.id} cartItem={cartItem} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center p-5 space-y-4 mt-14 max-sm:mt-8">
                <h1 className="font-bold text-lg text-coral-red font-palanquin ">
                  {" "}
                  Your Cart Summary
                </h1>
                <p>
                  <span className="font-bold text-slate-gray font-montserrat">
                    Total Items:
                  </span>
                  <span className=""> {cart.length}</span>
                </p>
                <p>
                  <span className="font-bold text-slate-gray font-montserrat">
                    Total Amount:
                  </span>
                  <span> {totalCart}</span>
                </p>
                <Button label={"Proceed to pay"} className="mt-8" />
              </div>
            </div>
          ) : (
            <div className=" min-h-[80vh] flex flex-col items-center justify-center mt-20 w-full">
              <h1 className="text-black font-bold text-xl mb-2">
                Your cart is empty
              </h1>
              <Link to="/products">
                <button className="bg-coral-red text-white rounded-lg p-4 mt-6">
                  Shop Now
                </button>
              </Link>
            </div>
          )}
        </section>
        <section className="bg-black padding-x padding-t pb-8 ">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default Cart;
