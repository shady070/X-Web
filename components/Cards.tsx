import { motion } from "framer-motion";


const Cards = ({ title, description, imageSrc }) => {
    return (
      <motion.div whileHover={{ x:-3, y:-3, scale:1.01, transition: { delay:0.2, duration:0.2 } }} initial={{ opacity:0, y:100, scale:1 }} whileInView={{ opacity:1, y:0, transition: {delay:1, duration:1} }} className="w-[387px] h-[244px] bg-neutral-950 bg-opacity-80 rounded-2xl border border-neutral-700 backdrop-blur-[20px] cursor-pointer">
        <div className="flex flex-col gap-[16px] justify-center items-center pb-[40px]">
          <h1 className="w-[339px] text-zinc-200 text-2xl font-normal leading-loose">{title}</h1>
          <p className="w-[339px] text-stone-300 text-sm font-light leading-tight">{description}</p>
        </div>
        <div>
          <img className="px-[24px]" src={imageSrc} alt="house" />
        </div>
      </motion.div>
    );
  };
  
  export default Cards;