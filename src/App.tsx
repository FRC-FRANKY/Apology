import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Letter from './components/Letter';
import LoveCounter from './components/LoveCounter';
import MusicPlayer from './components/MusicPlayer';
import Reasons from './components/Reasons';
import Surprise from './components/Surprise';
import Timeline from './components/Timeline';

const App = () => {
  const scrollToLetter = () => {
    document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 text-slate-800">
      <main className="mx-auto max-w-7xl">
        <Hero onReadLetter={scrollToLetter} />
        <Letter />
        <Gallery />
        <Reasons />
        <Timeline />
        <LoveCounter />
        <MusicPlayer />
        <Surprise />

        <section className="px-6 py-16 text-center sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl rounded-[2rem] border border-pink-100 bg-white/80 p-8 shadow-soft sm:p-12"
          >
            <p className="text-2xl font-semibold leading-relaxed text-fuchsia-700 sm:text-3xl">
              I know I can't erase for what I've done...
              <br />
              But I promise will do better.
            </p>
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-8 flex justify-center"
            >
              <FaHeart className="text-6xl text-pink-500" />
            </motion.div>
            <p className="mt-6 text-xl text-slate-700">Forever Yours,<br />(Love ❤️)</p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
