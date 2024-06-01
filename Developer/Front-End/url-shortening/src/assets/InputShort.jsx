import React from 'react'

function InputShort() {
  return (
    <section className='w-full flex py-8 px-24'>
        
        <div className='relative mx-auto  h-[150px] flex flex-col items-center justify-center rounded-lg w-[80%] bg-darkPurple '>
            <img src="/bg-shorten-desktop.svg" alt="bg" className='absolute rounded-lg left-0 right-0 top-0 bottom-0' />
            
            <div  className=' w-full flex justify-around z-10'>
                    <input className='flex w-[50%] px-4 py-3 rounded-lg' type="text" placeholder='Shorten a link here...' />
                    <button className=' text-white bg-cyanColor rounded-lg px-4 py-2'>Shorten It!</button>
            </div>
        </div>

    </section>
  )
}

export default InputShort