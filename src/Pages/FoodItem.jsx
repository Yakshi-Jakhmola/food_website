import React, { useState} from 'react'
import { assets } from '../assets/assets';
import { StoreContext } from './StoreContext';

const FoodItem = ({id, name, description, price, image}) => { 
    const [CartItems,addToCart,removeFromCart] = useState(StoreContext);
  return (
    <>
    <div key={id} className='m-2'>
        <div className='relative'>
            <img src={image} className='rounded-tl-2xl rounded-tr-2xl'/>
            {!CartItems[id] ? 
                <img onClick={()=>addToCart(id)} src={assets.add_icon_white} className='absolute bottom-3 right-3 w-10'/> 
                : <div className='absolute bottom-3 right-3 bg-white rounded-3xl flex items-center gap-x-2 py-1 px-1'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red}/>
                    <p>{CartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green}/>
                </div>}
        </div>
        <div className='bg-white shadow-xl py-5 px-3 rounded-bl-lg rounded-br-lg'>
            <div className='flex items-center justify-between'>
                <h4 className='text-black font-headfont mb-2 text-xl'>{name}</h4>
                <img  className="w-20" src={assets.rating_starts}/>
            </div>
            <p className='text-[#747474]'>{description}</p>
            <h5 className='text-orange-500 font-headfont text-2xl mt-1'>${price}</h5>
        </div>
    </div>
    </>
  )
}

export default FoodItem