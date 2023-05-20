import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const CarDetails = () => {
  const carDetails = useLoaderData();
  //   console.log(carDetails);
  const [more, setMore] = useState(true);
  const {
    _id,
    price,
    sellerName,
    sub_category,
    toyCarName,
    availableQuantity,
    picture,
    description,
  } = carDetails;
  return (
    <>
      <div className="mt-6">
        <div className="min-w-screen min-h-screen bg-amber-600 flex items-center p-5 lg:p-10 overflow-hidden relative">
          <div className="w-full max-w-6xl rounded bg-white shadow-2xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
            <div className="md:flex items-center -mx-10">
              <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                  <img src={picture} className="w-full relative z-10" alt="" />
                  <div className="border-4 border-amber-300 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                  <h1 className="font-bold uppercase text-2xl mb-5">
                    {toyCarName}
                  </h1>
                  <h1 className="font-bold text-lg mb-5">
                    Seller : {sellerName}
                  </h1>
                  <h1 className="font-bold text-lg mb-5">
                    Category : {sub_category}
                  </h1>
                  <h1 className="font-bold text-lg mb-5">
                    Available Quantity :{availableQuantity}
                  </h1>

                  {more ? (
                    <>
                      <p className=" text-gray-500 text-sm">
                        {description.substring(0, 30)}...
                      </p>
                      <span
                        className="cursor-pointer opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                        onClick={() => setMore(!more)}
                      >
                        Read More
                      </span>
                    </>
                  ) : (
                    <>
                      <p className=" text-gray-900">{description}...</p>
                      <span
                        className="cursor-pointer opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                        onClick={() => setMore(!more)}
                      >
                        Read Less
                      </span>
                    </>
                  )}
                </div>
                <div>
                  <div className="inline-block align-bottom mr-5">
                    <span className="text-2xl leading-none align-baseline">
                      $
                    </span>
                    <span className="font-bold text-5xl leading-none align-baseline">
                      {price}
                    </span>
                  
                  </div>
                  <div className="inline-block align-bottom">
                    <button className="bg-amber-600 opacity-75 hover:opacity-100 text-white-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                      <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
          <div>
            <a
              title="Buy Car"
              href="https://www.facebook.com/"
              target="_blank"
              className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            >
              <img
                className="object-cover object-center w-full h-full rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdSyVcm6M5uw4GnBF5SCyNjeN07LjP6wZUg&usqp=CAU"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
