import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../../firebase.init';
import useServiceDetail from '../../../../hooks/useServiceDetail';
import item from '../../../../images/item.jpg';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import svg from "../../../../images/success-modal.svg";
import './AddItem.css'
import { FcAddImage } from 'react-icons/fc';
import ReactHelmet from '../../../ReactHelmet/ReactHelmet';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

const AddItem = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
                // toast('you order bookd')
                handleOpen();
                event.target.reset();
            }
        })
    }


    return (
        <>
      <ReactHelmet title='AddItem'></ReactHelmet>

      <section className=" body-font h-auto md:flex flex-col py-32 bg-gradient-to-tr from-gray-800 to-gray-700 mt-24">
      <div className="">
			<div className="flex justify-center px-6 my-12 -mt-20">
			
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
			
					<div
						className="w-full h-auto  mt-40 hidden lg:block mr-10 lg:w-1/2 bg-cover rounded-l-lg">
                            <img src={item} className='item-bg ' alt="" />
                        </div>
			
					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
					
                        <form onSubmit={handlePlaceOrder} className="bg-gray-900 rounded  py-12 px-12">
      <h1 className="text-gray-600 font-bold text-2xl mb-1">Add Item!</h1>
     
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <input className="pl-2 outline-none border-none bg-gray-900 text-white" type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled />
      </div>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
        
        <input className="pl-2 outline-none border-none bg-gray-900 text-white" type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled/>
      </div>
      <div className="flex items-center border-2 my-2 py-2 px-3 rounded-2xl">
       
        <input className="pl-2 outline-none border-none bg-gray-900 text-white" type="text" name="address" placeholder='address' autoComplete='off' required/>
      </div>
      <div className="flex items-center border-2 py-2 my-2 px-3 rounded-2xl">
       
        <input className="pl-2 outline-none border-none bg-gray-900 text-white" type="text" name="phone" placeholder='phone' required  />
      </div>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
      
        <input className="pl-2 outline-none border-none bg-gray-900 text-white" type="text" name="img" placeholder='img' required />
      </div>
      
      <button type="submit" className="flex items-center justify-center w-full cursor-pointer bg-amber-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Add Item 
      <FcAddImage className="ml-2 text-lg"/>
      </button>
    </form>

					</div>
				</div>
			</div>
		</div>

    <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="text-center flex justify-center">
                    <img src={svg} className="h-24 " alt="" />
                  </div>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Your Item Added Successfully
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                   Check your Item 
                   go to MyItem page 
                  </Typography>
                </Box>
              </Modal>
            </div>
</section>




        </>
    );
};

export default AddItem;