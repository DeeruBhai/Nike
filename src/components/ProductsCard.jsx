import { star } from "../assets/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Store/Slice/cart-slice";
import { CartData, userData } from "../fb/firebaseFunctions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductsCard(product) {
  const [userDetail, setuserDetail] = useState();
  const navigate = useNavigate();
  let uid = localStorage.getItem("uid");
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  // const product = {
  //   imgurl: imgURL,
  //   prodname: name,
  //   price: price,
  // };

  const handleAdd = () => {
    if (uid != null) {
      dispatch(addToCart(product));
      CartData(uid, product);
    } else {
      navigate("/login");
    }
  };
  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
    console.log("ansflahdfkn");
  };

  async function profileDetail() {
    if (uid != null) {
      const userProfile = await userData(uid);
      Promise.resolve();
      setuserDetail(userProfile);
    }
  }
  useEffect(() => {
    profileDetail();
  }, []);
  return (
    <>
      <div className="flex flex-1 flex-col w-full max-sm:w-full  px-8">
        <img
          src={product.imgURL}
          alt={product.name}
          className="w-[280px] h-[280px]"
        />
        <div className=" mt-8 flex  flex-row justify-between">
          <div className=" flex  justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24} />
            <p className=" font-montserrat text-xl leading-normal text-slate-gray">
              {product.rating}
            </p>
          </div>
          <FontAwesomeIcon
            icon={faCartShopping}
            className={`${
              cart.some((item) => item.id === product.id)
                ? "text-black"
                : "text-coral-red"
            } text-2xl leading-normal pl-12 hover:animate-pulse`}
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemove
                : handleAdd
            }
          />
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin ">
          {product.name}
        </h3>
        <p className="mt-2  leading-normal text-coral-red font-montserrat">
          {`$ ${product.price}`}
        </p>
      </div>
    </>
  );
}

export default ProductsCard;
