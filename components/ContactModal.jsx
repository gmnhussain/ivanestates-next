const ContactModal = () => {
  const handleContactModal = (e) => {
    e.preventDefault();
    document.querySelector("#modal_contact_us").classList.remove("visible");
    document.body.classList.remove("locked");
  };

  return (
    <div id="modal_contact_us" className="modal">
      <div className="modal-content">
        <button
          className="close contact_us__close"
          onClick={(e) => handleContactModal(e)}
        ></button>

        <div className="container contact_us__container">
          <div className="first_container">
            <div
              className="contact_us__map map-container"
              data-lat="37.8236107"
              data-lng="-122.0044777"
            ></div>
          </div>

          <div className="second_container">
            <h2 className="mob">Get in Touch</h2>
            <ul className="agent">
              <li>
                <p className="feature">Compass</p>
                <div className="contact_us__address">
                  <p>
                    15 Railroad Avenue,
                    <br />
                    Danville, CA 94526
                    <br />
                    CA DRE# 02055245
                  </p>
                </div>
              </li>

              <li>
                <p className="feature">Ivan Santacruz</p>
                <p>
                  <a className="link" href="tel:(925) 999-55999">
                    (925) 999-5599
                  </a>
                </p>
                <p>
                  <a className="link" href="mailto:realty@ivanestates.com">
                    realty@ivanestates.com
                  </a>
                </p>
              </li>
            </ul>

            <div>
              <h2 className="desk">Get in Touch</h2>
              <form>
                <div className="form_group">
                  <div className="label_group">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Name"
                      value=""
                      name="name"
                      required
                    />
                  </div>
                </div>
                <div className="form_group">
                  <div className="label_group">
                    <label htmlFor="contact_email">Email</label>
                    <input
                      id="contact_email"
                      type="email"
                      placeholder="Email"
                      name="email"
                      required
                    />
                  </div>
                </div>

                <div className="form_group">
                  <div className="label_group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Phone"
                      value=""
                      name="phone"
                      required
                    />
                  </div>
                </div>

                <div className="form_group">
                  <div className="label_group textarea">
                    <label htmlFor="msg">Message</label>
                    <textarea
                      id="msg"
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="submit">
                  <button type="submit" className="btn btn--primary">
                    Contact
                  </button>
                  <ul className="socials">
                    <li>
                      <a
                        href="https://www.facebook.com/IvanSantacruzHomes/?modal&#x3D;admin_todo_tour"
                        className="socials_link"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/ivannsantacruz/"
                        className="socials_link"
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
                        className="socials_link"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UClWhT6DYCMXTGQNtpqKIILA?view_as&#x3D;subscriber"
                        className="socials_link"
                        target="_blank"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.compass.com/agents/ivan-santacruz/"
                        className="socials_link"
                        target="_blank"
                      >
                        <svg width="16" height="16" viewBox="0 0 60.14 60">
                          <path d="M29.86 0a30 30 0 00.28 60 30.03 30.03 0 0030-30A30 30 0 0029.86 0zm.28 8a22.03 22.03 0 0122 22 22 22 0 11-22-22zm7.18 9.17l-20 20 5.65 5.66 20-20z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.modal-content --> */}
    </div>
  );
};

export default ContactModal;
