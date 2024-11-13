import React from 'react';

export default function Contact(): JSX.Element {
  return (
    <div className="form">
      <div className="contact">
        <div className="contact-text">
          <h2>Contact <span>Me!</span></h2>
          <h4>Looking for a dedicated frontend developer for your next project?</h4>
          <p>&quot;Let&apos;s create something amazing together! I&apos;m here to answer questions, explore new ideas, or chat about projects. Drop me a message!&quot;</p>
          
          <div className="list">
            <ul>
              <li>
                <h5>Here&apos;s my contact number:</h5>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>03012497612</span>
              </li>
              <li>
                <h5>Here&apos;s my Email:</h5>
                <a href="mailto:shabbirareeba94@gmail.com">shabbirareeba94@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="contact-form">
            <form action="">
              <div>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="Your Name" required />
              </div>
              <div>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="Your Email" required />
              </div>
              <div>
                <label htmlFor="tel">Your Mobile Number</label>
                <input type="tel" id="tel" placeholder="Your Mobile Number" required />
              </div>
              <div>
                <label htmlFor="message">How can I help you?</label>
                <textarea id="message" placeholder="How can I help you?" required />
              </div>
              <input type="submit" value="Send Message" className="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
