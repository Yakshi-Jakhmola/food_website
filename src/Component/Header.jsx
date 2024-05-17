import React, { useState } from 'react'
import { assets} from '../assets/assets'

const Header = () => {
    const [menu, setmenu]= useState('Home')
  return (
    <>
        <header className='py-5'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <div><img src={assets.logo}/></div>
                    <div>
                        <ul className='hidden xl:flex xl:items-center xl:gap-x-10 xl:font-headfont xl:text-[#747474]'>
                            <li className={menu === 'Home' ? "menu-links": ""} onClick={()=> setmenu('Home')}><h6>Home</h6></li>
                            <li className={menu === 'About' ? "menu-links": ""} onClick={()=> setmenu('About')}><h6>About</h6></li>
                            <li className={menu === 'Menu' ? "menu-links": ""} onClick={()=> setmenu('Menu')}><h6>Menu</h6></li>
                            <li className={menu === 'Offer' ? "menu-links": ""} onClick={()=> setmenu('Offer')}><h6>Offer</h6></li>
                            <li className={menu === 'Contact' ? "menu-links": ""} onClick={()=> setmenu('Contact')}><h6>Contact</h6></li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-x-10'>
                        <img src={assets.search_icon}/>
                        <img src={assets.basket_icon}/>
                        <button className='border-2 border-solid border-[#747474] rounded-full px-5 py-1 text-headfont'>Sign Up</button>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header