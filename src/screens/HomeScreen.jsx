import React from 'react'
import Hero from '../components/Hero'
import SectionOne from '../components/SectionOne'
import {Row, Col} from "react-bootstrap"
import SectionTwo from '../components/SectionTwo'

const HomeScreen = () => {
  return (
    <>
    <Row>
      <Col>
         <Hero/>
      </Col>
    </Row>
    <Row  className="justify-content-md-center">
         <SectionOne/>
    </Row>
    <Row className="vw-100">
        <SectionTwo/>
    </Row>
    </>
  )
}

export default HomeScreen