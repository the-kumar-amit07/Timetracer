/* eslint-disable no-unused-vars */
import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'

import { Button } from '.'
import avatar from '../data/avatar.jpeg'
const UserProfile = () => {
  return (
    <div className='nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 '>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-lg dark:text-gray-200'>User Profile</p>
        <Button icon={<MdOutlineCancel/>}
        color='rgb(153,171,180)'
        bgHoverColor='light-gray'
        size='2xl'
        borderRadius='50%'
        />
      </div>
      <div>
        <p className='font-semibold text-xl dark:text-gray-200'>Amit Kumar Marndi</p>
        <p className='text-gray-500 text-sm dark:text-gray-400'>Developer</p>
        
      </div>
    </div>
  )
}

export default UserProfile