import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <div className='container mx-auto my-24'>
               <div className="section-content mb-16">
        <h2 className='text-center text-4xl'>OUR ELECTRONICS SERVICES</h2>
       
      </div>
             <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
             {
                services.map(service => <Service 
                key={service._id}
                service={service}
                />)
            }
             </div>
        </div>
    );
};

export default Services;