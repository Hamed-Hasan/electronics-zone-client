import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import svg from "../../../../images/success-modal.svg";
import useServiceDetail from "../../../../hooks/useServiceDetail";
import { FcAddDatabase } from "react-icons/fc";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

const ServiceDetail = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const handleDelete = (id) => {
    console.log(id);

    const proceed = window.confirm(
      "Are you sure you want to delete this service?"
    );
    if (proceed) {
      fetch(`https://electronics-zone-server.vercel.app/service/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // document.getElementById('card').style.display = 'none';
          toast.success("Service Deleted From Database");
        });
    }
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const img = event.target.img.value;
    const supplier = event.target.supplier.value;
    const price = event.target.price.value;
    const user = { name, email, img, supplier, price };
    console.log(user);
    const url = `https://electronics-zone-server.vercel.app/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        //   console.log(result);
        //  toast.success('user added successfully')
        handleOpen();
        event.target.reset();
      });
  };

  return (
    <div>
      <section id="card" className="text-gray-600 body-font mt-20">
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div className="w-full md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12">
              <p className="text-3xl font-bold leading-7 text-center text-white">
                Add New Service !
              </p>
              <form onSubmit={handleAddUser}>
                <div className="md:flex items-center mt-8">
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="font-semibold leading-none text-gray-300">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-2">
                    <label className="font-semibold leading-none text-gray-300">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                    />
                  </div>
                </div>
                <div className="md:flex items-center mt-6">
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="font-semibold leading-none text-gray-300">
                      Images
                    </label>
                    <input
                      required
                      type="text"
                      name="img"
                      className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-2">
                    <label className="font-semibold leading-none text-gray-300">
                      Supplier
                    </label>
                    <input
                      required
                      type="text"
                      name="supplier"
                      className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                    />
                  </div>
                </div>

                <div className="md:flex items-center mt-4">
                  <div className="w-full flex flex-col">
                    <label className="font-semibold leading-none text-gray-300">
                      Price
                    </label>
                    <input
                      required
                      type="number"
                      name="price"
                      className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center w-full">
                  <button className="mt-9 flex items-center  font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700  focus:outline-none">
                    Add New User
                    <FcAddDatabase className="ml-2 text-lg" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12">
            <div className="relative ">
              <a
                href="#"
                className="flex flex-col items-center bg-white z-50 relat rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-72 md:rounded-none md:rounded-l-lg"
                  src={service.img}
                  alt=""
                />
                <div className="flex flex-col relative z-40 pb-10 justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {service.name}
                  </h5>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    ${service.price}
                  </h5>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Supplier {service.supplier}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {service.description}
                  </p>
                  <button
                    onClick={() => handleDelete(service._id)}
                    type="button"
                    className="flex items-center justify-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Delivered
                    <svg
                      className="w-6 h-6 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      ></path>
                    </svg>
                  </button>
                </div>
              </a>
              <svg
                className="absolute bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#F59E0B"
                  fillOpacity="1"
                  d="M0,96L80,117.3C160,139,320,181,480,197.3C640,213,800,203,960,218.7C1120,235,1280,277,1360,298.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
              </svg>
            </div>
            <ToastContainer />
          </div>
        </div>
      </section>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="text-center flex justify-center">
              <img src={svg} className="h-24 " alt="" />
            </div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Service Added Successfully
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Check your service go to Home page & Manage service page &
              Customize your service 😀
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default ServiceDetail;
