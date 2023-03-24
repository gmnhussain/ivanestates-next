import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Header = () => {
  const headerRef = useRef(null);
  const preloaderRef = useRef(null);

  useEffect(() => {
    preloaderRef.current.style.top = "-100%";
    setTimeout(
      () => (preloaderRef.current.style.transform = "scaleY(0)"),
      1000
    );
  }, []);

  // preloader
  // window.onload = (event) => {
  //   preloader.style.top = "-100%";
  //   setTimeout(() => (preloader.style.transform = "scaleY(0)"), 1000);
  // };

  // header effect on scroll
  const [prevScrollTop, setPrevScrollTop] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const header = headerRef.current;
    const handleHeaderScroll = (e) => {
      setScrollTop(window.pageYOffset);

      if (scrollTop > 0) {
        header.classList.add("scroll");
      }

      // scroll up and down effect
      if (scrollTop > 103) {
        if (scrollTop > prevScrollTop) {
          header.classList.add("scroll_down");
          header.classList.remove("scroll_up");
        } else {
          header.classList.add("scroll_up");
          header.classList.remove("scroll_down");
        }
        setPrevScrollTop(scrollTop);
      }

      if (scrollTop <= 0) {
        header.classList.remove("scroll");
        header.classList.remove("scroll_down");
        header.classList.remove("scroll_up");
      }
    };
    window.addEventListener("scroll", handleHeaderScroll);

    return () => window.removeEventListener("scroll", handleHeaderScroll);
  }, [scrollTop]);

  // menu
  const sidemenuRef = useRef(null);

  const openSideMenu = () => {
    sidemenuRef.current.classList.add("show");
  };

  const closeSideMenu = () => {
    sidemenuRef.current.classList.remove("show");
  };

  const handleMenuOpen = (e) => {
    e.preventDefault();
    openSideMenu();
  };

  const handleMenuClose = (e) => {
    e.preventDefault();
    closeSideMenu();
  };

  const handleContactModal = (e) => {
    e.preventDefault();
    document.querySelector("#modal_contact_us").classList.add("visible");
    document.body.classList.add("locked");
    // $("#modal_contact_us").addClass("visible");
    // $("body").addClass("locked");
  };

  return (
    <>
      {/* <!-- preloader --> */}
      <div
        id="preloader" //
        className="preloader"
        ref={preloaderRef}
      >
        <img
          className="preloader_img"
          src="img/preloader/preloader.png"
          alt="preloader"
        />
      </div>
      {/* <!---------------- header start ------------> */}
      <nav id="navbar">
        <div className="header" ref={headerRef}>
          <div className="container">
            <div className="header_left">
              {/* <!-- hamburger button --> */}
              <div
                id="hamburger"
                className="hamburger"
                onClick={(e) => handleMenuOpen(e)}
              >
                <div></div>
                <a href="" className="link">
                  Menu
                </a>
              </div>
              <div className="nav nav_hide">
                <ul>
                  <li className="nav_item">
                    <a className="link" href="#">
                      Featured Properties
                    </a>
                  </li>
                  <li className="nav_item">
                    <a className="link" href="#">
                      Home Valuation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- /.header_left --> */}

            <div className="header_logo">
              <Link href="/">
                <img src="img/logo/logo.png" alt="Brnad logo" />
              </Link>
            </div>
            {/* <!-- /.header logo --> */}

            <div className="header_right">
              <ul>
                <li
                  className="nav_item nav_hide contact_us__btn"
                  onClick={(e) => handleContactModal(e)}
                >
                  <a href="#" className="link">
                    Let&apos;s Connect
                  </a>
                </li>
                <li className="nav_item tel_item">
                  <a href="tel:(925) 999-5599" className="link tel">
                    (925) 999-5599
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- /.header_right --> */}
          </div>
        </div>
      </nav>

      {/* <!-- Side menu --> */}
      <div id="sidemenu" ref={sidemenuRef}>
        <div className="container sidemenu_close">
          <button
            className="sidemenu_close_btn toggle"
            onClick={(e) => handleMenuClose(e)}
          >
            <span></span>
          </button>
        </div>

        <div className="container sidemenu_main">
          <ul>
            <li>
              <Link href="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <a href="#" className="link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Featured Properties
              </a>
            </li>
            <li>
              <Link href="/sold2" className="link">
                Past Transactions (2)
              </Link>
            </li>
            <li>
              <Link href="/sold3" className="link">
                Past Transactions (3)
              </Link>
            </li>
            <li>
              <a href="#" className="link">
                Home Valuation
              </a>
            </li>
            <li>
              <Link href="/compass-concierge" className="link">
                Compass Concierge
              </Link>
            </li>
            <li>
              <a href="#" className="link">
                Compass Private Exclusives
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Testimonials
              </a>
            </li>
            <li
              className="contact_us__btn"
              onClick={(e) => handleContactModal(e)}
            >
              <a className="link">Let&apos;s Connect</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- mobile contact --> */}
      <div className="floating_contact">
        <div className="wrapper">
          <a className="item" href="mailto:realty@ivanestates.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="18"
              fill="none"
              viewBox="0 0 26 18"
            >
              <path
                fillRule="evenodd"
                d="M1.273 18l7.734-7.735c.395.352.838.647 1.32.87.592.275 1.233.44 1.885.488.779.055 1.567-.059 2.297-.334.62-.235 1.189-.584 1.684-1.023L23.927 18H1.273zm6.454-9L0 16.727V1.273L7.727 9zM25.2 1.3v15.427l-7.71-7.71c2.603-2.54 5.154-5.13 7.71-7.717zM23.927 0l-8.78 8.78c-.343.339-.744.61-1.192.792-.903.367-1.942.349-2.831-.05-.37-.167-.707-.398-1.003-.675l-.403-.389c-.01-.014-.021-.029-.034-.042-.049-.058-.104-.109-.166-.152-2.8-2.714-5.54-5.49-8.28-8.264h22.69z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a className="item" href="tel:(925) 999-5599">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="none"
              viewBox="0 0 25 25"
            >
              <path d="M24.1 18.172l-5.109-2.635c-.71-.369-1.606-.185-2.106.448l-1.87 2.397c-1.817-.974-3.213-1.923-4.82-3.53-1.71-1.713-2.633-3.136-3.58-4.9l2.37-1.845c.631-.5.842-1.397.447-2.108L6.8.914C6.325.018 5.192-.272 4.376.28l-3.24 2.16C.374 2.944-.047 3.813.005 4.709.057 5.63.19 6.789.4 7.606c.948 3.636 3.213 7.404 6.4 10.592 3.186 3.188 6.952 5.454 10.586 6.403.816.21 1.975.316 2.923.395.922.053 1.79-.395 2.291-1.16l2.107-3.293c.58-.817.263-1.923-.606-2.371z" />
            </svg>
          </a>
        </div>
      </div>
      {/* <!---------------- header end ------------> */}
    </>
  );
};

export default Header;
