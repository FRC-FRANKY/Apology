import { motion } from 'framer-motion';

const reasons = [
  '❤️ Your smile brightens my darkest days.',
  '🌸 You make ordinary moments feel magical.',
  '💖 You believe in me.',
  '✨ You\'re my favorite person.',
  '🥰 I love your kindness.',
  '🌹 You\'re my home.',
];

const Reasons = () => {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-500">Why I love you</p>
          <h2 className="mt-2 text-3xl font-semibold text-fuchsia-700 sm:text-4xl">Reasons I Love You</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-[1.5rem] border border-pink-100 bg-gradient-to-br from-white to-pink-50 p-6 text-center text-lg text-slate-700 shadow-soft"
            >
              {reason}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
