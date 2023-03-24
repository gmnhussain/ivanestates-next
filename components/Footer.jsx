import Link from "next/link";
import ContactModal from "./ContactModal";

const Footer = () => {
  return (
    <>
      {/* <!-- footer start --> */}
      <footer>
        <div className="footer container">
          <div className="logo wow fadeInUp">
            <Link href="/">
              {" "}
              <img src="img/logo/logo_black.png" alt="brand logo" />{" "}
            </Link>
          </div>

          <div className="footer_details wow fadeInUp">
            <div className="details_item">
              <h6 className="title">Sitemap</h6>
              <ul className="content">
                <li>
                  <Link href="/" className="link no-line">
                    Home
                  </Link>
                </li>
                <li>
                  <a className="link no-line" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="link no-line" href="#">
                    Featured Properties
                  </a>
                </li>
                <li>
                  <a className="link no-line" href="#">
                    Home Valuation
                  </a>
                </li>
                <li>
                  <a className="link no-line contact_us__btn" href="">
                    Let&lsquo;s Connect
                  </a>
                </li>
              </ul>
            </div>

            <div className="details_item address">
              <h6 className="title">Address</h6>
              <div className="content">
                <address>
                  15 Railroad Avenue,
                  <br />
                  Danville, CA 94526
                  <br />
                  <br />
                  <a className="link" href="tel:(925)%20999-5599">
                    (925) 999-5599
                  </a>
                  <br />
                  <a className="link" href="mailto:realty@ivanestates.com">
                    realty@ivanestates.com
                  </a>
                </address>
              </div>
            </div>

            <div className="details_item company">
              <h6 className="title">Company</h6>
              <div className="content">
                <p>
                  Premier Real Estate
                  <br />
                  Agent For East Bay
                  <br />
                  <br />
                  CA DRE# 02055245
                </p>
              </div>
            </div>

            <div className="details_item subscribe">
              <h6 className="title">Want to receive our newsletter?</h6>
              <div className="content">
                <form>
                  <div className="form_group">
                    <div className="label_group">
                      <label htmlFor="s_email">Email</label>
                      <input
                        id="s_email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                      />
                    </div>

                    <button className="submit" type="submit">
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- ./footer details --> */}

          {/* <!-- description --> */}
          <div className="footer_description wow fadeInUp" data-wow-offset="40">
            <p>
              Ivan Santacruz is a real estate salesperson licensed by the state
              of California affiliated with Compass.
              <a
                className="link"
                href="https://www.compass.com/"
                target="_blank"
              >
                Compass
              </a>
              is a real estate broker licensed by the state of California and
              abides by equal housing opportunity laws. All material presented
              herein is intended for informational purposes only. Information is
              compiled from sources deemed reliable but is subject to errors,
              omissions, changes in price, condition, sale, or withdrawal
              without notice. No statement is made as to accuracy of any
              description. All measurements and square footages are approximate.
              This is not intended to solicit property already listed. Nothing
              herein shall be construed as legal, accounting or other
              professional advice outside the realm of real estate brokerage.
            </p>

            <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/d5yz5wvosgcybanvsidw/realtor-eho-logo-07232021-update-dark" />
          </div>
          {/* <!-- /description --> */}

          {/* <!-- footer bar --> */}
          <div className="footer_bar">
            <span className="dev_by">
              Website designed and developed by
              <a
                href="https://luxurypresence.com"
                target="_blank"
                className="link"
              >
                Luxury Presence
              </a>
              .
            </span>

            <div>
              <ul className="socials">
                <li>
                  <a
                    href="https://www.facebook.com/IvanSantacruzHomes/?modal&#x3D;admin_todo_tour"
                    className="socials_link wow fadeInUp"
                    data-wow-delay=".0s"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/ivannsantacruz/"
                    className="socials_link wow fadeInUp"
                    data-wow-delay=".1s"
                    target="_blank"
                  >
                    <svg width="13.4" height="13.4" viewBox="0 0 9 9">
                      <path d="M7.43.911a.658.658 0 100 1.316.658.658 0 000-1.316M4.5 6.33a1.83 1.83 0 110-3.659 1.83 1.83 0 010 3.659m0-4.648a2.818 2.818 0 10-.001 5.637A2.818 2.818 0 004.5 1.682m4.468 5.037c-.024.534-.114.826-.189 1.018-.1.256-.218.439-.41.63a1.697 1.697 0 01-.632.412c-.192.075-.484.165-1.018.19C6.139 8.995 5.966 9 4.5 9c-1.465 0-1.64-.005-2.218-.031-.534-.025-.826-.115-1.019-.19-.256-.1-.439-.218-.63-.411a1.703 1.703 0 01-.412-.631C.146 7.545.057 7.253.032 6.719.006 6.139 0 5.966 0 4.5c0-1.465.006-1.639.032-2.218.025-.535.114-.826.189-1.019.1-.256.22-.439.411-.63C.824.44 1.007.32 1.263.22c.193-.075.485-.164 1.019-.189C2.862.006 3.035 0 4.5 0c1.466 0 1.639.006 2.219.032.534.025.826.114 1.018.189.256.1.439.22.632.411.192.192.31.375.41.631.075.193.165.484.189 1.019.027.58.032.753.032 2.218 0 1.466-.005 1.64-.032 2.219"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ivan-santacruz-386a73166/"
                    className="socials_link wow fadeInUp"
                    data-wow-delay=".2s"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UClWhT6DYCMXTGQNtpqKIILA?view_as&#x3D;subscriber"
                    className="socials_link wow fadeInUp"
                    data-wow-delay=".3s"
                    target="_blank"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.compass.com/agents/ivan-santacruz/"
                    className="socials_link wow fadeInUp"
                    data-wow-delay=".4s"
                    target="_blank"
                  >
                    <svg width="16" height="16" viewBox="0 0 60.14 60">
                      <path d="M29.86 0a30 30 0 00.28 60 30.03 30.03 0 0030-30A30 30 0 0029.86 0zm.28 8a22.03 22.03 0 0122 22 22 22 0 11-22-22zm7.18 9.17l-20 20 5.65 5.66 20-20z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- /footer bar --> */}

          <p className="footer_copyright">
            &copy; Copyright 2022 <span>|</span>
            <a className="link" href="#">
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
      {/* <!-- ----------------  contanct us form  ------------------------> */}
      <ContactModal />
      {/* <!-- /.modal --> */}

      {/* </main> */}
      {/* <!-- main viewport end --> */}
    </>
  );
};

export default Footer;
