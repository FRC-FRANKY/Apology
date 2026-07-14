import { motion } from 'framer-motion';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import { FaHeart } from 'react-icons/fa';

const Surprise = () => {
  const [clicked, setClicked] = useState(false);

  const triggerSurprise = () => {
    setClicked(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#f9a8d4', '#e9d5ff', '#ffffff', '#f472b6'],
    });
  };

  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-4xl flex-col items-center rounded-[2rem] border border-pink-100 bg-gradient-to-br from-pink-50 to-purple-50 p-10 text-center shadow-soft"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={triggerSurprise}
          className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-8 py-4 text-lg font-semibold text-white shadow-soft"
        >
          Click if you still love me ❤️
        </motion.button>

        {clicked && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 rounded-[1.5rem] bg-white/90 p-6 shadow-soft"
          >
            <div className="flex justify-center">
              <FaHeart className="text-4xl text-pink-500" />
            </div>
            <p className="mt-4 text-lg text-slate-700">
              Thank you for giving us another chance. I promise to love you better every single day. ❤️
            </p>
          </motion.div>
        )}

        {clicked && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {Array.from({ length: 16 }).map((_, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0.5, y: '100%', x: 0 }}
                animate={{ opacity: 0, y: '-120%', x: index % 2 === 0 ? 30 : -30 }}
                transition={{ duration: 2.4, delay: index * 0.08 }}
                className="absolute bottom-0 text-3xl text-pink-400"
                style={{ left: `${8 + index * 5}%` }}
              >
                ♥
              </motion.span>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Surprise;
