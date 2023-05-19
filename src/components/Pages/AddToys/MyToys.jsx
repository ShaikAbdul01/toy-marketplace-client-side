import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Mytoy from "./Mytoy";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [removes, setRemoves] = useState([]);
  const userEmail = user?.email;
  //   console.log(userEmail);

  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/addToys/email/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);
//   console.log(myToys);

  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`http://localhost:5000/addToys/id/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your toy product has been deleted.",
                "success"
              );
              const remaning = removes.filter((remove) => remove._id !== id);
              setRemoves(remaning);
            }
          });
      }
    });
  };
  return (
    <>
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
