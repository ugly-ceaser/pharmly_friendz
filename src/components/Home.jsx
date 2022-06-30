import React from 'react';
import Pharmacist from '../assets/Pharmacist.png';
import Typed from 'react-typed';


export const Home = () => {
  return (
    <div className='w-[100%] h-full  flex items-center justify-center' >

      <div className='w-[100%] h-[642.19px]'>

      <div>
            <p className='pt-10 px-20 text-4xl text-[#8bbbb7] '>
            <Typed strings={['Welcome to Pharmly and friendz Ltd','We deliver Qaulity Services','Retail Services and wholesales']} typedSpeed={100} backSpeed={90} loop/>
            </p>
           

        </div>
        <div className='w-[100%] flex items-center justify-center'>
            <img className='w-[500px]  h-[auto] mx-auto' src={Pharmacist} alt='/' />


        </div>
        
        
        
        
        
    </div>  
        

    </div>
  )
}

export default Home
