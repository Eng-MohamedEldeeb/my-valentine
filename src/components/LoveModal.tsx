import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
  backgroundImage: string;
};

export default function LoveModal({ open, onClose, backgroundImage }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <div
              className="relative w-full max-w-md h-105 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background Image */}
              <img
                src={backgroundImage}
                className="absolute inset-0 w-full h-full object-cover"
                alt="background"
              />

              {/* Overlay Blur / Dropout */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-6">
                <motion.h2
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-2xl sm:text-3xl font-bold mb-4"
                >
                  For You ❤️
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm sm:text-lg leading-relaxed"
                >
                  You are not just part of my life...
                  <br />
                  You are my safe place, my happiness, and my favorite person
                  every single day 💕
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="mt-6 px-6 py-2 bg-pink-500 rounded-full"
                  onClick={onClose}
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
