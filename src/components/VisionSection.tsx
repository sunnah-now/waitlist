import { useState, useEffect } from "react";

const VisionSection = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isCountdownActive, setIsCountdownActive] = useState(true);

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date(2026, 3, 13);
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
        setIsCountdownActive(true);
      } else {
        setIsCountdownActive(false);
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="vision" className="bg-surface-container-low py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">
            our drive
          </span>
          <h2 className="font-serif text-4xl text-primary leading-tight">
            Structured Sacred Wisdom
          </h2>
          <p className="text-on-surface-variant leading-loose text-lg">
            Standard api's often are rate limited, closed-source or don't
            include a structured downloadable datasets. Sunnah.now is different.
            Our mission is to ease the way for developers to provide them with
            verified and structured hadith's. That is open for everyone to use,
            contribute to, and build upon.
          </p>

          <div className="mb-5 mt-7">
            <div className="flex items-center gap-4">
              <span className="bg-[#b7ede8] text-[#00201e] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                Shahih
              </span>
              <span className="text-on-surface-variant/60 text-[10px] font-bold uppercase tracking-wider">
                Riyad as-Salihin (رياض الصالحين): 173
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-24 w-px bg-slate-300" />
            <div className="">
              <p className="italic font-serif text-primary text-xl leading-relaxed">
                مَن دَلَّ على خَيرٍ فله مِثلُ أَجْرِ فاعِلِه
              </p>

              <p className="italic font-serif text-primary text-xl leading-relaxed pt-3">
                "Whoever guides someone to virtue will be rewarded equivalent to
                him who practices that good action"
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="h-64 rounded-xl overflow-hidden ambient-shadow relative">
              <img
                className="w-full h-full object-cover object-top"
                src="/images/drive_1.webp"
                alt="Calligraphy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50" />
            </div>
            {isCountdownActive && (
              <div className="h-48 rounded-xl bg-[#ffdb91]/30 border border-[#ffdb91] flex items-center justify-center p-8 text-center flex-col gap-2">
                <span className="font-serif text-secondary text-xl italic mb-2">
                  Early access API coming in week 16!
                </span>
                <span className="font-serif text-secondary text-xs">
                  ({countdown.days > 0 ? `${countdown.days} days and ` : ""}
                  {countdown.hours}:{countdown.minutes}:{countdown.seconds}{" "}
                  left)
                </span>
              </div>
            )}
          </div>
          <div className="space-y-4">
            <div className="h-48 rounded-xl bg-primary flex items-center justify-center p-8 text-center flex-col gap-2">
              <span className="font-serif text-white text-xl italic mb-2">
                Huge library. <br /> 1 Unified API & DB
              </span>
              <span className="font-serif text-white text-xs">
                (incl. downloadable structured data)
              </span>
            </div>
            <div className="h-64 rounded-xl overflow-hidden ambient-shadow relative">
              <img
                className="w-full h-full object-cover"
                src="images/drive_2.webp"
                alt="Workspace"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
