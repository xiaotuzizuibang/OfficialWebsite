import {
  HeroSection,
  AboutSection,
  BusinessSection,
  ContactSection,
  Footer,
  Navbar,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BusinessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
