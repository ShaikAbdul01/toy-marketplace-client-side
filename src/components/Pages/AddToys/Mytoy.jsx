import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Mytoy = ({ toy, handleDelete }) => {
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

  const handleDeleteClick = () => {
    handleDelete(_id);
  };
  const pageTitle = "ToyCarPllaza | My toys";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
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
            onClick={handleDeleteClick}
            className="bg-amber-600 text-white p-2 mx-2"
          >
            {" "}
            Delete
          </button>
          <button className="bg-amber-600 text-white p-2">
            <Link to={`/my-toys/updates/${_id}`}> Edit</Link>
          </button>
        </th>
      </tr>
    </>
  );
};

export default Mytoy;
