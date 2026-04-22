import React from 'react'
import Greeting from './greetings'
import Dropdown from './dropdown'


const HeroSection = () => {
  return (
    <div className='flex flex-col text-white items-center justify-center h-screen'>
      
      
        <Greeting />

        <Dropdown />

      
    </div>
  )
}

export default HeroSection
