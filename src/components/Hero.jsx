import React from 'react'

const Hero = () => {
  return (
<>
<section className="col-lg-12 col-md-12 col-sm-12 container-fluid text-center" style={{width:"110vw"}}>
            <div className="container-fluid" style={{backgroundColor: "rgba(0, 0, 0, 0.6)", width:"100vw", height:"80vh"}}>
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                  <h1 className="mb-3" style={{fontFamily:"Inter", fontWeight:"800", fontSize:"max(4.5vw, min(30px))"}}>Building Inspirational Leaders</h1>
                  <h4 className="mb-3" style={{fontFamily:"Arial", fontSize:"max(1.7vw, min(12px))"}}>I will help you develop your voice and build audiences that follow your journey</h4>
                </div>
              </div>
            </div>
          </section>
</>
  )
}

export default Hero