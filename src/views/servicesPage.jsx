import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "../style/views/Services.scoped.scss";
import MainNavbar from '../components/MainNavbar';

function ServicesPage() {

  // States to handle the toggle for each service card
  const [showWebFull, setShowWebFull] = useState(window.innerWidth > 750);
  const [showAIFull, setShowAIFull] = useState(window.innerWidth > 750);

  // Check for window resize to adjust the visibility of content
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) {
        setShowWebFull(true);
        setShowAIFull(true);
      } else {
        setShowWebFull(false);
        setShowAIFull(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle functions for each service card
  const toggleWebContent = () => {
    setShowWebFull(!showWebFull);
  };

  const toggleAIContent = () => {
    setShowAIFull(!showAIFull);
  };

  return (
    <div className="services">
      <MainNavbar/>
      <h1>SERVICES</h1>
      <div className="cards">
        <div className="serviceCard web">
          <h2>Web Development</h2>
          <p><span className='spanServices'>Dive into the future of web development with our specialized services. Leveraging the robust capabilities of React, Vue, and classic JavaScript, we deliver high-performance websites and applications designed to meet the modern demands of businesses and users alike.</span>
          </p>
          {showWebFull && (
            <div className='servicesText'>
              <p>
              <span className='spanServices'>React Development:</span> Immerse your users in a seamless experience with our React solutions. Known for its high efficiency and flexible architecture, React allows us to build dynamic user interfaces that are not only fast but also scalable, ensuring your website adapts to the changing needs of your business.
              </p>
              <p>
              <span className='spanServices'>Vue Development:</span> Simplify and expedite your path to a compelling web presence with Vue. This progressive framework is the cornerstone of our approach to creating interactive and modern web applications that are both lightweight and powerful.
              </p>
              <p>
              <span className='spanServices'>JavaScript Mastery:</span> Beyond the frameworks, our command over classic JavaScript enables us to refine every aspect of your website's functionality. From custom animations to interactive features, we ensure your website is as engaging as it is flawless.
              </p>
              <p>
              <span className='spanServices'>No matter the scope, our development process is tailored to deliver a product that aligns perfectly with your vision and business objectives. We build not just websites, but gateways to digital experiences that resonate with users and drive business growth.</span>
              </p>
            </div>
          )}
          <button onClick={toggleWebContent}>
            {showWebFull ? 'Show Less' : 'Read More'}
          </button>
        </div>
        
        <div className="serviceCard ia">
          <h2>AI Consulting and Development</h2>
          <p><span className='spanServices'>Step into the era of intelligent operations with our dedicated AI consulting services. As we craft the web of tomorrow with React, Vue, and JavaScript, we also pave the way for smarter business solutions through artificial intelligence.</span>
          </p>
          {showAIFull && (
            // Additional content shown when the state is true
            <div className='servicesText'>
              <p>
              <span className='spanServices'>Tailored AI Consulting:</span> Our consulting revolves around understanding your business at its core, identifying processes that can be enhanced by AI, and strategizing the implementation of machine learning and data analytics to elevate your operations. We provide expert guidance, from conceptualizing the role of AI in your organization to executing a seamless integration.
              </p>
              <p>
              <span className='spanServices'>Custom AI Strategy Development:</span> We specialize in crafting bespoke AI strategies that align with your specific business objectives. Our approach ensures that AI solutions are not only innovative but also practical, enhancing decision-making, automating workflows, and providing insights that drive competitive advantage.
              </p>
              <p>
              <span className='spanServices'>Proprietary AI Technology:</span> Our dedication to AI development is exemplified by our in-house AI technology, currently under construction. We're building our own AI systems that will embody our commitment to cutting-edge solutions and set new standards in AI excellence.
              </p>
              <p>
              <span className='spanServices'>Engage with us for AI consulting that not only understands the present but also anticipates the future. We're not just building AI, we're building the future of your business.</span>
              </p>
            </div>
          )}
          <button onClick={toggleAIContent}>
            {showAIFull ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
