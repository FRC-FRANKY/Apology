import { motion } from 'framer-motion';

const letterText = `My dearest love,

I know I've made mistakes, and I make you hurt. I'm sorry for what I've done. I want to make things right and show you how much I care. You mean the world to me, and I can't imagine my life without you.
I'm sorry if I'm always angry at you gusto ko lang ng attention mo miss na kasi kita miss ko na ang mga ngiti miss ko na ang mga tawa pasensya na kung na galit ako sa hindi mo pag reply agad sa akin gusto ko lang naman 
na ma pansin mo ako gusto ko sana e share yung nangyari sakin kasi hindi ko alam kung ano ang nangyari sa akin hindi ko alam kung paano gagawin gusto ko lang naman na pansinin mo ako alam ko naman na may ginagawa ka jan pero
kasi nangingibabaw lagi kasi sakin yung galit sorry talaga love sana mapatawad mo ako sa aking nagawa alam ko na hindi ako gagawin yang mga bagay na makakasira sa relasyon natin ato alam ko hindi ako magaling mag sorry
kaya ito lang ang ma bigay ko sayo dito lang kasi ako magaling gagawa lang nag sorry through website sorry talaga  .`;

const Letter = () => {
  return (
    <section id="letter" className="px-6 py-16 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl rounded-[2rem] border border-pink-100 bg-white/80 p-8 shadow-soft backdrop-blur sm:p-12"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-500">A heartfelt letter</p>
        <h2 className="text-3xl font-semibold text-fuchsia-700 sm:text-4xl">My Apology Letter</h2>
        <p className="mt-6 whitespace-pre-line text-lg leading-8 text-slate-700">{letterText}</p>
      </motion.div>
    </section>
  );
};

export default Letter;
