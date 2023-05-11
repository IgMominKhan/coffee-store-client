import Swal from "sweetalert2";

const InputForm = () => {
  const handleSubmit = (e) => {
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

    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(newCoffee);

    // send data to the server
    fetch('https://lxes28-8080.csb.app/add',{
    method:'post',
    headers: {
    "content-type":"application/json",
    },
    body : JSON.stringify(newCoffee)
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire(
            "success!",
            "Coffee information added!",
            "success",
          );
          form.reset();
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-14 md:p-24 text-center">
      <h1 className="text-5xl font-bold">Add new coffee</h1>

      <p className="my-6">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>

      <form onSubmit={handleSubmit} className="">
        <div className="md:flex md:gap-6">
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="">Chef</span>
            </label>
            <input
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
            name="photo"
            placeholder="Enter photo URL"
            className="input input-bordered"
          />
        </div>
        <button
          className="btn w-full bg-[#D2B48C] border-2 text-[#331A15]"
          type="submit"
        >
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default InputForm;
