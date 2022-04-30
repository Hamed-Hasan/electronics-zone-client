import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../../firebase.init';
import axiosPrivate from '../../../Auth/api/axiosPrivate';

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
            
            <h2>Your orders: {myItem.length}</h2> 
            {
                myItem.map(item => <div key={item._id}>
                   <p>{item.email} : {item.displayName} {item.address}</p>
                   <img width='300px' src={item.img} alt="" />
                   
          <button onClick={() => handleDelete(item._id)}>x</button>
                </div>)
            }

        </div>
    );
};

export default MyItem;