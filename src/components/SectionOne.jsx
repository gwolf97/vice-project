import React from 'react'
import {Container, Row, Col, Button} from "react-bootstrap"

const SectionOne = () => {
  return (
        <>
            <Col xs={12} md={6}>
                <Container>
                    <Row>
                        <Col>
                            <div className="section-1-container-top-left">
                                <p className="section-1-text-1">Digital Agency</p>
                                <p className="section-1-text-2">We do it for you.</p>
                                <div className="line1"></div>  
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="section-1-container-btm-left">
                                <p className="section-1-text-3">Social Media Management</p>
                                <p className="section-1-text-4">
                                    Scale your business by hiring our team to implement our<br/>
                                    integrated Growth Marketing Service
                                </p>
                                <Button variant="dark">Schedule a free consulting session</Button>
                            </div>                            
                        </Col>
                    </Row>
                </Container>
            </Col>
            <Col xs={12} md={6}>
                <Container>
                    <Row>
                        <Col>
                            <div className="section-1-container-top-right">
                                <p className="section-1-text-1">Online Program</p>
                                <p className="section-1-text-2">We teach you or your <br/>team how to do it.</p>
                                <div className="line2"></div>  
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="section-1-container-btm-right">
                                <p className="section-1-text-3">1 On 1 Social Media & Personal Brand Coaching</p>
                                <p className="section-1-text-4">
                                    We will review your social media in-depth, finding areas to <br/>improve and maximize your potential online. We will also <br/>speak about ways to monetize your platform and how to <br/>structure brand deals.
                                </p>
                                <Button variant="dark">Schedule a free consulting session</Button>
                            </div>    
                        </Col>
                    </Row>
                </Container>
            </Col>
        </>
  )
}

export default SectionOne