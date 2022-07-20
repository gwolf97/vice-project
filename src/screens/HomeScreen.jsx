import React from 'react'
import Hero from '../components/Hero'
import SectionOne from '../components/Home/SectionOne'
import {Row, Col} from "react-bootstrap"
import SectionTwo from '../components/Home/SectionTwo'
import SectionThree from '../components/Home/SectionThree'
import SectionFour from '../components/Home/SectionFour'
import SectionFive from '../components/Home/SectionFive'

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
    <Row className="vw-100">
        <SectionThree/>
    </Row>
    <Row className="vw-100">
        <SectionFour/>
    </Row>
    <Row className="vw-100">
        <SectionFive/>
    </Row>
    </>
  )
}

export default HomeScreen