import React from "react";

const ManageTable = ({ service, handleDelete }) => {
  return (
    <div>
      <tr className="bg-gray-800">
        <td className="p-3">
          <div className="flex align-items-center">
            <img
              className="rounded-full h-12 w-12   object-cover"
              src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="unsplash image"
            />
            <div className="ml-3">
              <div className="">Realme</div>
              <div className="text-gray-500">mail@rgmail.com</div>
            </div>
          </div>
        </td>
        <td className="p-3">Technology</td>
        <td className="p-3 font-bold">200.00$</td>
        <td className="p-3">
          <span className="bg-red-400 text-gray-50 rounded-md px-2">
            no stock
          </span>
        </td>
        <td className="p-3">
          <a href="#" className="text-gray-400 hover:text-gray-100  mr-2">
            <i className="material-icons-outlined text-base">visibility</i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-100 mx-2">
            <i className="material-icons-outlined text-base">edit</i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-100 ml-2">
            <i className="material-icons-round text-base">delete_outline</i>
          </a>
        </td>
      </tr>
    </div>
  );
};

export default ManageTable;
