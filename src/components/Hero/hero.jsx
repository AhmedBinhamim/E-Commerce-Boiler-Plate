import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; 
import { MDBBtn } from 'mdb-react-ui-kit';
import styles from './hero.module.css';
import { getImageUrl } from '../../../utilis';

const Hero = () => {

  const imageUrl = getImageUrl('hero/hero.png');

  return (
    <div className={styles.hero}>
      <header style={{ paddingLeft: 0 }}>
        <div
          className='p-5 text-center bg-image'
          style={{ backgroundImage: `url('${imageUrl}')`, height: 600 }} // Use imageUrl here
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <div className={styles.heroTitle}><h1 className='mb-3'>Crafting Moments, One Cup at a Time</h1></div>
                <h4 className='mb-3'><img src={getImageUrl('logos/logo.png')}></img></h4>
                <MDBBtn outline color='light' size='lg'>Find a store</MDBBtn> {/* Use MDBootstrap button */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero;
