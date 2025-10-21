import { Container, Row, Carousel } from "react-bootstrap";
import nannies from "../nannies.json"
import caregiverImg from "../assets/caregiver.jpg";

const lengthOfCarouselItem = 3;
let nanniesBlock = nannies.map((nanny, index) => {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        return nanny;
    }
})

const ServicesSection = () => {
    return (
        <section className="py-5">
            <Container>
                <Row className="mb-4">
                    <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'left', }}>
                        Recommended
                    </h2>
                    <Carousel data-bs-theme="dark">
                        {nannies.map(nanny => (
                            <Carousel.Item key={nanny.id}>
                                <img src={nanny.photos} alt={nanny.name} width="20%" height="20%" />
                                <Carousel.Caption>
                                    <h3>{nanny.name}</h3>
                                    <p>{nanny.address}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )) }
                        
                    </Carousel>
                </Row>
                <Row className="mb-4">
                    <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'left', }}>
                        New Nannies
                    </h2></Row>
                <Row className="mb-4">
                    <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'left', }}>
                        Browse by Districts
                    </h2>
                </Row>
            </Container>
        </section>
    )
};

export default ServicesSection;