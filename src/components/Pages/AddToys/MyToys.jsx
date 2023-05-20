import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Mytoy from "./Mytoy";
import Swal from "sweetalert2";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const [myToys, setMyToys] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch(`https://toy-car-plaza-server.vercel.app/addToys/email/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-car-plaza-server.vercel.app/addToys/id/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your toy product has been deleted.",
                "success"
              );
              const updatedToys = myToys.filter((toy) => toy._id !== _id);
              setMyToys(updatedToys);
            }
          })
          .catch((error) => {
            console.error("Error deleting toy:", error);
          });
      }
    });
  };

  const handleSort = () => {
    const sortedToys = [...myToys].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setMyToys(sortedToys);
  };

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Toy picture</th>
              <th>Car Name</th>
              <th>Seller Name</th>
              <th>Sub Category</th>
              <th>
                Price{" "}
                <button onClick={handleSort}>
                  {sortOrder === "asc" ? (
                    <FaArrowCircleUp></FaArrowCircleUp>
                  ) : (
                    <FaArrowCircleDown></FaArrowCircleDown>
                  )}
                </button>
              </th>
              <th>Quantity</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <Mytoy
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
              ></Mytoy>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;
