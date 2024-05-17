import React, { useContext, useState } from 'react'
import { StoreContext } from './StoreContext';
import FoodItem from './FoodItem';

const FoodCard = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <>
    <div className='pb-10'>
        <div className='container'>
            <div>
                <div>
                    <div className='xl:w-1/2 w-full'>
                        <h2 className=' text-black font-bold text-4xl mb-3 font-headfont'>Top Dishes near Me</h2>
                    </div>
                    <div className='xl:w-1/2 w-full'></div>
                </div>
                <div className='grid xl:grid-cols-4 grid-cols-1'>
                    {food_list.map((val,ind)=>{
                        if(category==='All' || category===val.category){
                        return(
                            <>
                                <FoodItem key={ind} id={val._id} name={val.name} describtion={val.description} price={val.price} image={val.image}/>
                            </>
                        )
                        }
                    })}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default FoodCard