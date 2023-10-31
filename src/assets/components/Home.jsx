import React from 'react'
import vg from "../2.webp";



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

    <div className="home3">
      <h1>
        who we are?
      </h1>
      <p>
      FCS Software Solutions Limited is an IT Company providing IT and IT enabled services. The company has strong delivery capabilities in Application development and maintenance, eLearning and Digital Content Management, Software testing, Infrastructure management services, Product Development, and primarily has done work to develop data centers, e-commerce portals, packaged application support, FPGA based accelerated computing environments, IT Separation projects, and now artificial intelligence and machine learning.
      </p>
    </div>

    </div>

    
   </>
  )
}

export default Home
