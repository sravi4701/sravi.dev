import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div className='nav-container flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 p-4 bg-neutral-50'>
        <nav className='flex justify-between'>
            <Link href='/'>Home</Link>
            <Link href='/posts'>Blog</Link>
            <Link href='/about'>About</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/works'>Works</Link>
        </nav>
    </div>
  )
}

export default NavBar
