import React from 'react'
import Search from './Search'
import Tabs from './Tabs'

const Navbar = () => {
  return (
    <div className='bg-white h-16 flex items-center justify-center w-full'>
      <div className=" w-3/5 flex items-center justify-between">
           <Search/>
           <Tabs/>
      </div>
     
    </div>
  )
}

export default Navbar