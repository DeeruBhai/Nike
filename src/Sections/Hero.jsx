import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  p-2"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pl-6 pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading[82] font-bold ">
          <span className="xl:bg-white xl:whitespace-nowrap relative  pr-10">
            The New Arrival
          </span>
          <br /> <span className="text-coral-red inline-block mt-3">Nike </span>{" "}
          Shoes
        </h1>
        <p className="font-montserrat text-slate-grey text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Link to="/products">
          <Button label="Shop now" iconURL={arrowRight} />
        </Link>
        <div className="flex justify-start items-start fles-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palaquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-grey">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative  flex-1  flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative "
        />
        <div
          className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[17%] max-sm:px-6"
          id="shoecollec"
        >
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
