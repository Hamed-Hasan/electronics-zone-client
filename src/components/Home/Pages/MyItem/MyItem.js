import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../../../firebase.init";
import axiosPrivate from "../../../Auth/api/axiosPrivate";
import ReactHelmet from "../../../ReactHelmet/ReactHelmet";
import "./MyItem.css";
const MyItem = () => {
  const [user] = useAuthState(auth);
  const [myItem, setMyItems] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/item?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setMyItems(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);
  const handleDelete = (id) => {
    const proceed = window.confirm("you want to delete this item?");
    if (proceed) {
      const url = `http://localhost:5000/delete/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = myItem.filter((product) => product._id !== id);
          setMyItems(remaining);
          toast("Item deleted successfully");
        });
    }
  };
  return (
    <div>
      <ReactHelmet title='MyItem'></ReactHelmet>
      <div id="item-card" className="w-full mt-24">
        <div>
          <div className="container mx-auto">
            <div className="bg-green-100 flex items-center my-8 w-44 justify-center text-center text-green-800 text-sm font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 ">
              My Total Item {myItem.length}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {myItem.map((item) => (
                <div key={item._id}>
                  <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 w-full transform transition duration-500 hover:scale-110">
                    <img
                      className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"
                      src={item.img}
                      alt="product designer"
                    />
                    <h1 className="text-lg text-gray-700">
                      Name: {item.displayName}{" "}
                    </h1>
                    <h3 className="text-sm text-gray-400 ">
                      Email: {item.email}{" "}
                    </h3>
                    <p className="text-xs text-gray-400 mt-4">
                      Address: {item.address}{" "}
                    </p>
                    <p className="text-xs text-gray-400 mt-4">
                      Phone: {item.phone}{" "}
                    </p>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-amber-600 hover:bg-amber-900 flex items-center justify-center w-52 mx-auto px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide"
                    >
                      Delete Item
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyItem;
