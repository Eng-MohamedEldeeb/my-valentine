import { motion } from "framer-motion";

type Props = {
  mainImage: string;
  avatar: string;
};

export default function ValentineImage({ mainImage, avatar }: Props) {
  return (
    <div className="relative w-full max-w-xs mx-auto">
      <img
        src={mainImage}
        alt="couple"
        className="rounded-3xl shadow-xl w-full object-cover"
      />

      <motion.img
        src={avatar}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg object-cover"
      />
    </div>
  );
}
