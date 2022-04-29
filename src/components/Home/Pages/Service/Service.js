import { Link } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const navigate = useNavigate();
    const {_id, name, img, description, price,supplier} = service;
    const navigateToServiceDetail = id =>{
        navigate(`/serviceDetail/${id}`)
    }
    return (
        <div>
    
<div style={{height: '100%'}} className="w-full hover:-translate-y-5 transition-all bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
<a href="#">
<img src={img} className="w-full" alt=""/>
</a>
<div className="p-5">
<a href="#">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Supplier {supplier}</h5>
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${price}</h5>
</a>
<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
<button onClick={() => navigateToServiceDetail(_id)} style={{textDecoration: 'none', cursor: 'pointer',color: 'white'}}  className="text-gray-900 bg-gradient-to-r from-amber-500  via-amber-400 to-amber-600 lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Update</button>
</div>
</div>

        </div>
    );
};

export default Service;