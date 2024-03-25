import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[1680px] mx-auto px-[4%] md:px[8%]'>
        {children}
    </div>
  )
}

export default Container