import React from 'react'
import {Container, Row, Col, Button} from "react-bootstrap"
import Fade from 'react-reveal/Fade';

const SectionThree = () => {
  return (
    <Col className='section-3 d-flex justify-content-center align-items-center m-auto' xs={12} >
    <Container style={{margin:"40px 0"}} >
        <Row>
            <Col>
                <div className="section-1-container-btm-right d-flex align-items-center flex-column my-5 text-center" >
                    <Fade >
                    <h3 style={{fontSize:"32px", fontFamily:"nexabold"}} className="section-3-title w-100">Who is our service for?</h3>
                    <p className="section-3-text-1 w-100 mt-1" style={{maxWidth:"800px", fontFamily:"nexalight"}}>
                    We help founders, managers and freelancers of service, consulting, coaching, real state or e-commerce businesses to have all the knowledge and resources they need to grow their business through stories to tease out emotional res- ponses, building consumer loyalty, documents and templates, expert mentoring and a private community. Everything we know and use in our Growth Marketing Agency.
                    </p>
                    <p className="section-3-text-2 w-100 mt-2" style={{maxWidth:"800px", fontFamily:"nexalight"}}>
                    Through our methodology, we teach you what business model to choose, how to formulate your offer and value pro- position, brand identity, close sales, create your website, what kind of content and networking strategies to execute, implement paid ads, automate processes with software and manage the business.
                    </p>
                    <Button style={{fontFamily:"nexa"}} className="px-5 mt-1 btn-dark btn" variant="dark btn">Teach me how</Button>
                    </Fade>
                </div>    
            </Col>
        </Row>
    </Container>
</Col>
  )
}

export default SectionThree