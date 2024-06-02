import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#5c1a00' }}>
      <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '#8D3E1F' }}>
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Genisys Coffee</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p>
                Where every cup tells a story. Experience artisanal blends and cozy ambiance in the heart of your community. Elevate your coffee journey with our signature specialties.
              </p>
            </div>
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p> Arabica </p>
              <p> Espresso</p>
              <p> Cappucino </p>
             
            </div>
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p><i className="fas fa-home"></i> Al-Safa District, Jeddah, Saudi Arabia</p>
              <p><i className="fas fa-envelope"></i> Info@genisys.com</p>
              <p><i className="fas fa-phone"></i> +966 123456789</p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-3" style={{ backgroundColor: '#5C1A00' }}>
        © 2024 Copyright Genysis
        
      </div>
    </footer>
  );
}

export default Footer;
