import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../../../Slice/CartSlice";
import { BsFillStarFill } from "react-icons/bs";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { Toaster, toast } from "react-hot-toast";
import { MENU_IMG_URL } from "../../../utils/Config";

const MenuItem = ({ item }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  const notify = () => toast.success("Item Added to the Cart!");

  return (
    <div className="flex w-80 h-96 flex-col rounded-xl bg-[#eaf1ec] bg-clip-border text-black shadow-md">
      <div className="overflow-hidden shadow-lg rounded-xl">
        <img
          src={MENU_IMG_URL + item?.imageId}
          alt={`${item.name} image not found`}
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {item?.name.length > 20
            ? item?.name.slice(0, 20) + "..."
            : item?.name}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          <span className="flex flex-row items-center justify-start gap-x-1">
            <LiaRupeeSignSolid />
            {item?.price / 100 || "NA"}
          </span>
          <span className="flex flex-row items-center justify-start gap-x-2">
            {item?.ratings?.aggregatedRating?.rating || "No ratings provided"}{" "}
            <BsFillStarFill />
          </span>
        </p>
      </div>
      <div className="p-6 pt-0 ">
        <button
          data-ripple-light="true"
          type="button"
          className="rounded-lg bg-[#406E00] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#3d4630] transition-all hover:shadow-lg hover:shadow-[#181F1C] hover:bg-[#181F1C] disabled:bg-[#181F1C] disabled:cursor-not-allowed disabled:shadow-[#181F1C]"
          onClick={() => {
            handleAddItem(item);
            setCount(1);
            notify();
          }}
          disabled={count === 1 || item.price === undefined ? true : false}
        >
          {item.price === undefined
            ? "Disabled"
            : count === 0
            ? "ADD"
            : "ADDED"}
        </button>
        <Toaster />
      </div>
    </div>
  );
};

export default MenuItem;
