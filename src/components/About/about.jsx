import React from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer'
import styles from './about.module.css';
import { getImageUrl } from '../../../utilis';

const About = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>About Us</div>
          <div className={styles.text}>
          At Genisys Coffee, we're passionate about crafting the perfect cup for every coffee lover. Nestled in the heart of the community, our cozy café is a haven for those seeking exceptional coffee and warm, friendly service. Our artisanal blends are meticulously crafted to bring out the best flavors, ensuring every sip is a memorable experience. Whether you're here to work, relax, or catch up with friends, Genisys Coffee is the place where moments are savored and connections are made. Join us and discover the story behind every cup.
          </div>
          <a href="mailto:example@example.com" className={styles.contactButton}>Contact Us</a>
        </div>
        <img
          src={getImageUrl('about/about-1.png')}
          alt="About Us"
          className={styles.image}
        />
      </div>
      <Footer/>
    </>
  );
};

export default About;
