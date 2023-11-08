import React, { useEffect, useState } from 'react'
import './Landing.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Favorite, ShoppingCart, ShoppingCartOutlined, ShoppingCartTwoTone } from '@mui/icons-material';
import { Button, Rating, Typography } from '@mui/material';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addToWish } from '../redux/wishList';
import { Link } from 'react-router-dom';
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import  { fetchProducts, searchProduct } from '../redux/productSlice';

function Landing() {
  const dispatch=useDispatch()
 
  const { allProducts, loading, error } = useSelector(
    (state) => state.productSlice
  );
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
 
  return (
    <div className="landing-container">
      <Container>
        <section>
          <div className="hero">
            <Row>
              <Col>
                <div className="column">
                  <p className="p-0">Discover Your Perfect Style</p>
                  <p> Select, Savor, Shine!</p>
                  <button>
                    <span>Get started</span>
                  </button>
                </div>
                <div className="title-hidden mt-5">
                  <p>
                    Discover Your <br /> Perfect Style
                  </p>
                  <p>
                    {" "}
                    Select, Savor,
                    <br /> Shine!
                  </p>
                  <button>
                    <span>Get started</span>
                  </button>
                </div>
              </Col>
              <Col>
                <img
                  className="mobileImg"
                  src="https://i.postimg.cc/prsD9BGs/unveiling-layers-webshop-development-exposing-components-pristine-white-canvas-free-from-s-983420-16.jpg"
                  alt=""
                />
                <img
                  className="first"
                  src="https://i.postimg.cc/m2R5qt9h/pink-sweater-front.jpg"
                  alt=""
                />
                <img
                  className="second"
                  src="https://i.postimg.cc/sDgH4bSN/hand-holding-light-brown-beige-pants-Photo-Room-png-Photo-Room.png"
                  alt=""
                />
              </Col>
            </Row>
          </div>
        </section>
        <section id="page2">
          <h1
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            Products
          </h1>
        <div style={{display:"flex",justifyContent:"center", marginBottom:"20px"}}>
            <div class="inputBox_container mt-2">
              <svg
                class="search_icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                alt="search icon"
              >
                <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z"></path>
              </svg>
              <input
                className="inputBox"
                id="inputBox"
                onChange={(e) => dispatch(searchProduct(e.target.value))}
                type="text"
                placeholder="Search For Products"
              />
            </div>
        </div>

          <Row>
            {allProducts.length > 0 ? (
              allProducts.map((i) => (
                <Col className="mb-4">
                  <div class="card">
                    <div class="image-container">
                      <img title={i.title} src={i.image} alt="" />
                    </div>
                    <label
                      onClick={() => dispatch(addToWish(i))}
                      class="favorite"
                    >
                      <Favorite className="fav"></Favorite>
                    </label>
                    <div class="content">
                      <div class="product-name">
                        {i.title.length > 28
                          ? i.title.slice(0, 28) + "..."
                          : i.title}
                      </div>
                      <div class="rating">
                        <Rating
                          name="half-rating-read"
                          defaultValue={i.rating.rate}
                          precision={0.5}
                          readOnly
                          size="small"
                        />
                        <p>({i.rating.count})</p>
                      </div>
                      <div class="brand">${i.price}</div>
                      <div className="butWrap">
                        <Link to={"/cart"}>
                          <button
                            className="buyNow "
                            onClick={() => dispatch(addToCart(i))}
                          >
                            Buy now
                          </button>
                        </Link>{" "}
                        <button
                          className="buyNow addCart"
                          onClick={() => dispatch(addToCart(i))}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))
            ) : (
              <Box sx={{ width: "100%" }}>
                <LinearProgress sx={{ color: "grey" }} />
              </Box>
            )}
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default Landing