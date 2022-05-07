import React from 'react'
import notFound from '../assets/images/404.png'
function missing() {
  return (
    <div className='container mx-auto'>
        <div className='h-screen w-full'>
            <img className='object-none object-center bg-white h-full w-full' src={notFound} alt="404! Page not found" />
        </div>
    </div>
  )
}

export default missing