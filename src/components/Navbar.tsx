"use client"

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import "@/style/Navbar.css"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar">
      <div className="navbar__brand">
        <h1 className="navbar__title">CLASSIC BAGS</h1>
      </div>
      <div className="navbar__menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes className="icon" />
        ) : (
          <FaBars className="icon" />
        )}
      </div>
      <div className="navbar__links">
        <ul className={`navbar__links-list ${isMenuOpen ? "navbar__links-list--open" : ""}`}>
          <li>
            <Link href="/" className="navbar__link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" className="navbar__link">
              About
            </Link>
          </li>
          <li>
            <Link href="/Shop" className="navbar__link">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/Sale" className="navbar__link">
              Sale
            </Link>
          </li>
        </ul>
        {isMenuOpen && (
          <div className="navbar__add-to-cart-mobile">
            <button className="navbar__add-to-cart-btn">
              <span className="navbar__add-to-cart-text">Add to cart</span>
            </button>
          </div>
        )}
        <div className="navbar__add-to-cart">
          <button className="navbar__add-to-cart-btn">
            <span className="navbar__add-to-cart-text">Add to cart</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
