import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FlippingImageProps {
  frontImage: string;
  backImage: string;
  flipInterval?: number; // in milliseconds
  altFront?: string;
  altBack?: string;
}

const FlippingImage: React.FC<FlippingImageProps> = ({
  frontImage,
  backImage,
  flipInterval = 3000,
  altFront = "Front Image",
  altBack = "Back Image",
}) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, flipInterval);

    return () => clearInterval(interval);
  }, [flipInterval]);

  return (
    <div className="w-full h-full perspective">
      <div className="relative w-full h-full">
        <AnimatePresence initial={false}>
          <motion.img
            key={flipped ? "back" : "front"}
            src={flipped ? backImage : frontImage}
            alt={flipped ? altBack : altFront}
            className="w-full h-full object-cover absolute top-0 left-0"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -180 }}
            transition={{ duration: 0.8 }}
            style={{
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FlippingImage;
