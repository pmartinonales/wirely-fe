import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <>
      <Head>
        <title>My SaaS Platform - Seamless Bank Transfers</title>
        <meta name="description" content="Integrate bank transfers into your payment solutions seamlessly with our API-first platform. Available for Europe and LATAM banks." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="My SaaS Platform - Seamless Bank Transfers" />
        <meta property="og:description" content="Integrate bank transfers into your payment solutions seamlessly with our API-first platform. Available for Europe and LATAM banks." />
        <meta property="og:url" content="https://www.my-saasp-platform.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-900 text-white">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
