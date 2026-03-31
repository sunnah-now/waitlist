import { motion } from "motion/react";

const HadithCard = ({
  en,
  ar,
  collection,
  ref_id,
  narrator,
  grade,
  reverse = false,
}: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-white rounded-xl p-8 md:p-12 ambient-shadow flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12`}
  >
    <div className="lg:w-1/2 space-y-6">
      <div className="flex items-center gap-4">
        <span
          className={`${grade?.toLowerCase() !== "shahih" ? "bg-orange-500 text-white" : "bg-[#b7ede8] text-[#00201e]"} px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider`}
        >
          {grade}
        </span>
        <span className="text-on-surface-variant/60 text-[10px] font-bold uppercase tracking-wider">
          {collection}: {ref_id}
        </span>
      </div>
      <p className="font-sans text-xl md:text-2xl text-primary leading-relaxed font-medium">
        "{en}"
      </p>
      <div className="pt-4">
        <p className="text-sm text-on-surface-variant italic">
          — Narrated by {narrator}
        </p>
      </div>
    </div>
    <div
      className={`lg:w-1/2 flex items-center ${reverse ? "justify-start" : "justify-end"}`}
    >
      <p className="arabic-text text-3xl md:text-4xl text-primary text-right leading-[2.5]">
        {ar}
      </p>
    </div>
  </motion.div>
);

export default HadithCard;
