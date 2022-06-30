import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function Navbar() {

  const[nav, setNav] = useState(false);

  const HandleNav = () =>{
    setNav(!nav)

  }
  return (
    <div className=' bg-[#8bbbb7] flex  h-20 w-full'>
      <div className='text-white flex justify-between items-center w-[90%] mx-auto px-4  '>
        <h1 className=' font-bold text-1xl '>PHARMLY&FRIENDZ STORE</h1>
        <div className=" hidden md:flex items-center w-[40%] justify-between">

        <ul className='flex'>
            <li className='p-2'><a href="#">Home</a></li>
            <li className='p-2'><a href="#">About</a></li>
            <li className='p-2'><a href="#">Contact</a></li>
            <li className='p-2'><a href="#">Products</a></li>
        </ul>
        <ul className='flex '>
            <li className='p-2'><a href="#">Login</a></li>
            <li className='p-2'><a href="#">Register</a></li>
           
        </ul>


        </div>
      </div>

      <div onClick={HandleNav} className="text-white pt-6  items-center px-4 block md:hidden">
        {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      
      </div>

      <div className= {nav ? 'fixed left-[-100%]' : 'text-white fixed left-0 top-0 w-[60%] bg-[#8bbbb7] h-full ease-in-out duration-500'  }>
            <h1 className=' pt-6 px-3 font-bold text-[300p]'>PHARMLY&FRIENDZ STORE</h1>
            <ul className="pt-15 uppercase">
            
                <li className='p-10 border-b border-gray-500'><a href="#">Home</a></li>
                <li className='p-10 border-b border-gray-500'><a href="#">About</a></li>
                <li className='p-10 border-b border-gray-500'><a href="#">Contact</a></li>
                <li className='p-10 border-b border-gray-500'><a href="#">Products</a></li>

                <li className='border-b border-gray-500'>
                    <ul className='flex '>
                        <li className='p-10 '><button className="">Login</button></li>

                        <li className='p-10'><button className="">Register</button></li>
                      
                    </ul>

                </li>

            </ul>
      </div>
    
        
    </div>
  )
}

export default Navbar