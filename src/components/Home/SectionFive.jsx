import React from 'react'
import {Col} from "react-bootstrap"
import BGvideo from '../BGvideo';
import videoSrc from "../../assets/personalbranding.mp4"

const SectionFive = () => {
  return (
    <Col xs={12}>
        <BGvideo seeMore={true} src={videoSrc} title={"PERSONAL BRANDING"}/>
    </Col>
  )
}

export default SectionFive