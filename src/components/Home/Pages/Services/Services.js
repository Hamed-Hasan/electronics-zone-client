import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import Spinner from "../../../Spinner/Spinner";
const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://secret-peak-70668.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => {
        setServices(data)
        setLoading(false)
      });
  }, []);
  return (
    <div id='service' className="container mx-auto my-24">
      <div className="section-content mb-16">
        <h2 className="text-center py-10">
      <p className='text-sm md:text-2xl'>The Most Important </p>
      <p className='pt-2 text-sm md:text-2xl'> Things We Offer Aren't Manufactured</p>
        </h2>
      </div>
    
<div className='pt-11'>
  {
  loading ? <Spinner/> :   <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
  {services.map((service) => (
    <Service key={service._id} service={service} />
  ))}
</div>
}
</div>

    </div>
  );
};

export default Services;
