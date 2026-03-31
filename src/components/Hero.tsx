import { motion } from "motion/react";
import WaitlistForm from "./WaitlistForm";

const Hero = () => (
  <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-6 pt-20">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-surface/85 z-10" />
      <img
        className="w-full h-full object-cover"
        src="/images/hero.webp"
        alt="Library background"
        referrerPolicy="no-referrer"
      />
    </div>

    <div className="relative z-20 max-w-4xl text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary tracking-tight mb-8"
      >
        Your sunnah, <br />
        <span className="italic text-secondary"> humbly encoded.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-12"
      >
        Sunnah.now is a developer-first digital repository providing
        high-fidelity Hadith data through a modern API and scholarly-curated
        datasets.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <WaitlistForm />
      </motion.div>

      <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/60 font-bold">
        Easing data collection for developers & researchers.
      </p>
    </div>
  </section>
);

export default Hero;
