import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./wish.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Col, Container, Row } from 'react-bootstrap';
import { Cancel, Delete } from '@mui/icons-material';
import { Rating } from '@mui/material';
import { addToCart, removeCart } from '../redux/cartSlice';
import { removeWish } from '../redux/wishList';
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from 'react-router-dom';

function Wish() {
    
    const dispatch=useDispatch()
    const wishArray=useSelector(state=>state.wish)
    console.log(wishArray);
  return (
    <div className="wishh">
      <Container>
        <h1
          style={{ textAlign: "center", fontWeight: "700", marginTop: "20px" }}
        >
          Wishlist
        </h1>
        <Row>
          {wishArray.length > 0 ? (
            wishArray.map((i) => (
              <Col className="mb-4" lg={3}>
                <div class="card">
                  <div class="image-container">
                    <img title={i.title} src={i.image} alt="" />
                  </div>
                  <label
                    onClick={() => dispatch(removeWish(i.id))}
                    class="favorite"
                  >
                    <Cancel></Cancel>
                  </label>
                  <div class="content">
                    <div class="product-name mb-3">
                      {i.title.length > 28
                        ? i.title.slice(0, 28) + "..."
                        : i.title}
                    </div>
                    {/* <div class="rating">
                          <Rating
                            name="half-rating-read"
                            defaultValue={i.rating.rate}
                            precision={0.5}
                            readOnly
                            size="small"
                          />
                          <p>({i.rating.count})</p>
                        </div> */}
                    <div class="brand">${i.price}</div>
                    <div className="butWrap">
                      {" "}
                      <Link to={"/cart"}>
                        <button
                          onClick={() => dispatch(addToCart(i))}
                          className="buyNow"
                        >
                          Buy now
                        </button>
                      </Link>
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
            <p>cart is empty</p>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Wish