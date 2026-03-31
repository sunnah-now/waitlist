import CodeBlock from "./CodeBlock";

const CodeSection = () => (
  <section id="api" className="bg-white py-24 px-6 border-y border-slate-100">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <CodeBlock />
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">
              Engineered for Ease of use
            </span>
            <h2 className="font-serif text-4xl text-primary mt-2">
              Complete Free & Fast API
            </h2>
            <p className="text-on-surface-variant mt-4 leading-loose text-lg">
              We're building a high-performance, globally distributed API
              designed for the next generation of Islamic applications.
              Zero-latency delivery with GraphQL and API support.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-surface-container-low rounded-xl border-l-4 border-secondary">
              <h4 className="font-bold text-primary mb-2">Full Data Exports</h4>
              <p className="text-sm text-on-surface-variant">
                JSON, CSV, and SQL Hadith exports of all books out our library
                for offline processing.
              </p>
            </div>
            <div className="p-6 bg-surface-container-low rounded-xl border-l-4 border-primary">
              <h4 className="font-bold text-primary mb-2">Phase 1: Bukhari</h4>
              <p className="text-sm text-on-surface-variant">
                During the early access (starts from week 16 2026) only Sahih
                Bukhari will be available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CodeSection;
