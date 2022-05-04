import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useService from "../../../../hooks/useService";
// import React, { useState } from 'react';
import "./ManageService.css";
import { GrUpdate } from "react-icons/gr";
import ReactHelmet from "../../../ReactHelmet/ReactHelmet";
const customStyles = {
  content: {
    top: "60%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black",
  },
};

Modal.setAppElement("#root");

const ManageService = () => {
  const [services, setServices] = useService();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this service"
    );
    if (proceed) {
      const url = `http://localhost:5000/manage/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
          toast("Deleted User");
        });
    }
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const name = event.target.userName.value;
    const email = event.target.email.value;
    const img = event.target.img.value;
    const supplier = event.target.supplier.value;
    const price = event.target.price.value;
    const url = `http://localhost:5000/update/${services[0]._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        img,
        supplier,
        price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = services.filter(
          (service) => service._id !== services[0]._id
        );
        setServices(remaining);

        alert("update data");
      });
  };

  return (
 <>
 <ReactHelmet title='Manage'></ReactHelmet>
 <div className="mt-24 bg-gray-700">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-20 py-36">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase rounded-none bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>

              <th scope="col" className="px-6 py-3">
                Supplier Name
              </th>
              <th scope="col" className="px-6 py-3">
                Add User
              </th>
              <th scope="col" className="px-6 py-3">
                Delete User
              </th>
              <th scope="col" className="px-6 py-3">
                Images
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                update
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr
                key={service._id}
                className="bg-white border-b bg-gray-800  hover:bg-gray-50 "
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-400 dark:text-white whitespace-nowrap"
                >
                  {service?.name}
                </th>
                <td className="px-6 py-4">{service?.supplier}</td>
                <td className=" py-4">
                  <Link
                    to="/addItem"
                    style={{ padding: "8px 8px" }}
                    className="bg-lime-600 flex justify-center items-center text-white  rounded-md shadow-lg"
                  >
                    Add User
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      ></path>
                    </svg>
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="bg-amber-600 flex items-center justify-center text-white px-4 py-2 rounded-md shadow-lg"
                    onClick={() => handleDelete(service._id)}
                  >
                    Delete
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
                <td className="px-6 py-4">
                  <img
                    src={service?.img}
                    style={{ borderRadius: "50%" }}
                    className=" w-10 h-10"
                    alt=""
                  />
                </td>
                <td className="px-6 py-4">{service?.price}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    onClick={openModal}
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <button
                      onClick={closeModal}
                      className="bg-red-600 px-2 text-white rounded"
                    >
                      close
                    </button>
                    <div>Please insert your text</div>
                    <div className=" p-3 ">
                      <form onSubmit={handleUpdate}>
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
                            Update
                            <GrUpdate className="ml-2 text-lg" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </Modal>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
 
 </>
  );
};

export default ManageService;
