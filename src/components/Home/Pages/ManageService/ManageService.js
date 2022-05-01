
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useService from '../../../../hooks/useService';

import './ManageService.css'

const ManageService = () => {
    const [services, setServices] = useService();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete this service')
        if(proceed){
            const url = `http://localhost:5000/manage/${id}`
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
              console.log('data',data)
              const remaining = services.filter(service => service._id !== id);
              setServices(remaining);
              toast('Deleted User')
          })
        }
      }
  
    return (
        <div className='mt-24 bg-gray-700'>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-20 py-36">
<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
<thead class="text-xs text-gray-700 uppercase rounded-none bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
<tr>
<th scope="col" class="px-6 py-3">
Product name
</th>

<th scope="col" class="px-6 py-3">
Supplier Name
</th>
<th scope="col" class="px-6 py-3">
Add User
</th>
<th scope="col" class="px-6 py-3">
Delete User
</th>
<th scope="col" class="px-6 py-3">
Images
</th>
<th scope="col" class="px-6 py-3">
Price
</th>
<th scope="col" class="px-6 py-3">
update
</th>

</tr>
</thead>
<tbody>
{services.map(service => <tr key={service._id} class="bg-white border-b bg-gray-800  hover:bg-gray-50 ">
<th scope="row" class="px-6 py-4 font-medium text-gray-400 dark:text-white whitespace-nowrap">
{service?.name}
</th>
<td class="px-6 py-4">
{service?.supplier}
</td>
<td class=" py-4">
<Link to='/addItem' style={{padding: '8px 8px'}} className='bg-lime-600 flex justify-center items-center text-white  rounded-md shadow-lg'>Add User
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
</Link> 
</td>
<td class="px-6 py-4">
<button className='bg-amber-600 flex items-center justify-center text-white px-4 py-2 rounded-md shadow-lg' onClick={() => handleDelete(service._id)}>Delete
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z" clip-rule="evenodd" />
</svg>
</button> 
</td>
<td class="px-6 py-4">
<img src={service?.img} style={{borderRadius: '50%'}} className=' w-10 h-10' alt="" />
</td>
<td class="px-6 py-4">
{service?.price}
</td>
<td class="px-6 py-4 text-right">
<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
</td>
</tr>)}


</tbody>
</table>
</div>


       
        </div>
    );
};

export default ManageService;