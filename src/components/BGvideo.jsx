import React from 'react'
import { Link } from 'react-router-dom'
import  Fade  from 'react-reveal/Fade'
import { Button } from 'react-bootstrap'

const BGvideo = ({src, title, seeMore}) => {
  return (
    <div className="video-wrapper">
        <video src={src} loop autoPlay muted/>
        <div className="content">
                <div className="text-center">
                    <Fade>
                    <Button className="btn px-1 py-0 btn-outline-light" style={{opacity:"1", backgroundColor:"Transparent", fontSize:"3vw"}}>{title}</Button>
                    </Fade>
                </div>
            {seeMore && <div className="see-more">
                     <Link to="/" style={{textDecoration:"none"}}>
                        <h3 className="text-light" style={{fontSize:"3vw", fontFamily:"nexa"}} >See more</h3>
                    </Link>                         
                </div>}
        </div>
    </div>
  )
}

export default BGvideo