import { star } from "../assets/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function ProductsCard({ imgURL, name, price, rating }) {
  const handleClick = () => {
    console.log("kjbkjb");
  };
  return (
    <>
      <div className="flex flex-1 flex-col w-full max-sm:w-full  px-8">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
        <div className=" mt-8 flex  flex-row justify-between">
          <div className=" flex  justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24} />
            <p className=" font-montserrat text-xl leading-normal text-slate-gray">
              {rating}
            </p>
          </div>
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-coral-red text-2xl leading-normal pl-12 hover:animate-pulse"
            onClick={handleClick}
          />
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin ">
          {name}
        </h3>
        <p className="mt-2  leading-normal text-coral-red font-montserrat">
          {price}
        </p>
      </div>
    </>
  );
}

export default ProductsCard;
