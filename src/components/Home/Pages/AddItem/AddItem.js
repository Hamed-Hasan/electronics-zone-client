import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../../firebase.init';
import useServiceDetail from '../../../../hooks/useServiceDetail';

const AddItem = () => {
    // const {serviceId} = useParams();
    // const [service] = useServiceDetail(serviceId)
    // console.log(service)
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event =>{
       
        event.preventDefault();
        const addItem = {
            email: user.email,
            displayName:user.displayName,
            address:event.target.address.value,
            phone:event.target.phone.value,
            img:event.target.img.value
        }
        axios.post('http://localhost:5000/addItem', addItem)
        .then(response => {
            const { data} = response
            if(data.insertedId){
                toast('you order bookd')
                event.target.reset();
            }
        })
    }


    return (
        <div className='mt-28'>
            <div className='w-52 mx-auto'>
            {/* <h2>Please Order: {service.name}</h2> */}
            <form onSubmit={handlePlaceOrder}>
                <input className='w-96 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled/>
                <br />
                <input className='w-96 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
                <br />
                {/* <input className='w-96 mb-2' type="text" value={service.name} name="service" placeholder='service' required readOnly /> */}
                <br />
                <input className='w-96 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-96 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='w-96 mb-2' type="text" name="img" placeholder='img' required />
                <br />
                <input className='cursor-pointer' type="submit" value="Place Order" />
            </form>
        </div>
        </div>
    );
};

export default AddItem;