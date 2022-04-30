import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../../firebase.init';
import axiosPrivate from '../../../Auth/api/axiosPrivate';
import './MyItem.css'
const MyItem = () => {

    const [user] = useAuthState(auth);
    const [myItem, setMyItems] = useState([]);

    const navigate = useNavigate();
    useEffect( () => {
        
        const getOrders = async() =>{
            const email = user?.email;
            const url = `http://localhost:5000/item?email=${email}`;
            try{
                const {data} = await axios.get(url);
                setMyItems(data);
               
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();

    }, [user])
    const handleDelete = id => {

        const proceed = window.confirm('you want to delete this item?')
        if(proceed) {
          const url = `http://localhost:5000/delete/${id}`;
          fetch(url, {
            method: 'DELETE',
          })
          .then(res => res.json())
          .then(data => {
              const remaining = myItem.filter(product => product._id !== id);
              setMyItems(remaining);
              toast('Item deleted successfully')
          })
        
        }
    }
    return (
        <div>
            
<div id='item-card' class="w-full h-screen my-36">
    <div class="w-full h-screen flex justify-center items-center">
     <div className="container mx-auto">
     <div class="bg-green-100 my-8 w-32 text-center text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">My Total Item {myItem.length}</div>
     <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        {
                myItem.map(item => <div key={item._id}>
                   {/* <p>{item.email} : {item.displayName} {item.address}</p>
                   <img width='300px' src={item.img} alt="" />
                   
          <button onClick={() => handleDelete(item._id)}>x</button> */}
    <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 w-full transform transition duration-500 hover:scale-110">
     <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src={item.img} alt="product designer"/>
     <h1 class="text-lg text-gray-700">Name: {item.displayName} </h1>
     <h3 class="text-sm text-gray-400 ">Email: {item.email} </h3>
     <p class="text-xs text-gray-400 mt-4">Address: {item.address} </p>
     <p class="text-xs text-gray-400 mt-4">Phone: {item.phone} </p>
     <button onClick={() => handleDelete(item._id)} class="bg-amber-600 hover:bg-amber-900 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Delete Item</button>
   </div>       </div>)
            }

        </div>
     </div>
    </div>
</div>






        </div>
    );
};

export default MyItem;