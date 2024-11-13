import React from 'react';

export default function Contact(): JSX.Element {
  return (
    <div className="form">
      <div className="contact">
        <div className="contact-text">
          <h2>Contact <span>Me!</span></h2>
          <h4>Looking for a dedicated frontend developer for your next project?</h4>
          <p>&quot;Let&rsquo;s create something amazing together! I&rsquo;m here to answer questions, explore new ideas, or chat about projects. Drop me a message!&quot;</p>
          <div className="list">
          <li>
  <h5>Here's my contact number:</h5>
  <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>03012497612</span>
</li>
            <li><h5>Here's my Email:</h5><a href="mailto:shabbirareeba94@gmail.com">shabbirareeba94@gmail.com</a></li>
          </div>

          <div className="contact-form">
            <form action="">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Your Mobile Number" required />
              <textarea placeholder="How can I help you?" />
              <input type="submit" value="Send Message" className="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
