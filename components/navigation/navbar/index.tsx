import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Theme from './Theme'
export default function Navbar() {
    return (
        <nav className='flex-between background-light900_dark200 fixed z-50 w-full p-6 shadow-light-300 dark:shadow-none sm:px-12'>
            <Link href="/" className="flex items-center gap-1">
                <Image
                    src={"/images/site-logo.svg"}
                    alt="CodeQuery logo"
                    width={23}
                    height={23} />
                <p className='h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden'>Code<span className='text-primary-500'>Query</span></p>
            </Link>

            <p>Global Search</p>
            <div className='flex-between gap-5'>
                <Theme />
            </div>
        </nav>
    )
}
