import React from "react";
import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
  // console.log(toy);
  const {
    _id,
    price,
    sellerName,
    sub_category,
    toyCarName,
    availableQuantity,
  } = toy;
  return (
    <>
      <tr className="border-b dark:border-neutral-500">
        <td className="whitespace-nowrap px-6 py-4 font-medium">
          {sellerName}
        </td>
        <td className="whitespace-nowrap px-6 py-4">{toyCarName}</td>
        <td className="whitespace-nowrap px-6 py-4">{sub_category}</td>
        <td className="whitespace-nowrap px-6 py-4">{price}</td>
        <td className="whitespace-nowrap px-6 py-4">{availableQuantity}</td>
        <td className="whitespace-nowrap px-6 py-4">
          <Link
            to={`/carDetails/${_id}`}
            className="bg-amber-600 text-white font-bold p-2"
          >
            View Details
          </Link>
        </td>
      </tr>
    </>
  );
};

export default Toy;
