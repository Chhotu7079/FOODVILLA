import React from "react";
import { useSelector } from "react-redux";
import { BsFillStarFill } from "react-icons/bs";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MENU_IMG_URL } from "../../../utils/Config";
import brokenImg from "../../../images/brokenImg.png";
const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  console.log(items);
  return (
    <div className="min-h-[90vh] flex flex-col justify-start items-center ">
      <div className="w-[100%] bg-[#406E00] text-white flex flex-col justify-center items-center rounded-b-lg h-20">
        <h1 className="text-2xl sm:text-5xl font-bold">Cart</h1>
      </div>
      {items.length === 0 ? (
        <div className="mt-10">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Nothing on the cart!
          </h1>
        </div>
      ) : (
        <div className="w-[90%] flex flex-wrap gap-x-4 gap-y-2 mt-8 justify-center">
          {items.map((item) => {
            return (
              <div className="flex w-80 h-96 flex-col rounded-xl bg-[#eaf1ec] bg-clip-border text-black shadow-md">
                <div className="overflow-hidden shadow-lg rounded-xl">
                  <img
                    src={MENU_IMG_URL + item.imageId}
                    alt={`${item.name} image not found`}
                    className="object-cover"
                    onError={({ target }) => {
                      target.onError = null;
                      target.src = brokenImg;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {item.name}
                  </h5>
                  <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    <span className="flex flex-row items-center justify-start gap-x-1">
                      <LiaRupeeSignSolid />
                      {item.price / 100}
                    </span>
                    <span className="flex flex-row items-center justify-start gap-x-2">
                      {item.ratings.aggregatedRating.rating} <BsFillStarFill />
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Cart;
