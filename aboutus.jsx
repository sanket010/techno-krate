import {react} from 'react';
import "./main.css"
import Profile from "./img/profile.png"
import Pic from "./img/pic.jpg"

function Aboutus(){
    return(

        <>
         <div className="about-us-container">
      <div className="header">
         <img src={Profile} alt="John Weak" height={50} width={50} />
                  <p>Hello, Welcome 
                    <br />
                    <strong>John Weak</strong>
                  </p>
                  <div className="notification-icon"></div>
      </div>
      <div className="content">
        <h2>About Us</h2>
        <div className="about-us-text">
        <img src={Pic} alt="Profile Image"height={250} width={250} />
          <p>
            We are a team of dedicated professionals driven by
            creativity, innovation, and a passion for exceptional
            design. With years of expertise in mobile application and
            website design, we specialize in transforming ideas into
            captivating digital experiences that seamlessly combine
            functionality and aesthetics. Our approach is centered
            on understanding the unique needs of each client,
            ensuring every project we undertake not only aligns
            with their vision but also elevates their brand in the
            digital space.
          </p>
          <p>
            At the core of our work is our mastery of modern design
            tools like Figma, which allows us to bring concepts to
            life with precision and style. We take pride in crafting
            user-centric designs that are intuitive, visually
            appealing, and optimized for performance. From
            creating sleek mobile applications to designing
            impactful websites, we aim to deliver solutions that
            resonate with users and leave a lasting impression.
          </p>
        </div>
        
      </div>
      <div className="footer">
        <div className="nav-item">
          <img src="/home-icon.png" alt="Home" />
          <p>Home</p>
        </div>
        <div className="nav-item">
          <img src="/compliance-icon.png" alt="Compliance" />
          <p>Compliance</p>
        </div>
        <div className="nav-item">
          <img src="/eligibility-icon.png" alt="Eligibility" />
          <p>Eligibility</p>
        </div>
        <div className="nav-item">
          <img src="/resources-icon.png" alt="Resources" />
          <p>Resources</p>
        </div>
        <div className="nav-item">
          <img src="/reminders-icon.png" alt="Reminders" />
          <p>Reminders</p>
        </div>
      </div>
    </div>
        </>
    )
}
export default Aboutus