import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

interface HeroProps {
  onReadLetter: () => void;
}

const Hero = ({ onReadLetter }: HeroProps) => {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12">
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute text-2xl text-pink-300/60"
            initial={{ opacity: 0.2, y: 0, x: 0 }}
            animate={{ y: [0, -20, 0], x: [0, 10, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 7 + index * 0.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ left: `${5 + index * 5}%`, top: `${8 + (index % 6) * 12}%` }}
          >
            ♥
          </motion.span>
        ))}
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 text-center lg:flex-row lg:justify-between lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-pink-500">A tender message</p>
          <h1 className="text-4xl font-semibold leading-tight text-fuchsia-700 sm:text-5xl lg:text-6xl">
            I'm Sorry, My Love ❤️
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700 sm:text-xl">
            I know I hurt you, and I wish I could take away the pain. You mean everything to me, and I hope you'll let me show you how much I love you.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={onReadLetter}
            className="mt-8 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-7 py-3 font-semibold text-white shadow-soft transition-all"
          >
            Read My Letter
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-full bg-white/70 p-8 shadow-soft"
          >
            <FaHeart className="text-7xl text-pink-500 sm:text-8xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
