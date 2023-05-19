import React from "react";
import { Link } from "react-router-dom";

const Mytoy = ({ toy }) => {
  const {
    _id,
    carName,
    description,
    email,
    picture,
    price,
    quantity,
    rating,
    sellerName,
    subCategory,
  } = toy;
  console.log(toy);
  return (
    <>
      {/*  <tr className="border-b dark:border-neutral-500">
        <td className="whitespace-nowrap px-6 py-4 font-medium">
          {sellerName}
        </td>
        <td className="whitespace-nowrap px-6 py-4">{carName}</td>
        <td className="whitespace-nowrap px-6 py-4">{subCategory}</td>
        <td className="whitespace-nowrap px-6 py-4">{price}</td>
        <td className="whitespace-nowrap px-6 py-4">{quantity}</td>
        <td className="whitespace-nowrap px-6 py-4">
          <Link
            to={`/carDetails/${_id}`}
            className="bg-amber-600 text-white font-bold p-2"
          >
            View Details
          </Link>
        </td>
      </tr> */}

      <tr>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={picture}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </td>

        <td>{carName}</td>
        <td>{sellerName}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{rating}</td>

        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </>
  );
};

export default Mytoy;
