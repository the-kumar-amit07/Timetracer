/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'
import { MdOutlineCancel } from 'react-icons/md'

const Chat = () => {
  return (
    <div className='nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96' >
      <div className=''>
        <div className=''>
          <p>Notification</p>
          <button>New</button>
        </div>
        <Button icon={<MdOutlineCancel/>} 
        color='rgba(153,171,180)' 
        bgHoverColor='light-gray'
        borderRadius= '50%'/>
      </div>
      
    </div>
  )
}

export default Chat