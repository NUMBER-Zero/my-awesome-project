import React from 'react'

const TitlesHeader = ({title,text,number }) => {
  return (
    <div className='flex justify-between items-center'>
        {/* left side */}
        <div>
            <h1 className='gradient-text animate-text-gradient gradient-title font-semibold md:text-6xl text-4xl'>{title}</h1>
            <p className='gradient-title  md:text-3xl md:mt-5 font-medium gradient-title'>{text}</p>
        </div>
        {/* right side  */}
        <div className='md:flex hidden  items-center'>
            <div className='border-2 border-amber-50 w-36 mr-3'> </div>
            <p className='gradient-text animate-text-gradient text-6xl'> {number}</p>
        </div>
    </div>
  )
}

export default TitlesHeader




