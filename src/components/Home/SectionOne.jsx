import React from 'react'
import {Container, Row, Col, Button} from "react-bootstrap"

const SectionOne = () => {
  return (
        <>
            <Col className='my-4 justify-content-center' xs={12} lg={6}>
                <Container>
                    <Row>
                        <Col>
                            <div className="section-1-container-top-left d-flex flex-column align-items-center">
                                <div>
                                <p className="section-1-text-1">Digital Agency</p>
                                <p className="section-1-text-2">We do it for you.</p>
                                <div className="line1"></div>  
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="section-1-container-btm-left text-center">
                                <p className="section-1-text-3 w-100">Social Media Management</p>
                                <p className="section-1-text-4 w-100">
                                    Scale your business by hiring our team to implement our<br/>
                                    integrated Growth Marketing Service
                                </p>
                                <Button className="schedule-btn-1" variant="dark">Schedule a free consulting session</Button>
                            </div>                            
                        </Col>
                    </Row>
                </Container>
            </Col>
            <Col className="my-4" xs={12} lg={6} >
                <Container>
                    <Row>
                        <Col>
                            <div className="section-1-container-top-right w-100 d-flex flex-column align-items-center">
                                <div>
                                <p className="section-1-text-1">Online Program</p>
                                <p className="section-1-text-2">We teach you or your <br/>team how to do it.</p>
                                <div className="line2"></div>  
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="section-1-container-btm-right text-center">
                                <p className="section-1-text-3 w-100">1 On 1 Social Media & Personal Brand Coaching</p>
                                <p className="section-1-text-4 w-100">
                                    We will review your social media in-depth, finding areas to improve and maximize your potential online. We will also speak about ways to monetize your platform and how to structure brand deals.
                                </p>
                                <Button className="schedule-btn-2" variant="dark">Schedule a free consulting session</Button>
                            </div>    
                        </Col>
                    </Row>
                </Container>
            </Col>
        </>
  )
}

export default SectionOne