import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Store/Slice/cart-slice";

function CartTile({ cartItem }) {
  console.log(cartItem);
  const dispatch = useDispatch();
  const handleRemoveCart = () => {
    dispatch(removeFromCart(cartItem.id));
    console.log("ansflahdfkn");
  };
  return (
    <>
      <div className="flex items-center p-5 justify-between mt-2 rounded-xl w-full">
        <div className="flex p-3">
          <img
            src={cartItem.imgURL}
            alt={cartItem.name}
            className="h-28 rounded-lg"
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-coral-red font-bold font-palanquin">
              {cartItem?.name}
            </h1>
            <p className=" text-slate-gray font-bold font-montserrat">
              {`$ ${cartItem.price}`}
            </p>
          </div>
        </div>
        <div>
          <button onClick={handleRemoveCart}>
            <FontAwesomeIcon icon={faTrash} className="text-coral-red pl-8" />
          </button>
        </div>
      </div>
    </>
  );
}

export default CartTile;
