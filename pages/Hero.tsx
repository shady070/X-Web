"use client"
import { motion } from 'framer-motion'
import Profile from '@/components/Profile'
import Buttons from '@/components/Buttons'

const Hero = () => {
  return (
    <div className='lg:h-[730px] h-[1073px] '>
    <div className='flex lg:flex-row flex-col items-center lg:items-center lg:justify-between lg:gap-[50px] lg:mx-[50px]'>
        <div>
        <motion.img initial={{ opacity: 0, y:-100 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4, duration:0.6 }} className='hidden lg:block absolute top-0 left-0' src='/xBrog.png' height={744} width={800} alt='bg-img' />
        <div className='ml-[30px] lg:mt-[100px]'>
            <motion.p initial={{ opacity: 0, x:-100 }} whileInView={{ opacity: 1, x:0 }} transition={{ delay: 0.4, duration:0.6 }} className='text-red-500 text-xs font-medium uppercase pb-[24px]'>Lorem ipsum dolor </motion.p>
            <motion.h1 initial={{ opacity: 0, x:-100 }} whileInView={{ opacity: 1, x:0 }} transition={{ delay: 0.5, duration:0.7 }} className='w-[396px] text-zinc-100 text-5xl font-normal leading-[48px] lg:hidden pb-[24px] thick-txt1'>Empowering players & fans</motion.h1>
            <motion.h1 initial={{ opacity: 0, x:-100 }} whileInView={{ opacity: 1, x:0 }} transition={{ delay: 0.5, duration:0.7 }} className='text-zinc-100 hidden  lg:block leading-[64px] lg:text-[64px] xl:w-[619px] lg:w-[519px] pb-[24px] thick-txt'>Game-changing infrastructure</motion.h1>
            <motion.p initial={{ opacity: 0, x:-100 }} whileInView={{ opacity: 1, x:0 }} transition={{ delay: 0.6, duration:0.8 }} className='w-[360px] text-stone-500 text-sm leading-tight lg:text-sm lg:w-[496px] lg:font-light pb-[48px]'>A decentralised, non-custodial social graph, empowering players to take full ownership of their gaming identities and enabling developers to build next-gen applications. </motion.p>
            <motion.button initial={{ opacity: 0, x:-100, scale:1, background: '#EB3A4A', shadow:'#EB3A4A'  }} whileHover={{ scale: 1.1, background:'#FB1330', shadow:'#EB3A4A' }} whileInView={{ opacity: 1, x: 0, transition: { delay: 0.7, duration: 0.9 }, }}  className='w-[180px] h-14 px-4 py-2 rounded-lg justify-center items-center text-center text-zinc-200 text-lg'>
            Join Discord
            </motion.button>
        </div>
        </div>
        <div className='pt-[47px] w-full h-full relative flex flex-col items-center justify-center'>
          <motion.img
            initial={{ opacity: 0, y: 500 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.5 }}
            className='absolute w-[870px] h-[490px] right-0 object-cover'
            src='/RightxBorg.png'
            alt='bubbles'
          />
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className='lg:pt-[120px] w-[383px] object-cover'
            src="/xlogo.png"
            alt="xlogo"
          />
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.5 }}
            className='lg:hidden sm:block w-[340px] lg:pt-[120px] absolute top-0 object-cover'
            src="/RightxBorg1.png"
            alt="stars"
          />
          <div className='absolute'>
           <Profile />
          </div>
          <div className='absolute mt-[300px] lg:mt-[380px] flex flex-col justify-center items-center gap-[14px] '> 
           <Buttons />
           <div className='flex flex-row gap-[14px]'>
           <Buttons />
           <Buttons />
           </div>
          </div>
        </div>
    </div>
    <motion.div
      whileInView={{ y: 0, opacity: 1, transition: { delay: 0.8, duration: 0.8 } }}
      whileHover={{ scale: 1 }}
      initial={{ y: 100, opacity: 0 }}
      className='flex flex-col justify-center items-center mt-[60px]'
    >
      <p className='scroll-btn text-xs font-light'>Scroll down</p>
      <img src='/arrow.svg' height={7} width={15} />
    </motion.div>
    </div>
  )
}

export default Hero
