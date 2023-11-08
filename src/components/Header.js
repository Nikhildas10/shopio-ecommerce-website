import React from 'react'

import './header.css'
import { Container } from 'react-bootstrap';
import { Favorite, FavoriteBorderOutlined, LocalMall, LocalMallOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../redux/productSlice';
function Header() {
  const cartArray = useSelector((state) => state.cart);
const wishArray = useSelector((state) => state.wish);
const dispatch=useDispatch()
  return (
    <Container>
      <div className="mainHead">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <div className="logo">
            <img
              src="https://i.postimg.cc/j5smMRwL/img1-removebg-preview.png"
              alt=""
            />
            <h2>hopio</h2>
          </div>
        </Link>
        <div class="inputBox_container mt-2 hide">
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

        <div className="mainHead">
          <Link to={"/wish"}>
            <Badge
              defaultValue={0}
              badgeContent={wishArray.length}
              color="error"
            >
              <FavoriteBorderOutlined
                sx={{ color: "black" }}
                className="ms-5"
              ></FavoriteBorderOutlined>
            </Badge>
          </Link>
          <Link to={"/cart"} style={{ textDecoration: "none" }}>
            <Badge
              defaultValue={0}
              badgeContent={cartArray.length}
              color="error"
            >
              <LocalMallOutlined
                sx={{ color: "black" }}
                className=" ms-3"
              ></LocalMallOutlined>
            </Badge>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Header