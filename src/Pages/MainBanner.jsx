import React from 'react'
import { assets } from '../assets/assets';

const MainBanner = () => {
  return (
    <>
        <div className='py-7'>
            <div className='container'>
                <div><img src={assets.header_img} className='relative'/></div>
                <div className='absolute bottom-32 left-36 xl:w-1/2'>
                    <h1 className='text-white xl:text-6xl font-bold mb-5 font-headfont capitalize'>order your <br/> favrouite food here</h1>
                    <p className='text-white mb-5 text-lg'>Food is the basic human need to stay alive. Moreover, it is the need of every living organism. Therefore it is important that we should not waste food. Our world consists of different types of cultures.
                    </p>
                    <button className='bg-white text-black py-2 px-5 rounded-3xl'>View More</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default MainBanner;