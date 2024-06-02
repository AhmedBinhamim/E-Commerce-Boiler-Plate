import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/navbar';
import styles from './products.module.css';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import { getImageUrl } from '../../../utilis';

const Products = () => {
 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://genysis-api.onrender.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

 

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <MDBContainer fluid className="my-5">
          <MDBRow>
            {products.map(product => (
              <MDBCol key={product._id} md="12" lg="4" className={styles.colMargin}>
                <MDBCard>
                  <MDBCardImage
                    src={getImageUrl(`products/${product.type.toLowerCase()}.png`)}
                    position="top"
                    alt={product.type}
                  />
                  <MDBCardBody>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{product.type}</h5>
                      <h5 className="text-dark mb-0">${product.Price}</h5>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <p className="text-muted mb-0">
                        Available: <span className="fw-bold">6</span>
                      </p>
                      <button  className={styles.addToCartButton}>
                        Add to Cart
                      </button>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default Products;
