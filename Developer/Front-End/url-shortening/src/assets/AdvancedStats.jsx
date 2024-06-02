import React from 'react'

function AdvancedStats() {
    return (
        
        <section className='w-full h-screen  py-8 px-24 bg-grayBackground flex flex-col justify-center items-center'>

            <div className='w-1/2 flex flex-col gap-4 justify-center items-center'>
                <h1 className=' text-darkPurple text-3xl font-bold'>Advanced Statistics</h1>
                <p className=' text-center text-grayPurple'>Track how your links are performing across the web with our 
                    advanced statistics dashboard.</p>
            </div>

            <div className='w-full flex justify-center items-center py-12 gap-8'>

                <div className='w-1/3 h-[300px] flex justify-center flex-col gap-6 bg-white rounded-md relative px-12 py-12 pb-8'>
                    
                    <div className='p-4 w-[4rem] absolute -top-7 rounded-full bg-veryDarkPurple'>
                        <img src="/icon-brand-recognition.svg" alt="" />
                    </div>

                    <h1 className='text-xl text-veryDarkPurple'>Brand Recognition</h1>
                    <p className=' text-grayColor'>Boost your brand recognition with each click. Generic links don’t 
                        mean a thing. Branded links help instil confidence in your content.</p>
                </div>

                <div className='w-1/3 h-[300px] flex justify-center flex-col gap-6 bg-white rounded-md relative px-12 py-12 pb-8'>

                    <div className='p-4 w-[4rem] absolute -top-7 rounded-full bg-veryDarkPurple'>
                        <img src="/icon-brand-recognition.svg" alt="" />
                    </div>

                    <h1 className='text-xl text-veryDarkPurple'>Detailed Records</h1>
                    <p className=' text-grayColor'>Gain insights into who is clicking your links. Knowing when and where 
                        people engage with your content helps inform better decisions.  </p>
                </div>

                <div className='w-1/3 h-[300px] flex justify-center flex-col gap-6 bg-white rounded-md relative px-12 py-12 pb-8'>

                    <div className='p-4 w-[4rem] absolute -top-7 rounded-full bg-veryDarkPurple'> 
                        <img src="/icon-brand-recognition.svg" alt="" />
                    </div>

                    <h1 className='text-xl text-veryDarkPurple'>Fully Customizable</h1>
                    <p className=' text-grayColor'>Improve brand awareness and content discoverability through customizable 
                        links, supercharging audience engagement.</p>
                </div>
            </div>
                
        </section>

    )
}

export default AdvancedStats