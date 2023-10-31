import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillFacebook} from "react-icons/ai"



function Home() {
   
  return (
   <>
     <div className="home">
    <main>

        <h1>ChampionsRevolutions.</h1>
        <p>We provide Solution for your problems</p>
    </main>
      
      
    </div>

    <div className="home2">
    <img src={vg} alt="Graphics" />
    <div>
        <p>We are your one and only solution to the Tech problems you face
        every day, We are leading tech company whose aim is to increase the 
        problem solving ability in childrn.</p>
    </div>

    </div>
    <div className="home3" id="about">
    <div>
      <h1>who we are?</h1>
      <p>
      FCS Software Solutions Limited is an IT Company providing IT and IT enabled services. The company has strong delivery capabilities in Application development and maintenance, eLearning and Digital Content Management, Software testing, Infrastructure management services, Product Development, and primarily has done work to develop data centers, e-commerce portals, packaged application support, FPGA based accelerated computing environments, IT Separation projects, and now artificial intelligence and machine learning.
      </p>
      </div>
    </div>

    <div className="home4" id="brands">
      <div>
      <h1>Brands</h1>
      <article>

        <div style={{animationDelay : "0.3s"}}>
          <AiFillGoogleCircle />
          <p>Google</p>
        </div>

        <div style={{animationDelay : "0.5s"}}>
          <AiFillAmazonCircle/>
          <p>Amazon</p>
        </div>
        <div style={{animationDelay : "0.7s"}}>
          <AiFillFacebook />
          <p>Facebook</p>
        </div>
      </article>
      </div>
    </div>
   </>
  )
}

export default Home
