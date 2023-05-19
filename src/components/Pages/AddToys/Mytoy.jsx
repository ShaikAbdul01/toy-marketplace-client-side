import { Link } from "react-router-dom";

const Mytoy = ({ toy,handleDelete }) => {
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
          <button
            onClick={() => handleDelete(_id)}
            className="bg-amber-600 text-white p-2 mx-2"
          >
            {" "}
            Delete
          </button>
          <Link to={`/my-toys/updates/${_id}`} className="bg-amber-600 text-white p-2">
            {" "}
            Edit
          </Link>
        </th>
      </tr>
    </>
  );
};

export default Mytoy;
