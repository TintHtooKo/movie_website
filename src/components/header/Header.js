import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../image/logo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img className="header-icon" src={Logo} />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rating</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
}
