import WaitlistForm from "./WaitlistForm";

const CTA = () => (
  <section
    id="waitlist"
    className="py-24 px-6 text-center bg-surface-container-low/50"
  >
    <div className="max-w-3xl mx-auto space-y-8">
      <h3 className="font-serif text-3xl text-primary">
        Be the first to build with sunnah
        <span className="text-secondary">.now</span> API.
      </h3>
      <p className="text-on-surface-variant">
        Sign up to receive early API keys, documentation access and updates.
      </p>
      <WaitlistForm variant="cta" />
    </div>
  </section>
);

export default CTA;
