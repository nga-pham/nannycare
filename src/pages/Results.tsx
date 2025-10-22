import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, CardGroup, Card, Form, Breadcrumb } from "react-bootstrap";
import { useState } from 'react';
import nannies from "../nannies.json"
import { Star } from 'lucide-react';

// previous search criteria
{/*{state ? <div>{`${state.service.id} ${state.service.title} ${state.date} ${state.numOfBabies}` }</div> : "no result" }*/ }

// add label and handle change for choosing districts
// Group nannies by district
const districts = Array.from(new Set(nannies.map(nanny => nanny.district)));

const Results = () => {
    // get selected service from landing page
    const location = useLocation();
    const { state } = location as any; // Destructure the state object from location : {id: string; title: string }

    // add label and handle change for choosing name
    const [nameValue, setNameValue] = useState<string>(""); // Initial value for the name
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(event.target.value)
    };

    // add label for chosing range of experiences
    const [rangeExpValue, setRangeExpValue] = useState<number>(1); // Initial value for the range
    const handleRangeExpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRangeExpValue(Number(event.target.value))
    };

    // add label and hanlde change for choosing available time
    const [rangeStartTimeValue, setRangeStartTimeValue] = useState<string>('07:00'); // Initial value for the start time
    const handleRangeStartTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRangeStartTimeValue(event.target.value)
    }
    const [rangeEndTimeValue, setRangeEndTimeValue] = useState<string>('22:00'); // Initial value for the end time
    const handleRangeEndTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRangeEndTimeValue(event.target.value)
    }

    // add label and handle change for choosing range of ratings
    const [rangeRatingValue, setRangeRatingValue] = useState<number>(1); // Initial value for the range
    const handleRangeRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRangeRatingValue(Number(event.target.value))
    };

    // add label and handle change for choosing districts


    // go to detail page to book
    const navigate = useNavigate();
    const goToDetail = (nannyIdx: number) => {
        navigate(`/results/${nannyIdx}`)
    }

    return (
        <div className="min-h-screen">
            {/*header*/}
            <Header />

            {/*result here*/}
            <section className="py-5">
                <Container>
                    <Row className="align-items-center g-5">Search here (services), date, number of babies</Row>
                    <Row className="align-items-center g-5 mt-2">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Nannies</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row className="g-5 mt-2">

                        {/*filter*/}
                        <Col lg={4} >
                            <Container style={{ backgroundColor: "#F8F9FA" }}>
                                <Row className="align-items-start text-start justify-content-start p-3">
                                    <h4 className="mb-3 mt-1">Name</h4>
                                    <Form.Group className="w-100">
                                        <Form.Control type="text" placeholder="Enter name" value={nameValue} onChange={handleNameChange} className="w-100" />
                                    </Form.Group>
                                </Row>
                                <Row className="align-items-start text-start justify-content-start p-3">
                                    <h4 className="mb-3 mt-1">Experiences</h4>
                                    <Form.Group className="w-100">
                                        <Form.Range min={1} max={10} value={rangeExpValue} onChange={handleRangeExpChange} className="w-100" />
                                        <Form.Label className="d-block">Minimum {rangeExpValue} years</Form.Label>
                                    </Form.Group>
                                </Row>

                                <Row className="align-items-start text-start justify-content-start p-3">
                                    <h4 className="mb-3 mt-1">Available time</h4>
                                    <Form.Group className="w-100">
                                        <Form.Label className="d-block">From:</Form.Label>
                                        <Form.Control type="time" value={rangeStartTimeValue} onChange={handleRangeStartTimeChange} className="w-100 mb-2" />
                                        <Form.Label className="d-block">To:</Form.Label>
                                        <Form.Control type="time" value={rangeEndTimeValue} onChange={handleRangeEndTimeChange} className="w-100" />
                                    </Form.Group>
                                </Row>

                                <Row className="align-items-start text-start justify-content-start p-3">
                                    <h4 className="mb-3 mt-1">Rating</h4>
                                    <Form.Group className="w-100">
                                        <Form.Range min={1} max={5} value={rangeRatingValue} step={0.1} onChange={handleRangeRatingChange} className="w-100" />
                                        <Form.Label className="d-block">Minimum {rangeRatingValue} stars</Form.Label>
                                    </Form.Group>
                                </Row>

                                {districts.length > 0 && (
                                    <Row className="align-items-start text-start justify-content-start p-3">
                                        <h4 className="mb-3 mt-1">District</h4>
                                        <Form.Group className="w-100">
                                            {districts.map(district => (
                                                <Form.Check label={district} value={district} />
                                            ))}
                                        </Form.Group>
                                    </Row>
                                )}

                                <Form.Group className="w-100">
                                    <Button variant="info">Search</Button>
                                    <Button variant="danger" className="ms-2">Reset</Button>
                                </Form.Group>
                            </Container>
                        </Col>

                        {/*results from filter and search*/}
                        <Col lg={8}>
                            <CardGroup>
                                {nannies.map((nanny, _idx) => (
                                    <Card key={_idx} className="m-2" style={{ minWidth: '18rem' }}>
                                        <Card.Img variant="top" src={nanny.photos} />
                                        <Card.Body>
                                            <Card.Title>
                                                <p style={{ color: '#000', textAlign: 'left' }}>{nanny.name}</p>
                                            </Card.Title>
                                            <Card.Text style={{ color: '#000', textAlign: 'left', fontSize: '1rem' }}>
                                                <p style={{ fontWeight: 'bold' }}>
                                                    {nanny.rating}
                                                    <Star fill="orange" strokeWidth={0} size={12} style={{ marginBottom: '0.25rem' }} />
                                                    ({nanny.numberOfRating})
                                                </p>
                                                <p style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
                                                    {`${nanny.address ? nanny.address : ""}${nanny.district ? `, ${nanny.district}` : ""}`}</p>
                                                <p>{nanny.experience} years experience</p>
                                                <p>{nanny.services.map(skill => (
                                                    <span key={skill} style={{ marginRight: '0.5rem', padding: '0.25rem 0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem', fontSize: '0.875rem' }}>{skill}</span>
                                                ))}</p>
                                            </Card.Text>
                                            <Button variant="info" onClick={() => goToDetail(_idx)}>Book now</Button>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </CardGroup>
                        </Col>
                    </Row>
                    {/*footer*/}
                    <Footer />
                </Container>
            </section>

        </div>
    );
};

export default Results;