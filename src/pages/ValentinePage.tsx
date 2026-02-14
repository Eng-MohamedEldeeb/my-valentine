import { useEffect, useState } from "react";
import FloatingHearts from "../components/FloatingHearts";
import ValentineCard from "../components/ValentineCard";
import LoveModal from "../components/LoveModal";
import type { Heart } from "../@types/heart";

export default function ValentinePage() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Math.random(),
          left: Math.random() * 100,
          size: Math.random() * 20 + 10,
        },
      ]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-pink-200 via-red-200 to-pink-300 overflow-hidden">
      <FloatingHearts hearts={hearts} />

      <ValentineCard onOpenModal={() => setOpenModal(true)} />

      <LoveModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        backgroundImage="/couple.jpg"
      />
    </div>
  );
}
