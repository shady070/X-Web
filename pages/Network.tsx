"use client"
import Cards from "@/components/Cards"
import { motion } from "framer-motion"

const Network = () => {
  return (
    <section className='h-[692px]'>
     <motion.img initial={{ opacity:0, x:-100 }} whileInView={{ opacity:1, x:0 }} transition={{delay:0.5, duration:0.6 }}  src='/bubble-layer.png' className="pt-[120px] absolute " height={245} width={151} alt="bubble-layer" />
     <div className="flex flex-col items-center justify-center mb-[56px]"> 
        <motion.h1 initial={{ opacity:0, y:200 }} whileInView={{ opacity:1, y:0 }} transition={{delay:0.6, duration:0.8 }} className="w-[760px] text-center text-zinc-200 text-[64px] font-normal leading-[64px] thick-txt pt-[120px] pb-[24px]">The value network of gaming</motion.h1>
        <motion.p initial={{ opacity:0, y:200 }} whileInView={{ opacity:1, y:0 }} transition={{delay:0.6, duration:1 }} className="w-[511px] text-center text-stone-500 text-sm font-light leading-tight">The fundamental protocol that allows anyone to create gaming applications built on top of player identities.</motion.p>
     </div>
     <div className="flex flex-row gap-[24px] items-center justify-center ">
     <Cards 
     title= 'Gaming social layer'
     description= 'Gamers take control of their data.'
     imageSrc= '/house.png'
     />
     <Cards 
     title= 'Gaming social layer'
     description= 'Gamers take control of their data.'
     imageSrc= '/star.png'
     />
     </div>
    </section>
  )
}

export default Network
