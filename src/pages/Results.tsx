import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Button, CardGroup, Form } from "react-bootstrap";


const Results = () => {

    // get selected service from landing page
    const location = useLocation();
    const { state } = location; // Destructure the state object from location : {id: string; title: string }

    return (
        <div className="min-h-screen">
            {/*header*/}
            <Header />

            {/*result here*/}
            <section className="py-5">
                <Container>
                    <Row className="align-items-center g-5">Search here</Row>
                    <Row className="align-items-center g-5">Breadcumb here</Row>
                    <Row className="align-items-center g-5">
                        <Col lg={4}>
                            filter here
                        </Col>
                        <Col lg={8}>
                            results here
                        </Col>
                    </Row>

                </Container>
                {state ? state.id : "no result" }
            </section>

        </div>
    );
};

export default Results;