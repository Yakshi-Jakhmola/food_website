import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    const NewYear = new Date().getFullYear();
  return (
    <>
        <footer className='bg-black py-10'>
            <div className='container'>
                <div className='grid xl:grid-cols-3 grid-cols-1 grid-row-1 gap-x-5 w-full'>
                    <div className=''>
                        <img src={assets.logo}/>
                        <p className='text-slate-50 mt-5'>Food is the basic human need to stay alive. Moreover, it is the need of every living organism. Therefore it is important that we should not waste food. Our world consists of different types of cultures.</p>
                    </div>
                    <div>
                        <h5 className='text-2xl font-bold mb-4 text-white'>Quick Links</h5>
                        <ul className='text-slate-50'>
                            <a href=''><h6>Home</h6></a>
                            <a href=''><h6>About</h6></a>
                            <a href=''><h6>Menu</h6></a>
                            <a href=''><h6>Offer Discount</h6></a>
                            <a href=''><h6>Contact</h6></a>
                        </ul>
                    </div>
                    <div>
                        <h5 className='text-2xl font-bold mb-4 text-white'>Connect Us</h5>
                        <div>
                            <div className='mb-3'>
                                <h6 className='font-bold mb-1 text-Orange'>Address</h6>
                                <a href="" className='text-slate-50'><p>SCF 147, Second Floor, Huda Market, Sector 37, Faridabad, Haryana 121003</p></a>
                            </div>
                            <div className='mb-3'>
                                <h6 className='font-bold mb-1 text-Orange'>Email</h6>
                                <a href="mailto: info@gmail.com" className='text-slate-50'><p>info@gmail.com</p></a>
                            </div>
                            <div className='mb-3'>
                                <h6 className='font-bold mb-1 text-Orange'>Phone</h6>
                                <a href="tel: +91 9876543210" className='text-slate-50'><p>+91 9876543210</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className='bg-Orange text-white text-center py-2'>
            <div className='container'>
                <div>
                    <p className='m-0'>© {NewYear} All Rights Reserved by <a href='#'>Tomato</a></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer