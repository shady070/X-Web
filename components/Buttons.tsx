import { motion } from "framer-motion";

const Buttons = () => {
  return (
    <div>
      <div>
        <motion.button
          animate={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { delay: 1.5, duration: 0.8 } }}
          whileHover={{ scale: 1.1, x: -4, y: -4 }}
          className='btn-text-grd text-xs w-[156.09px] h-[38.62px] bg-zinc-950 rounded-[289.66px] border border-zinc-500 backdrop-blur-[16.09px]'
        >
          Soulbound Launchpad
        </motion.button>
      </div>
    </div>
  );
};

export default Buttons;
