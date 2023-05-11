import { useLoaderData } from "react-router-dom";
import InputForm from "../shared/InputForm";
import Swal from "sweetalert2";

const UpdataCoffee = () => {
  const { _id, name, chef, supplier, taste, category, details, photo } =
    useLoaderData();

  // send update request
  const handleUpdate = (e) => {
    e.preventDefault();
    // Swal.clickConfirm()
    const form = e.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "Please, Check your data",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://lxes28-8080.csb.app/coffee/${_id}`, {
            method: "put",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(updatedCoffee),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.modifiedCount) {
                Swal.fire(
                  "Updated!",
                  "Your coffee has been updated.",
                  "success",
                );
              }
            });
        }
      });
  };

  return (
    <div className="w-10/12 mx-auto text-center">
      <h1 className="font-bold text-6xl my-12">Update Coffee</h1>
      <form onSubmit={handleUpdate} className="">
        <div className="md:flex md:gap-6">
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              defaultValue={name}
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="">Chef</span>
            </label>
            <input
              defaultValue={chef}
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="md:flex md:gap-6">
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="">Supplier</span>
            </label>
            <input
              type="text"
              defaultValue={supplier}
              name="supplier"
              placeholder="Enter coffee supplier"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="">Taste</span>
            </label>
            <input
              type="text"
              defaultValue={taste}
              name="taste"
              placeholder="Enter coffee taste"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="md:flex md:gap-6">
          <div className="form-control w-full mb-4 mb-4">
            <label className="label">
              <span className="">Category</span>
            </label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              placeholder="Enter coffee category"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="">Details</span>
            </label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Enter coffee details"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span>Photo</span>
          </label>
          <input
            type="text"
            defaultValue={photo}
            name="photo"
            placeholder="Enter photo URL"
            className="input input-bordered"
          />
        </div>
        <button
          className="btn w-full bg-[#D2B48C] border-2 text-[#331A15]"
          type="submit"
        >
          Update Coffee
        </button>
      </form>
    </div>
  );
};

export default UpdataCoffee;
