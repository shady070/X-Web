import { motion } from "framer-motion";

interface ProfileBoxProps {
  title: string;
  imageSrc: string;
}

const ProfileBox: React.FC<ProfileBoxProps> = ({ title, imageSrc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 1 }}
      className='w-[284px] h-20 bg-zinc-950 rounded-[55px] border border-zinc-500 backdrop-blur-[20px] btn-text-grd flex gap-[14.42px] px-[5.11px] mb-[24px] items-center'
    >
      <img className='w-16 h-16 relative rounded-[131.07px]' src={imageSrc} alt="profile-img" />
      <p>{title}</p>
    </motion.div>
  );
};

export default ProfileBox;
