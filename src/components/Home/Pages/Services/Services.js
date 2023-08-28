import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import Spinner from "../../../Spinner/Spinner";
import { useQuery } from "react-query";
import axios from "axios";
const Services = () => {
  // const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);


  const { isLoading, isError, data, error, refetch } = useQuery(
    "joke",
    async () => {
      const { data } = await axios("https://electronics-zone-server.vercel.app/service");
      return data;
    }
  );

//   const { data: services, isLoading, refetch } = useQuery('services', () => fetch(`https://electronics-zone-server.vercel.app/service`, {
//     method: 'GET',
   
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       }
// })
//     .then(res => res.json()));
    refetch();
if(isLoading) {
  return <Spinner/>
}
  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://electronics-zone-server.vercel.app/service")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServices(data)
  //       setLoading(false)
  //     });
  // }, []);

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
  {data?.map((service) => (
    <Service key={service._id} service={service} />
  ))}
</div>
}
</div>

    </div>
  );
};

export default Services;
