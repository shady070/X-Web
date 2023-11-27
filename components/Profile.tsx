import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center lg:mt-[60px]">
      <motion.img
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.2 }}
        className='w-[84.19px] h-[84.19px] rounded-[161.28px] mb-[0.68px] object-cover'
        src="/Card.png"
        alt="stars"
      />
      <motion.p initial={{ scale:0 }} whileInView={{ scale: 1, transition: { delay: 2, type: "spring", stiffness: 100 } }}  className='text-white text-[8.05px] lg:text-[10px] leading-[12.90px] mb-[0.68px]'>User id:</motion.p>
      <motion.h2 initial={{ scale:0 }} whileInView={{ scale: 1, transition: { delay: 2, type: "spring", stiffness: 100 } }} className='text-white lg:hidden sm:block text-xs font-normal w-[54.71px] mb-[17.45px]'>Random xBorg ID</motion.h2>
      <motion.h2 initial={{ scale:0 }} whileInView={{ scale: 1, transition: { delay: 2, type: "spring", stiffness: 100 } }} className='hidden lg:block text-white text-xs font-normaltext-sm mb-[17.45px] lg:mb-[38px]'>XBorg001</motion.h2>
      <motion.img 
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.2 }}
        className='w-[48px] h-[38px] rounded-[161.28px] mb-[0.68px] object-cover'
        src="/Pill.png"
        alt="stars"
      />
    </div>
  );
};

export default Profile;