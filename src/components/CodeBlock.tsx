import { motion, AnimatePresence } from "motion/react";
import { Terminal } from "lucide-react";
import { useState, useEffect } from "react";

const CodeBlock = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showResponse, setShowResponse] = useState(false);

  const examples = [
    {
      cmd: "curl https://api.sunnah.now/v1/hadith/bukhari/1",
      res: {
        text_en: "Actions are but by intentions...",
        grade: "Sahih",
        collection: {
          name: "Sahih Bukhari",
          index: "1",
        },
      },
    },
    {
      cmd: "curl https://api.sunnah.now/v1/hadith/tirmidhi/2682",
      res: {
        text_en: "Whoever follows a path...",
        grade: "Da'if",
        collection: {
          name: "at-Tirmidhi",
          index: "2682",
        },
      },
    },
    {
      cmd: "curl https://api.sunnah.now/v1/hadith/bukhari/3559",
      res: {
        text_en: "The best among you...",
        grade: "Sahih",
        collection: {
          name: "Sahih Bukhari",
          index: "3559",
        },
      },
    },
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentExample = examples[index];

    if (isTyping) {
      if (displayText.length < currentExample.cmd.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentExample.cmd.slice(0, displayText.length + 1));
        }, 40);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
          setShowResponse(true);
        }, 200);
      }
    } else {
      timeout = setTimeout(() => {
        setShowResponse(false);
        setIsTyping(true);
        setDisplayText("");
        setIndex((prev) => (prev + 1) % examples.length);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, index]);

  return (
    <div className="bg-[#1c1c18] p-6 rounded-xl shadow-2xl font-mono text-sm overflow-hidden border border-white/5 min-h-[340px] flex flex-col">
      <div className="flex gap-2 mb-4 border-b border-white/10 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>

      <div className="flex-grow">
        <div className="flex items-center gap-2 text-secondary mb-4">
          <span className="text-green-400">$</span>
          <span>{displayText}</span>
          {isTyping && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-4 bg-secondary/50 inline-block"
            />
          )}
        </div>

        <AnimatePresence>
          {showResponse && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2 text-[10px] text-white/30 mb-2 uppercase tracking-widest">
                <Terminal size={12} />
                <span>Response received in 24ms</span>
              </div>
              <pre className="text-blue-300 bg-white/5 p-4 rounded-lg overflow-x-auto">
                <code>{JSON.stringify(examples[index].res, null, 2)}</code>
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CodeBlock;
