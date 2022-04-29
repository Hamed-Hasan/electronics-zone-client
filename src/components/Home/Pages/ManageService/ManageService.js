import React from 'react';
import useService from '../../../../hooks/useService';

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
          })
        }
      }
  
    return (
        <div className='mt-24'>
             {
                services.map(service => <div
                     key={service._id}
                     >
                         {service.name}
                         {service.email}
                        <button className='ml-20 'onClick={() => handleDelete(service._id)}>delete</button>
                     </div>)
            }
        </div>
    );
};

export default ManageService;