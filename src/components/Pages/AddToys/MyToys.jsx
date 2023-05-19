import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Mytoy from "./Mytoy";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  //   console.log(userEmail);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/addToys/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);
  //   console.log(myToys);

  return (
    <>
      {/* <div className="flex flex-col overflow-x-auto">
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
                    <th scope="col" className="px-6 py-4">
                      Available Quantity
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Available Quantity
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Available Quantity
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Available Quantity
                    </th>
                    <th scope="col" className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {myToys.map((toy) => (
                    <Mytoy key={toy._id} toy={toy}></Mytoy>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}

      {/*  */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy picture</th>
              <th>Car Name</th>
              <th>Seller Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {myToys.map((toy) => (
              <Mytoy key={toy._id} toy={toy}></Mytoy>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;
