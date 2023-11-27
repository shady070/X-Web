'use client'
import ProfileBox from '@/components/ProfileBox';
import { motion } from 'framer-motion';

const GamingWeb = () => {
  return (
    <section className='relative h-[528px]'>
      <div className='flex flex-row gap-[229px] justify-center relative z-10'>
        <div>
          <motion.h1 initial={{ opacity: 0, x:-100 }} whileInView={{ opacity: 1, x:0 }} transition={{ delay: 0.4, duration:0.6 }} className='w-[281px] text-zinc-100 text-[40px] font-normal thick-txt1 leading-[48px]'>The New Gaming Web</motion.h1>
          <motion.p initial={{ opacity: 0, x:-100 }} whileInView={{ opacity: 1, x:0 }} transition={{ delay: 0.6, duration:0.8 }} className='w-[387px] text-stone-500 text-sm font-light leading-tight'>At the core of the XBorg Data Graph Protocol lies a dynamic and interconnected network of gaming profiles. Each player's profile is represented as a unique ERC-721 NFT, complete with metadata unique to their gaming journey. </motion.p>
        </div>
        <div className='flex flex-row gap-[24px]'>
          <div className='flex flex-col'>
            <ProfileBox 
              imageSrc='/Card.png'
              title='MonkeyIslander872'
            />
            <ProfileBox 
              imageSrc='/p1.png'
              title='TennisChallenger'
            />
            <ProfileBox 
              imageSrc='/p2.png'
              title='tired0fbeIngWired'
            />
          </div>
          <div className='flex flex-col'>
            <ProfileBox 
              imageSrc='/p3.png'
              title='mean_deal_'
            />
            <ProfileBox 
              imageSrc='/p4.png'
              title='DoozieWoozie'
            />
            <ProfileBox 
              imageSrc='/p5.png'
              title='Greendragon_'
            />
          </div>
        </div>
      </div>
      <div className='absolute top-1/2 right-0 transform -translate-y-1/2 z-0'>
        <motion.img 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          src='/Illustration.png' 
          alt='Illustration' 
        />
      </div>
    </section>
  );
}

export default GamingWeb;