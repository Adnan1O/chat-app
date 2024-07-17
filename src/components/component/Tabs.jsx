'use client'
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { useAuthContext } from "../../context/AuthContext";
const Tabs = () => {
  const { authUser } = useAuthContext();
  
  return (
    <div className='flex gap-6 text-gray text-sm font-extralight'> 
     <Link to='/feed'>
        <div className="flex flex-col items-center cursor-pointer">           
        <AiFillHome className='text-2xl' />
        <span>Home</span>       
        </div>  
         </Link> 

                <Link to='/feed/messaging'>
        <div className="flex flex-col items-center cursor-pointer">
        <AiFillMessage className='text-2xl' />
        <span>Messaging</span>
        </div>
          </Link>

          <Link to='/feed/notifications'>
        <div className="flex flex-col items-center cursor-pointer">
        <IoNotifications className='text-2xl' />
        <span>Notifications</span>
        </div>
        </Link>
        <div className="flex flex-col items-center cursor-pointer">

        <img src={authUser?.profilePic}
        height={25} width={25} alt='profile'
        className='rounded-3xl border-[1px] border-lightGray'
        />
        <span>Me</span>
        </div>
    </div>
  )
}

export default Tabs