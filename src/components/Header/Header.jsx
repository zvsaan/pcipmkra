import React, { useRef, useState, useEffect } from "react";
import { Container } from "reactstrap";
import "./header.css";
import logo from '../../assests/images/logo.png';

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "Tentang Kami",
    url: "",
    subNav: [
      { display: "Program Kerja", url: "/proker" },
      { display: "Struktur Organisasi", url: "/struktur" },
      { display: "Our Story", url: "/story" },
      {
        display: "Logo Logo",
        url: "",
        subNav: [
          { display: "Logo PC IPM Kra", url: "/logo-pc-ipm-kra" },
          { display: "Logo Musycab#1", url: "/logo-pkttm" },
          { display: "Logo Dahlan Cup", url: "/logo-dahlan-cup" },
          { display: "Logo PKDTM1", url: "/logo-pkdtm1" },
          { display: "Logo Musycab#2", url: "/logo-musycapp" }
        ]
      },
    ],
  },
  {
    display: "Hubungi Kami",
    url: "contact",
  },
];

const Header = () => {
  const menuRef = useRef();
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggle = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setSubmenuOpen(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleHover = (index) => {
    if (window.innerWidth > 991) {
      setSubmenuOpen(index);
    }
  };

  const toggleSubmenu = (index) => {
    if (window.innerWidth <= 991) {
      setSubmenuOpen(submenuOpen === index ? null : index);
    }
  };

  return (
    <header className="header">
      <Container className="custom-container">
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <a href="/"><img src={logo} alt="Logo" /></a>
          </div>

          <div className={`nav d-flex align-items-center gap-5 ${menuOpen ? 'active__menu' : ''}`} ref={menuRef}>
            <div className="nav__menu">
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li
                    key={index}
                    className={`nav__item ${item.subNav ? "has__submenu" : ""}`}
                    onMouseEnter={() => handleHover(index)} // Hover to show submenu
                    onMouseLeave={() => handleHover(null)}  // Hide submenu on leave
                    onClick={() => toggleSubmenu(index)}    // Toggle submenu in mobile
                  >
                    <a href={item.url}>
                      {item.display}
                    </a>
                    {item.subNav && (
                      <ul className={`submenu ${submenuOpen === index ? "show" : ""}`}>
                        {item.subNav.map((subItem, subIndex) => (
                          <li key={subIndex} className={`submenu__item ${subItem.subNav ? "has__submenu" : ""}`}>
                            <a href={subItem.url}>{subItem.display}</a>
                            {subItem.subNav && (
                              <ul className="submenu">
                                {subItem.subNav.map((nestedItem, nestedIndex) => (
                                  <li key={nestedIndex} className="submenu__item">
                                    <a href={nestedItem.url}>{nestedItem.display}</a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                {/* Add a Button next to "Hubungi Kami" */}
                <li>
                  <a href="/voting">
                    <button className="btn">Voting</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;