import React, { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div
          className="container-fluid"
          id="navbarSupportedContent"
          style={{
            maxWidth: "1500px",
          }}
        >
          <a
            href="#"
            className="navbar-brand navbar-brand-custom"
            onClick={(e) => e.preventDefault()}
          >
            <img src="./img/logo.png" alt="" />
          </a>

          <div className="collapse navbar-collapse d-none d-lg-flex flex-grow-1">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Wholesale
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Affiliate
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Shipping
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Deutsch
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  UK
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  OMI Blogs
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>

            {/* Right Section - Desktop */}
            <div className="d-flex align-items-center gap-3" id="right-section">
              <div className="search-container">
                <span className="search-icon" onClick={handleSearch}>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="user-section">
                <a
                  href="#"
                  className="user-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="user-icon">
                    <i class="fa-regular fa-user"></i>
                  </span>
                  <span>My Account</span>
                </a>
                <a
                  href="#"
                  className="user-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="cart-icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </span>
                  <span>0 Item</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Bootstrap Offcanvas */}
          <div
            className="offcanvas offcanvas-end offcanvas-custom d-lg-none"
            tabIndex="-1"
            id="offcanvasNavbar"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>
            <div className="offcanvas-body">
              {/* Mobile Navigation Links */}
              <nav className="nav flex-column">
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Wholesale
                </a>
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Affiliate
                </a>
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Shipping
                </a>
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Deutsch
                </a>
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  UK
                </a>
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  OMI Blogs
                </a>
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Terms & Conditions
                </a>
              </nav>

              {/* Mobile Search */}
              <div className="mobile-search">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Mobile User Section */}
              <div className="mobile-user-section">
                <a
                  href="#"
                  className="user-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="user-icon">
                    <i class="fa-regular fa-user"></i>
                  </span>
                  <span>My Account</span>
                </a>
                <a
                  href="#"
                  className="user-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="cart-icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </span>
                  <span>0 Item</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
