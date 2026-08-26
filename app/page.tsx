import LondonCoffeeHero from '@/components/hero/LondonCoffeeHero';
import CraftAndStory from '@/components/story/CraftAndStory';
import SignatureMenu from '@/components/menu/SignatureMenu';
import LondonExperience from '@/components/experience/LondonExperience';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-outer flex flex-col items-center gap-6 lg:gap-8 pb-6 lg:pb-8 overflow-x-hidden">
      <LondonCoffeeHero />
      <CraftAndStory />
      <SignatureMenu />
      <LondonExperience />
      <ContactSection />
      <Footer />
    </main>
  );
}

