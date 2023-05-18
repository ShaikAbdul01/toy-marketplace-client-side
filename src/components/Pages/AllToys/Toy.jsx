import React from "react";

const Toy = ({ toy }) => {
  // console.log(toy);
  const { price, sellerName, sub_category, toyCarName, availableQuantity } =
    toy;
  return (
    <>
      <tr class="border-b dark:border-neutral-500">
        <td class="whitespace-nowrap px-6 py-4 font-medium">{sellerName}</td>
        <td class="whitespace-nowrap px-6 py-4">{toyCarName}</td>
        <td class="whitespace-nowrap px-6 py-4">{sub_category}</td>
        <td class="whitespace-nowrap px-6 py-4">{price}</td>
        <td class="whitespace-nowrap px-6 py-4">{availableQuantity}</td>
        <td class="whitespace-nowrap px-6 py-4">
          <button className="bg-amber-600 text-white font-bold p-2">View Details</button>
        </td>
      </tr>
    </>
  );
};

export default Toy;
