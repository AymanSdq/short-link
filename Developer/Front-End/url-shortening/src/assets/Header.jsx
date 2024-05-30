import React from 'react'

function Header() {
    return (
        <section className='w-full flex  justify-between items-center py-8 px-24'>
            {/* Logo and links */}
            <div className='flex items-center gap-10'>
                <img src="/logo.svg" alt="Shortly" loading='lazy' />
                <a className=' text-grayColor font-semibold' href="#">Features</a>
                <a className=' text-grayColor font-semibold' href="#">Pricing</a>
                <a className=' text-grayColor font-semibold' href="#">Resources</a>
            </div>
            {/* Sign in and Sign up */}
            <div className='flex items-center gap-10'>
                <a className=' text-grayColor font-semibold' href="/">Login</a>
                <a className=' text-white font-semibold bg-cyanColor rounded-full px-6 py-2' href="/">Sign Up</a>
            </div>

        </section>
    )
}

export default Header