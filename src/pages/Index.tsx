import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <HeroSection />
            <ServicesSection />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Index;