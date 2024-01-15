import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Twirl as Hamburger } from "hamburger-react";
import { Link, useLocation } from "react-router-dom";
import DropDown from "./dropDownMenu/DropDown";

export default function Navbar({}) {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const currentPage = location.pathname;

  useEffect(() => {
    // when the mobile navbar is open prevent the user from scrolling
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      // Cleanup function to reset body overflow when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav>
      <div
        className="nav-container"
        style={
          currentPage !== "/"
            ? { backgroundColor: "var(--purple)" }
            : null
        }
      >
       <Link to={'/'}>
        <img src={logo} alt="" />
       </Link>

        <div className="nav-items" style={{ left: isOpen ? "0" : "100%" }}>
          {/* Navigation items */}
          <ul className="nav-list">
            <Link to='/' >
            <li className="nav-item" onClick={() => setIsOpen(false)}>الرئيسية</li>
            </Link>

            <Link to='/' >
            <li className="nav-item" onClick={() => setIsOpen(false)}>خدماتنا</li>
            </Link>

            <Link to='/' >
            <li className="nav-item" onClick={() => setIsOpen(false)}>كيفية الاستخدام</li>
            </Link>

            <Link to='/' >
            <li className="nav-item" onClick={() => setIsOpen(false)}>تواصل معنا</li>
            </Link>
            <li className="nav-item mobile-button">
              {currentPage === "/" ? 
                <Link to="request-ads">
                <button onClick={() => setIsOpen(false)}>اعلن معنا</button>
              </Link>

              :(
                // if the user is in a mobile view and he is not in the landing page show extra links 
                <>
                <Link to={"/profile"}>
                  <li className="nav-item" onClick={() => setIsOpen(false)}>الملف الشخصي</li>
                </Link>
                <Link to={"/orders"}>
                 <li className="nav-item" onClick={() => setIsOpen(false)}>طلباتي</li>
                </Link>
                <Link to={'#'}>
                  <button >تسجيل الخروج</button>
                </Link>
                </>
                )
              }
          
            </li>
          </ul>
        </div>


        {currentPage !== "/" ? (
          <DropDown />
        ) : (
          <Link to="request-ads">
            <button className="nav-button nav-item">اعلن معنا</button>
          </Link>
        )}

        <div className="burger-menu">
          <Hamburger
            size={28}
            color="#fff"
            toggle={() => setIsOpen(!isOpen)}
            toggled={isOpen}
          />
        </div>
      </div>
    </nav>
  );
}
