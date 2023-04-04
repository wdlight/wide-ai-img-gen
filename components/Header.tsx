import React from 'react'
import Image from "next/image"
import Link from 'next/link'

function Header() {
  return (
    <header className='flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md'>

      

        <div className='flex space-x-2 items-center'>
          <Image 
            src="https://th.bing.com/th?id=OIP.w3rz_dJlOb2oXtZ37a0-nAHaHa&w=32&h=32&c=7&rs=1&qlt=90&bgcl=ececec&o=6&pid=PersonalBing"
            alt="logo"
            height={30}
            width={30}
          />
          
          {/* Left */}
          <div>
            <h1 className="font-bold">
              Widelight <span> AI </span>Image Generator
            </h1>
            <h2 className='text-xs'>Powered by DALL.E 2, Chat GPT & MS Azure!</h2>
          </div>
      </div>

      {/* Right */}
      <div className='flex text-xs md:text-base divide-x items-center text-gray-500'>
        <Link
          href="https://www.papareact.com"
          className="px-2 font-light text-right"
        >Widelight.</Link>
        <Link
          href="https://github.com"
          className="px-2 font-light text-right"
        >Github Repo</Link>
      </div>
          
      
    </header>
  )
}

export default Header
