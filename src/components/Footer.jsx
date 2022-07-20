import React from 'react'
import { Container, Row, Col, ListGroup} from 'react-bootstrap'

const Footer = () => {
  return (
    <footer style={{backgroundColor:"black", paddingBottom:"20px"}}>
        <Container>
            <Row>
                    <Col className="text-center py-3 text-light">
                        <p className="footer-text1">Let's create something together!<br/>
                        <a type="email" href='mailto:info@meryanvice.com' className="footer-text2">info@meryanvice.com</a></p>
                    </Col>
            </Row>  
             <Row>
                <Col className="text-center">
                    <a className="mx-3 fs-5 text-light" href="" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                    <a className="mx-3 fs-5 text-light" href="" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a className="mx-3 fs-5 text-light" href="" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer