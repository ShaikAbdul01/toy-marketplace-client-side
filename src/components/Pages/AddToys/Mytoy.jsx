import React from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
const Mytoy = ({ toy }) => {
  const {
    _id,
    carName,
    picture,
    price,
    quantity,
    rating,
    sellerName,
    subCategory,
  } = toy;
//   console.log(toy);
  return (
    <>
      <tr>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={picture} alt="" />
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
          <button className="bg-amber-600 text-white p-2 mx-2"> <FaRegEdit></FaRegEdit>
          </button>
          <button className="bg-amber-600 text-white p-2"> <FaRegTrashAlt></FaRegTrashAlt>
          </button>
        </th>
      </tr>
    </>
  );
};

export default Mytoy;
