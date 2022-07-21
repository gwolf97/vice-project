import React from 'react'
import {Col, Row, Container, Button} from "react-bootstrap"

const SectionTwo = () => {
  return (
    <>
    <Col className='section-2-background d-flex justify-content-center align-items-center' xs={12} sm={5} lg={4} fluid style={{height:"50vw"}}>
        <Container>
            <Row>
                <Col>
                    <div>
                        <h3 style={{fontSize:"max(2.5vw, min(20px))", fontFamily:"nexabold"}} className=" text-center text-light">Become a Successful Female Entrepreneur</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    </Col>
    <Col className='section-2-background-2 d-flex bg-dark justify-content-center align-items-center m-auto' xs={12} sm={7} lg={8} fluid style={{height:"50vw"}} >
        <Container >
            <Row>
                <Col>
                    <div className="section-1-container-btm-right text-center text-light">
                        <p className="section-1-text-3 w-100" style={{fontFamily:"nexa"}}>Free course for latinas</p>
                        <p className="section-1-text-4 w-100" style={{maxWidth:"550px", fontFamily:"nexa"}}>
                        An 8-week beginner-friendly course for latin girls that will help you learn the fundamentals to start working online or grow their business through coaching, problem-solving and community activity.
                        </p>
                        <Button className="px-5 mt-1 btn-outline-light btn" variant="dark btn">Apply</Button>
                    </div>    
                </Col>
            </Row>
        </Container>
    </Col>
</>
  )
}

export default SectionTwo