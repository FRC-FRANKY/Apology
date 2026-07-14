import { motion } from 'framer-motion';

const images = [
  new URL('../Memories/memory1.jpg', import.meta.url).href,
  new URL('../Memories/memory2.jpg', import.meta.url).href,
  new URL('../Memories/memory3.jpg', import.meta.url).href,
  new URL('../Memories/memory4.jpg', import.meta.url).href,
  new URL('../Memories/memory5.jpg', import.meta.url).href,
  new URL('../Memories/memory6.jpg', import.meta.url).href,
];

const Gallery = () => {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-500">Memory gallery</p>
          <h2 className="mt-2 text-3xl font-semibold text-fuchsia-700 sm:text-4xl">Our Beautiful Memories</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="rounded-[1.5rem] bg-white/80 p-3 shadow-soft"
            >
              <img src={image} alt={`Memory ${index + 1}`} className="h-64 w-full rounded-[1.25rem] object-cover" />
              <p className="mt-4 text-center text-lg font-medium text-slate-700">Our Beautiful Memory</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
