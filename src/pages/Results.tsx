import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from 'react-router-dom';

const Results = () => {

    // get selected service from landing page
    const location = useLocation();
    const { state } = location; // Destructure the state object from location : {id: string; title: string }

    return (
        <div className="min-h-screen">
            <Header />
            <section className="py-5">
                {state ? state.id : "no result" }
            </section>
            <Footer />
        </div>
    );
};

export default Results;