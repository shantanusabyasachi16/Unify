import React from 'react'

const Singlemessage = () => {
  return (
    <div className="chat chat-start">
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img
          alt="Tailwind CSS chat bubble component"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      </div>
    </div>
    <div className="chat-header">
      
      <time className="text-xs opacity-50 text-black-900">12:45</time>
    </div>
    <div className="chat-bubble">You were the Chosen One!</div>
    <div className="chat-footer opacity-50"></div>
  </div>
  )
}

export default Singlemessage