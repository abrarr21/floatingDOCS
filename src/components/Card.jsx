import React from 'react'
import { LuFileSpreadsheet } from "react-icons/lu";
import { HiOutlineDownload } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion"

const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className='w-60 h-72 flex-shrink-0 rounded-[50px] bg-zinc-900/80 py-10 px-7 relative overflow-hidden'>
        <LuFileSpreadsheet color='white' />
        <p className='text-sm leading-tight mt-3 font-semibold text-white'>{data.description}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between mb-2  px-7  py-4'>
                <h5 className='text-white'>{data.filesize}</h5>
                <span className='w-8 h-8 bg-zinc-500 rounded-full flex items-center justify-center'>
                    {data.close ? <MdClose color='white' /> : <HiOutlineDownload color="white" size=".7em" />}
                </span>
            </div>
            {data.tag.isOpen && (<div className={`tag w-full py-5 bg-teal-400 flex items-center justify-center`}>
            <h3 className='text-xm font-semibold'>{data.tag.tagTitle}</h3>
            </div>)}
        </div>
    </motion.div>
  )
}

export default Card