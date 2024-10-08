import React from 'react';
import { FaRegBuilding } from "react-icons/fa";
import { CiHospital1 } from "react-icons/ci";
import { GiNewspaper } from "react-icons/gi";

const ImageandText = () => {
  return (
    <div className='flex flex-col md:flex-row w-full'>
      <div className='w-full md:w-1/2 flex justify-center'>
        <img src='Image/tree.png' alt='image' className='w-full h-auto object-cover' />
      </div>
      <div className='w-full md:w-1/2 flex flex-col justify-center p-4'>
        <div className='flex items-start mt-5 gap-4'>
          <FaRegBuilding className='h-12 w-12 text-purple-600' />
          <div className='flex flex-col'>
            <p className='font-bold pb-2'>Building</p>
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur deserunt quod, assumenda nulla molestias nemo.</p>
          </div>
        </div>
        <div className='flex items-start mt-5 gap-4'>
          <CiHospital1 className='h-12 w-12 text-yellow-300' />
          <div className='flex flex-col'>
            <p className='font-bold pb-2'>House Extension</p>
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur deserunt quod, assumenda nulla molestias nemo.</p>
          </div>
        </div>
        <div className='flex items-start mt-5 gap-4'>
          <GiNewspaper className='h-12 w-12 text-green-500' />
          <div className='flex flex-col'>
            <p className='font-bold pb-2'>Refurbishment</p>
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur deserunt quod, assumenda nulla molestias nemo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageandText;
