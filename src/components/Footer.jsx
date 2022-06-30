
import React from 'react';

 import { AiFillMessage, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'

 import { FaFacebookF } from "react-icons/fa";
 import { RiWhatsappFill } from "react-icons/ri";


const Footer = () => {
  return (
    <div className="flex justify-between items-center w-[100%] h-[5rem] px-[50px] pb-[20px]">
        <div className=" flex justify-evenly w-[20%]">
        <span className=" sm: flex justify-around px-[5px] items-center w-[60%] text-[gray] " >Chat Support < AiFillMessage size={17} /></span>
        </div>
        <div className="flex justify-evenly w-[20%]">
          <span  className="flex justify-evenly px-[5px] text-[black] items-center w-[100%]"> <FaFacebookF size={17} />  <RiWhatsappFill size={17} /> 
           <AiFillInstagram size={17} />  <AiOutlineTwitter size={17} /> </span> 
          
          
          
          </div>
    </div>
  )
}

export default Footer