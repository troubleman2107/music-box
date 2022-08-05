import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';

function ModalComponent({ status,handleCloseModal,deleteVideo }) {

   const handleClose = () => {
      handleCloseModal();
   }

   const handleAccept = () => {
      deleteVideo();
      console.log('accept');
   }

   return (
               <div className="fixed w-full h-full left-0 top-0 bg-gray-600 bg-opacity-70 z-50">
                  <div className="max-w-sm mx-auto my-28 text-center bg-gray-900 z-10 rounded-t-lg relative">
                     <p className="text-gray-400 p-8">Are you sure you want to delete this ?</p>
                     <ul className="">
                        <li className="transition-colors duration-500 ease-in-out p-3 cursor-pointer rounded-bl-lg float-left bg-yellow-600 w-1/2 hover:bg-yellow-500" onClick={handleAccept}><button className="">YES</button></li>
                        <li className="transition-colors duration-500 ease-in-out p-3 cursor-pointer rounded-br-lg float-left bg-gray-400 w-1/2 hover:bg-gray-300" onClick={handleClose}>
                           <button className="">NO</button>
                        </li>
                     </ul>
                  </div>
               </div>
   );
}

export default ModalComponent;
