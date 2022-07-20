import React from 'react'
import {Col, Row, Container, Button} from "react-bootstrap"
import { Link } from 'react-router-dom'

const SectionFive = () => {
  return (
    <div className='bg-dark underlay d-flex justify-content-center flex-column align-items-center vw-100'>
    <Col className='section-5-background d-flex justify-content-center flex-column align-items-center vw-100' xs={12} fluid style={{height:"40vw"}}>
    <Container>
        <Row>
            <Col style={{position:"relative"}} xs={12}>
                <div className="text-center">
                    <Button className="btn px-1 py-0 btn-outline-light" style={{opacity:"1", backgroundColor:"Transparent", fontSize:"3vw"}}>PERSONAL BRANDING</Button>
                </div>
            </Col>
            <Col>
                 <Link className="bottomleft" to="/" style={{textDecoration:"none"}}>
                        <h3 className="text-light" style={{fontSize:"3vw"}} >See more</h3>
                </Link>
            </Col>
        </Row>
    </Container>
    </Col>
    </div>
  )
}

export default SectionFive