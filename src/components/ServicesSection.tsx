import { Container, Row, Carousel, Stack, Card} from "react-bootstrap";
import nannies from "../nannies.json"
import { Star } from 'lucide-react';

interface ServiceCardProps {
    photos: string | undefined;
    name: string | "";
    rating: number | 0;
    numberOfRating: number | 0;
    address: string | "";
    experience: number | 0;
    expertise: string[] | [];
    onClick?: () => void;
}

const ServiceCard = ({ photos, name, rating, numberOfRating, address, experience, expertise } : ServiceCardProps) => {
    return (
    <Card bg="light" style={{ width: "20rem" }}>
                      <Card.Img variant="top" src={photos} />
                      <Card.Body>
                        <Card.Title><p style={{color: '#000', textAlign: 'left'}}>{name}</p></Card.Title>
                        <Card.Text style={{color: '#000', textAlign: 'left', fontSize: '1rem'}}>
                        <p style={{fontWeight: 'bold'}}>{rating} <Star fill="orange" strokeWidth={1} size={12} style={{marginBottom: '0.25rem'}} /> ({numberOfRating})</p>
                        <p style={{color: 'rgba(0, 0, 0, 0.5)'}}>{address}</p>
                        <p>{experience} years experience</p>
                        <p>{expertise.map(skill => (
                            <span key={skill} style={{marginRight: '0.5rem', padding: '0.25rem 0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem', fontSize: '0.875rem'}}>{skill}</span>
                        ))}</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
    )
}

const lengthOfCarouselItem = 3;

// Group nannies into chunks of `lengthOfCarouselItem`
  let nannyBlocks = [];
  for (let i = 0; i < nannies.length; i += lengthOfCarouselItem) {
    nannyBlocks.push(nannies.slice(i, i + lengthOfCarouselItem));
  }


const ServicesSection = () => {
    return (
        <section className="py-5">
            <Container>
                <Row className="mb-4">
                    <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'left', }}>
                        Recommended
                    </h2>
                    <Carousel data-bs-theme="dark">
                        {nannyBlocks.map(block => (
                            <Carousel.Item>
                <Stack
                  direction="horizontal"
                  className="h-100 justify-content-center align-items-center"
                  gap={3}
                >
                  {block.map((nanny, idx) => (
                    <Card bg="light" style={{ width: "20rem" }}>
                      <Card.Img variant="top" src={nanny.photos} />
                      <Card.Body>
                        <Card.Title><p style={{color: '#000', textAlign: 'left'}}>{nanny.name}</p></Card.Title>
                        <Card.Text style={{color: '#000', textAlign: 'left', fontSize: '1rem'}}>
                        <p style={{fontWeight: 'bold'}}>{nanny.rating} <Star fill="orange" strokeWidth={1} size={12} style={{marginBottom: '0.25rem'}} /> ({nanny.numberOfRating})</p>
                        <p style={{color: 'rgba(0, 0, 0, 0.5)'}}>{nanny.address}</p>
                        <p>{nanny.experience} years experience</p>
                        <p>{nanny.expertise.map(skill => (
                            <span key={skill} style={{marginRight: '0.5rem', padding: '0.25rem 0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem', fontSize: '0.875rem'}}>{skill}</span>
                        ))}</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </Stack>
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