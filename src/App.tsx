import {
  Navbar,
  Hero,
  CodeSection,
  VisionSection,
  DailyInspirations,
  CTA,
  Footer,
} from "./components";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CodeSection />
      <VisionSection />
      <DailyInspirations />
      <CTA />
      <Footer />
    </div>
  );
}
