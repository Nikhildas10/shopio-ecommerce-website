import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './cart.css'
import { Container } from 'react-bootstrap';
import { CancelOutlined, Close, Delete } from '@mui/icons-material';
import { clearCart, removeCart } from '../redux/cartSlice';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Alert } from '@mui/material';
import { toast } from 'react-toastify';
function Cart() {
  
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () =>
     cartArray.length > 0 ? (
       setShow(true)
     ) : (
toast.warn('🦄 Wow so easy!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
})
      );
    
   const cartArray= useSelector(state=>state.cart)
const dispatch=useDispatch() 
let total=0
if(cartArray.length>0){
  total=Math.floor( cartArray.map(i=>i.price).reduce((a,b)=>a+b))
}

  return (
    <div>
      <Container>
        <div className="mainTab">
          <div className="cartitems-format-main">
            <p className="">itemNo</p>
            <p className="prod">Products</p>
            <p className="prod">Title</p>
            <p className="prod1">Price</p>
            {/* <p>Quantity</p> */}
            {/* <p>Total</p> */}
            <p className="prod2">Remove</p>
          </div>
          <hr />
          {cartArray.length > 0 ? (
            cartArray.map((i, index) => (
              <div className="cartitems-format cartitems-format-main">
                <p>{index + 1}</p>
                <img src={i.image} alt="" />
                <p>{i.title}</p>
                <p>${i.price}</p>
                <p onClick={() => dispatch(removeCart(i.id))}>
                  <Delete className="del"></Delete>
                </p>
              </div>
            ))
          ) : (
            <p>CART IS EMPTY</p>
          )}
          <div className="total">
            <p>Total:${total}</p>
          </div>
          <div style={{ textAlign: "end" }}>
            <button className="buyNow buyy" onClick={handleShow}>
              buy now
            </button>
          </div>
          <Modal show={show} onHide={handleClose}>
            <div class="container1">
              <div class="row m-0">
                <div class="col-12 px-4">
                  <div class="d-flex align-items-end mt-4 mb-2">
                    <p class="h4 m-0">
                      <span class="pe-1">CHECKOUT</span>
                    </p>
                  </div>
                  <div class="d-flex justify-content-between mb-2">
                    <p class="textmuted">Qty</p>
                    <p class="fs-14 fw-bold">{cartArray.length}</p>
                  </div>
                  <div class="d-flex justify-content-between mb-2">
                    <p class="textmuted">Subtotal</p>
                    <p class="fs-14 fw-bold">
                      <span class="fas fa-dollar-sign pe-1"></span>${total}
                    </p>
                  </div>
                  <div class="d-flex justify-content-between mb-2">
                    <p class="textmuted">Shipping</p>
                    <p class="fs-14 fw-bold">$5</p>
                  </div>
                  <div class="d-flex justify-content-between mb-3">
                    <p class="textmuted fw-bold">Total</p>
                    <div class="d-flex align-text-top ">
                      <span class="fas fa-dollar-sign mt-1 pe-1 fs-14 "></span>
                      <span class="h4">${total + 5}</span>
                    </div>
                  </div>
                </div>
                <div class="col-12 px-0">
                  <div class="row bg-light m-0">
                    <div class="col-12 px-4 my-4">
                      <p class="fw-bold">Payment detail</p>
                    </div>
                    <div class="col-12 px-4">
                      <div class="d-flex  mb-4">
                        <span class="">
                          <p class="text-muted">Card number</p>
                          <input
                            class="form-control"
                            type="text"
                            placeholder="**** **** **** ****"
                          />
                        </span>
                        <div class=" w-100 d-flex flex-column align-items-end">
                          <p class="text-muted">Expires</p>
                          <input
                            class="form-control2"
                            type="text"
                            placeholder="MM/YY"
                          />
                        </div>
                      </div>
                      <div class="d-flex mb-5">
                        <span class="me-5">
                          <p class="text-muted">Cardholder name</p>
                          <input
                            class="form-control"
                            type="text"
                            placeholder="Name"
                          />
                        </span>
                        <div class="w-100 d-flex flex-column align-items-end">
                          <p class="text-muted">CVV</p>
                          <input
                            class="form-control3"
                            type="text"
                            placeholder="XXX"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        paddingBottom: "20px",
                      }}
                    >
                      <button className="buyNow" onClick={handleClose}>
                        cancel<Close sx={{ fontSize: "15px" }}></Close>
                      </button>
                      <button
                        className="buyNow"
                        onClick={() => {
                          dispatch(clearCart());
                          handleClose();
                        }}
                      >
                        continue
                      </button>{" "}
                    </div>
                  </div>
                  <div class="row m-0"></div>
                </div>
              </div>
            </div>
          </Modal>{" "}
        </div>
      </Container>
    </div>
  );
}

export default Cart