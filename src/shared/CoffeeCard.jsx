import Swal from "sweetalert2";
import UpdataCoffee from "../components/UpdataCoffee";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  // delete from db
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://lxes28-8080.csb.app/coffee/${id}`, {
            method: "delete",
            headers: {
              "Content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.deletedCount) {
                Swal.fire(
                  "Deleted!",
                  "Your coffee has been deleted.",
                  "success",
                );
              }
            });
        }
      });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl ">
      <figure>
        <img
          src={photo}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p>Chef : {chef}</p>
        <p>Category : {category}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
          <Link to={`update/${_id}`} className="btn btn-primary">Edit</Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
