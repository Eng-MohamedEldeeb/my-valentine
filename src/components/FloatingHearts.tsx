import { motion } from "framer-motion";
import type { Heart } from "../@types/heart";

type Props = {
  hearts: Heart[];
};

export default function FloatingHearts({ hearts }: Props) {
  return (
    <>
      {hearts.map((heart: Heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: -800, opacity: 0 }}
          transition={{ duration: 6, ease: "linear" }}
          style={{
            left: `${heart.left}%`,
            fontSize: heart.size,
          }}
          className="absolute bottom-0"
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}
