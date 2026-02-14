import { motion } from "framer-motion";
import ValentineImage from "./ValentineImage";

type Props = {
  onOpenModal: () => void;
};

export default function ValentineCard({ onOpenModal }: Props) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
      className="bg-white shadow-2xl rounded-3xl p-6 sm:p-10 text-center w-full max-w-md"
    >
      <ValentineImage mainImage="/main.jpg" avatar="/avatar.jpg" />

      <h1 className="text-2xl sm:text-3xl font-bold text-pink-500 mt-6">
        Happy Valentine Ya 5o5a ❤️
      </h1>

      <p className="text-gray-600 text-sm sm:text-lg mt-4">
        You make my world brighter every single day ✨
      </p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg w-full sm:w-auto"
        onClick={onOpenModal}
      >
        <div dir="rtl">هستأذنك تدوسي هنا بجى عشان المفاجأه تكمل 👀💌</div>
      </motion.button>
    </motion.div>
  );
}
