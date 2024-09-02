import React from 'react';

const User = () => {
  return (
    <>
      <div className="flex gap-2 hover:text-black items-center hover:bg-zinc-200 rounded p-2 cursor-pointer">
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
      <div className='my-0 py-0 h-1'></div>
    </>
  );
}

export default User;
