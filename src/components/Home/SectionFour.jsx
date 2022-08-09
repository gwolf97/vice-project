import React from 'react'
import {Col} from "react-bootstrap"
import BGvideo from '../BGvideo';
import videoSrc from "../../assets/VideoBrand.MOV"

const SectionFour = () => {
  return (
    <Col xs={12}>
        <BGvideo seeMore={true} src={videoSrc} title={"BRANDS"}/>
    </Col>
  )
}

export default SectionFour