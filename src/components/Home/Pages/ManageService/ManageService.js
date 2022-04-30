
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
<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
<th scope="col" class="px-6 py-3 rounded-lg">
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
<td class="px-6 py-4">
<Link to='/addItem' className='bg-lime-600 text-white px-4 py-2 rounded-md shadow-lg'>Add User</Link> 
</td>
<td class="px-6 py-4">
<button className='bg-amber-600 text-white px-4 py-2 rounded-md shadow-lg' onClick={() => handleDelete(service._id)}>Delete</button> 
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