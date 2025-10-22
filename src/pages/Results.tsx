import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Button, CardGroup, Form } from "react-bootstrap";
import { useState } from 'react';
import nannies from "../nannies.json"


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
    

    return (
        <div className="min-h-screen">
            {/*header*/}
            <Header />

            {/*result here*/}
            <section className="py-5">
                <Container>
                    <Row className="align-items-center g-5">Search here (services), date, number of babies</Row>
                    <Row className="align-items-center g-5">Breadcrumbs here
                    </Row>
                    <Row className="g-5">

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

                            </Container>
                        </Col>

                        {/*results from filter and search*/}
                        <Col lg={8}>
                            results here
                        </Col>
                    </Row>

                </Container>
                {/*{state ? <div>{`${state.id} ${state.title}` }</div> : "no result" }*/}
            </section>

        </div>
    );
};

export default Results;