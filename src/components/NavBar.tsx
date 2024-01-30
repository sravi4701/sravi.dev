import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div className='nav-container flex-auto min-w-0 flex flex-col px-2 md:px-0 md:mt-4'>
        <nav className='flex py-4 justify-between md:justify-normal text-lg font-medium text-violet-950		'>
            <Link href='/' className='underline underline-offset-2'>Home</Link>
            <Link href='/posts' className='md:ml-4 underline underline-offset-2'>Blog</Link>
            <Link href='/about' className='md:ml-4 underline underline-offset-2'>About</Link>
            <Link href='/projects' className='md:ml-4 underline underline-offset-2'>Projects</Link>
            <Link href='/works' className='md:ml-4 underline underline-offset-2'>Works</Link>
        </nav>
    </div>
  )
}

export default NavBar
