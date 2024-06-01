import React from 'react'

function HeroSection() {
    return (
        <section className=' w-full flex py-8 px-24 '>
            {/* Left */}
            <div className='w-1/2 pr-2 flex flex-col gap-5 justify-center'>
                <h1 className='text-6xl text-darkPurple font-bold'>More than just shorter links</h1>
                <p className=' text-grayColor'>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <a href="#" className=' mt-3 w-36 text-center block px-6 py-2 rounded-full text-white bg-cyanColor'>Get started</a>
            </div>
            {/* Right */}
            <div className='w-1/2 relative'>
                <img className='left-[97px]' src="/illustration-working.svg" alt="" />
            </div>
        </section>
        
    )
}

export default HeroSection