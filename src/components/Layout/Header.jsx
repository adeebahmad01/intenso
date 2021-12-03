import React, { useRef, useState } from "react";
import useEventListener from "../../hooks/useEventListener";

const Header = () => {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  useEventListener("scroll", () => {
    if (window.scrollY > 40) {
      ref.current.classList.add("sticky");
    } else {
      ref.current.classList.remove("sticky");
    }
  });
  return (
    <header ref={ref}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2 col-sm-4 col-4 text-left">
            {/*logo start*/}
            <div className="logo">
              <a href="index.html">
                <img src="img/logo.png" alt />
              </a>
            </div>
            {/*logo end*/}
          </div>
          <div className="col-md-10 col-8 d-flex align-items-center justify-content-between">
            {/*menu start*/}
            <ul id="menu" className={open ? "open" : ""}>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link menu_link">
                  How’s work
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link menu_link">
                  Track my order
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link menu_link">
                  About us
                </a>
              </li>
            </ul>
            {/*menu end*/}
            <div className="d-flex align-items-center custom-btn-none">
              <a href="#" className="make-btn">
                Log in
              </a>
              <a href="#" className="make-btn create-btn">
                Create Account
              </a>
            </div>
            <div onClick={() => setOpen(!open)} className="hamburger-menu">
              <span className={`line-top${open ? " current" : ""}`} />
              <span className={`line-center${open ? " current" : ""}`} />
              <span className={`line-bottom${open ? " current" : ""}`} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
