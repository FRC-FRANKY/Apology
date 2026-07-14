import { motion } from 'framer-motion';

const events = [
  { title: '💕 The day we met', description: 'The moment my world felt brighter.' },
  { title: '💖 Our first date', description: 'A memory I still hold close to my heart.' },
  { title: '🌹 Our favorite memory', description: 'The smile you gave me that I will never forget.' },
  { title: '❤️ Today, where I ask for another chance', description: 'Because loving you is still the best thing I know.' },
];

const Timeline = () => {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-500">Our story</p>
          <h2 className="mt-2 text-3xl font-semibold text-fuchsia-700 sm:text-4xl">A Romantic Timeline</h2>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-pink-100 bg-white/80 p-6 shadow-soft"
            >
              <h3 className="text-xl font-semibold text-fuchsia-700">{event.title}</h3>
              <p className="mt-2 text-lg text-slate-700">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
