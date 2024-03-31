import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const data = [
        { description: "This is the description of the docs",
          filesize: ".9mb",
          close: true,
          tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green"}  
        },
        { description: "This is the description of the docs 22222 ",
          filesize: ".9mb",
          close: true,
          tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"}  
        },
        { description: "This is the description of the docs 33333",
          filesize: ".9mb",
          close: false,
          tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green"}  
        },
        { description: "This is the description of the docs 44444",
          filesize: ".9mb",
          close: true,
          tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green"}  
        }
    ]

    const ref = useRef(null);
  return (
    <div ref={ref} className='fixed z-[3] left-0 top-0 w-full h-full flex gap-10 flex-wrap p-10'>
        {data.map((items, index)=>(
            <Card data={items} key={index} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground