import {React} from 'react';

import "./main.css";

import Profile from "./img/profile.png";






function Contactus() {
    return (
        <div className="contact-us-container">
        <div className="header">
          <img src={Profile} alt="John Weak" height={50} width={50} />
          <p>Hello, Welcome 
            <br />
            <strong>John Weak</strong>
          </p>
          <div className="notification-icon"></div>
        </div>
        <div className="content">
          <h2>Contact us</h2>
          <div className="form">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value="workforeign@gmail.com" readOnly />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone No.</label>
              <input type="tel" id="phone" value="+44 (0) XXXX XXX XXX" readOnly />
            </div>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Weak" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Enter your query..." />
            </div>
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

  


        
    );
}
export default Contactus