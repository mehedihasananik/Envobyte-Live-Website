import Container from '@/Components/Container/Container'
import DashBoardNav from '@/Components/Dashboard/DashBoardNav'
import DashBoardSideNav from '@/Components/Dashboard/DashBoardSideNav'
import DashBoardContent from '@/Components/PagesComponents/DashBoardContent/DashBoardContent'
import MessageContent from '@/Components/PagesComponents/MessageContent/MessageContent'
import React from 'react'

const MessagePage = () => {
  return (
    <div className='bg-[#FCFCFC]'>
        <div className='max-w-[1700px] mx-auto  md:pl-[4%]'>
        <div className='w-full flex'>
        <DashBoardSideNav/>
        <div className='w-full'>
        <DashBoardNav title="message"/>
        <MessageContent/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default MessagePage