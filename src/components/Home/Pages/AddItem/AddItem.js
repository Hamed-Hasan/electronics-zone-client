import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../../firebase.init';
import useServiceDetail from '../../../../hooks/useServiceDetail';
import item from '../../../../images/item.jpg'
import './AddItem.css'
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
        console.log(addItem)
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
        <>
      

      <section class=" body-font h-screen md:flex flex-col px-36 py-32 bg-gradient-to-tr from-gray-800 to-gray-700 mt-24">
      <div class="container mx-auto">
			<div class="flex justify-center px-6 my-12 -mt-20">
			
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
			
					<div
						class="w-full h-auto  mt-40 hidden lg:block mr-10 lg:w-1/2 bg-cover rounded-l-lg">
                            <img src={item} className='item-bg ' alt="" />
                        </div>
			
					<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
					
                        <form onSubmit={handlePlaceOrder} class="bg-gray-900 rounded  py-12 px-12">
      <h1 class="text-gray-600 font-bold text-2xl mb-1">Add Item!</h1>
     
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <input class="pl-2 outline-none border-none bg-gray-900 text-white" type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
      </div>
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
        
        <input class="pl-2 outline-none border-none bg-gray-900 text-white" type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled/>
      </div>
      <div class="flex items-center border-2 my-2 py-2 px-3 rounded-2xl">
       
        <input class="pl-2 outline-none border-none bg-gray-900 text-white" type="text" name="address" placeholder='address' autoComplete='off' required/>
      </div>
      <div class="flex items-center border-2 py-2 my-2 px-3 rounded-2xl">
       
        <input class="pl-2 outline-none border-none bg-gray-900 text-white" type="text" name="phone" placeholder='phone' required  />
      </div>
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
      
        <input class="pl-2 outline-none border-none bg-gray-900 text-white" type="text" name="img" placeholder='img' required />
      </div>
      <input type="submit" value='Add Item' class="block w-full cursor-pointer bg-amber-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"/>
    </form>
					</div>
				</div>
			</div>
		</div>
</section>




        </>
    );
};

export default AddItem;