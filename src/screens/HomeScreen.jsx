import React from 'react'
import Hero from '../components/Hero'
import SectionOne from '../components/SectionOne'
import {Row, Col} from "react-bootstrap"

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
    </>
  )
}

export default HomeScreen