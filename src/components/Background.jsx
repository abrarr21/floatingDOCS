import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
        <div className='w-full py-10 absolute top-[5%] flex justify-center font-semibold text-xl text-zinc-500'>Documents.</div>
        <h1 className='text-[13vw] leading-none text-zinc-900 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>Docs</h1>
    </div>
    </>
  )
}

export default Background