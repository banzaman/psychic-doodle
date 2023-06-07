// eslint-disable-next-line no-unused-vars
import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="row">
        <div className="col-lg-6">
          <h1>Mark Rubanza</h1>
          <h3>I build things for the web.</h3>
          <p>A full-stack web developer from Uganda. I have a great passion for learning languages and frameworks. In addition to that, I really enjoy designing websites and implementing those designs.</p>
        </div>
        <div className="col-lg-6">
          <aside>
            <h3>Connect with me:</h3>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="icon"><i className="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="icon"><i className="bi bi-linkedin"></i></a>
            <a href="https://angel.co/" target="_blank" rel="noopener noreferrer" className="icon"><i className="bi bi-angellist"></i></a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
