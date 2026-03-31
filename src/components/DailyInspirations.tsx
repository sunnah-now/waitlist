import HadithCard from "./HadithCard";

const DailyInspirations = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="font-serif text-4xl text-primary mb-4">
        Daily Inspirations
      </h2>
      <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
      <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold">
        A glimpse into our curated library
      </p>
    </div>

    <div className="space-y-12">
      <HadithCard
        collection="Bukhari (صحيح البخاري)"
        ref_id="1"
        grade="shahih"
        en="Actions are but by intentions, and every man shall have only that which he intended..."
        ar="إنَّما الأعمالُ بالنِّيَّاتِ وإنَّما لِكلِّ امرئٍ ما نوى..."
        narrator="'Umar bin al-Khattab (عمر بن الخطاب)"
      />
      <HadithCard
        collection="at-Tirmidhi (الترمذي)"
        ref_id="2682"
        grade="Da'if"
        en="Whoever follows a path in the pursuit of knowledge, Allah will make a path to Paradise easy for him..."
        ar="مَنْ سَلَكَ طَرِيقًا يَبْتَغِي فِيهِ عِلْمًا سَلَكَ اللَّهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ..."
        narrator="Abu al-Darda (أبو الدرداء)"
        reverse
      />
      <HadithCard
        collection="Bukhari (صحيح البخاري)"
        ref_id="3559"
        grade="shahih"
        en="The best amongst you are those who have the best manners and character."
        ar="إِنَّ مِنْ خِيَارِكُمْ أَحْسَنَكُمْ أَخْلاقًا"
        narrator="Bukhari (البخاري)"
      />
    </div>
  </section>
);

export default DailyInspirations;
