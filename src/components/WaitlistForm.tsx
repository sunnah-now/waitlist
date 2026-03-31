import { motion } from "motion/react";
import { CheckCircle2, X } from "lucide-react";
import React, { useState } from "react";

const WaitlistForm = ({
  variant = "default",
}: {
  variant?: "default" | "cta";
}) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": process.env.BREVO_API_KEY,
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        // Check if user is already in the list
        if (data.code === "duplicate_parameter") {
          setStatus("success");
          setEmail("");
          return;
        }
        throw new Error(
          data.message || "Something went wrong. Please try again.",
        );
      }

      setStatus("success");
      setEmail("");
    } catch (err: any) {
      console.error("Brevo API error:", err);
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex items-center justify-center gap-3 p-6 rounded-xl bg-white border border-green-100 text-green-800 font-medium shadow-sm`}
      >
        <CheckCircle2 className="text-green-500" size={24} />
        <span>You're on the list! We'll be in touch soon.</span>
        <button
          onClick={() => setStatus("idle")}
          className="ml-auto text-green-400 hover:text-green-600 transition-colors"
        >
          <X size={16} />
        </button>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <form
        onSubmit={handleSubmit}
        className={`${variant === "cta" ? "bg-white" : "bg-white"} p-2 rounded-xl ambient-shadow max-w-lg mx-auto flex flex-col sm:flex-row gap-2`}
      >
        <input
          className="flex-grow px-6 py-4 bg-transparent border-none focus:ring-0 text-on-surface outline-none"
          placeholder={
            variant === "cta"
              ? "Your developer email"
              : "Enter your email address"
          }
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "submitting"}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-primary text-white px-8 py-4 rounded-lg font-semibold transition-all hover:bg-primary/90 active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {status === "submitting" ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
            />
          ) : (
            "Join the waitlist"
          )}
        </button>
      </form>
      {status === "error" && (
        <p className="text-red-500 text-sm text-center font-medium">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default WaitlistForm;
