import Header from "../components/Header";
import Footer from "../components/Footer"; 
import { useParams } from 'react-router-dom';
import nannies from "../nannies.json"
import { Container, Row, Col, Button, CardGroup, Card, Form } from "react-bootstrap";

const Detail = () => {

    const { id } = useParams(); // 'id' matches the parameter name in the Route path: /result/{id}
    const currentNanny = nannies.find(nanny => nanny.id === Number(id))

    return (
        <div className="min-h-screen">
            <Header />

            <section className="py-5">
                <Container>
                    <Row className="align-items-center g-5">Breadcrumbs here
                    </Row>
                    <Row className="text-start g-5">
                        <h1 style={{ fontWeight: 'bo' }}>{currentNanny.name}</h1>

                    </Row>
                </Container>
            </section>

            <Footer />
        </div>
    )
}

export default Detail;