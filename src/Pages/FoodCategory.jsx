import React from 'react'
import { assets, menu_list} from '../assets/assets';
const FoodCategory = ({category, setcategory}) => {
  return (
    <>
        <div className='pb-10'>
            <div className='container'>
                <div>
                    <div>
                        <div className='xl:w-1/2 w-full'>
                            <h2 className=' text-black font-bold text-4xl mb-3 font-headfont'>Our Categories</h2>
                            <p>Food is the basic human need to stay alive. Moreover, it is the need of every living organism. Therefore it is important that we should not waste food. Our world consists of different types of cultures.</p>
                        </div>
                        <div className='xl:w-1/2'></div>
                    </div>
                    <div className='xl:flex xl:items-center xl:gap-x-10 mt-10 grid grid-cols-2'>
                        {menu_list.map((val,ind)=>(
                            <div className='my-2' key={ind} onClick={()=>setcategory(prev=>prev===val.menu_name? "All" : val.menu_name)}>
                                <img src={val.menu_image} className={category=== val.menu_name? "category-active" : ""}/>
                                <h6 className='text-center mt-2 text-[#747474] font-headfont'>{val.menu_name}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FoodCategory