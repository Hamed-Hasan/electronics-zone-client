import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../../firebase.init';

const MyItem = () => {

    const [user] = useAuthState(auth);
    const [myItem, setMyItems] = useState([]);
    console.log(myItem)
    const navigate = useNavigate();
    useEffect( () => {
        
        const getOrders = async() =>{
            const email = user?.email;
            const url = `http://localhost:5000/item?email=${email}`;
            try{
                const {data} = await axios.get(url);
                setMyItems(data);
                console.log(data)
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

    
    return (
        <div>
            
            <h2>Your orders: {myItem.length}</h2> 
            {
                myItem.map(item => <div key={item._id}>
                   <p>{item.email} : {item.displayName}</p>
                   <img width='300px' src={item.img} alt="" />
                </div>)
            }

        </div>
    );
};

export default MyItem;