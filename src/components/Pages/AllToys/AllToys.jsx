import { useEffect, useState } from "react";
import Toy from "./Toy";
import { Helmet } from "react-helmet";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cars`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [toys]);
  //   console.log(toys);

  const pageTitle = "ToyCarPllaza | All toys";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className="flex flex-col overflow-x-auto">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Seller
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Toy Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Sub-category
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Available Quantity
                    </th>
                    <th scope="col" className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {toys?.map((toy) => (
                    <Toy key={toy._id} toy={toy}></Toy>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllToys;
