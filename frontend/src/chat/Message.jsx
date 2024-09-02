import React from 'react'
import SendInput from './SendInput'

const Message = () => {
  return (
    <div className='md:min-w-[550px] flex flex-col'>
        <div className="flex gap-2  items-center bg-zinc-800 text-white px-4 py-2 mb-2">
        <div className="avatar online">
          <div className='w-12 h-12 rounded-full overflow-hidden'>
            <img 
              src="https://th.bing.com/th/id/OIP.iApXL8G36uqoBd4khcqwRwHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
              alt="Shantanu's avatar" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex justify-between gap-2'>
            <p>Shantanu</p>
          </div>
        </div>
      </div>
     <SendInput/>
    </div>
  )
}

export default Message