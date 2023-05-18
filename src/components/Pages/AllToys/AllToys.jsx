import { useEffect, useState } from "react";
import Toy from "./Toy";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`allToys.json`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  console.log(toys);
  return (
    <>
      <div class="flex flex-col overflow-x-auto">
        <div class="sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      Seller
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Toy Name
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Sub-category
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Available Quantity
                    </th>
                    <th scope="col" class="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {toys?.map((toy) => (
                    <Toy toy={toy}></Toy>
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
