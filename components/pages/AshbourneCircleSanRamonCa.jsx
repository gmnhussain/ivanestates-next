const PageContent = () => {
  return (
    <>
      {/* <!-- property big image section --> */}
      <section className="property">
        <div className="big_img">
          <img
            src="https://res.cloudinary.com/luxuryp/image/upload/f_auto,q_auto/HX5KGXNSAz29GcHb"
            alt="3515 Ashbourne Cir photo"
          />
          <button className="scroll btn--secondary fas fa-chevron-down"></button>
        </div>
      </section>

      <section id="" className="house">
        <div className="container">
          <div className="row">
            <div className="col photo">
              <img
                src="https://res.cloudinary.com/luxuryp/image/upload/w_1280,c_limit,f_auto,q_auto/HX5KGXNSAz29GcHb"
                srcset="
						https://res.cloudinary.com/luxuryp/image/upload/w_960,c_limit,f_auto,q_auto/HX5KGXNSAz29GcHb   960w,
						https://res.cloudinary.com/luxuryp/image/upload/w_1280,c_limit,f_auto,q_auto/HX5KGXNSAz29GcHb 1280w,
						https://res.cloudinary.com/luxuryp/image/upload/f_auto,q_auto/HX5KGXNSAz29GcHb                1920w
					"
                className="property_photo"
              />
            </div>

            <div className="col">
              <div className="text_block">
                <div className="agent_container">
                  <div className="agent">
                    <div className="agent_img"></div>
                    <span className="agent_name"> Ivan Santacruz </span>
                  </div>
                </div>

                <div className="title">
                  <h2>3515 Ashbourne Cir</h2>
                  <div className="info">
                    $1,998,000 &nbsp;|&nbsp; 3515 Ashbourne Circle, San Ramon,
                    CA 94583
                  </div>
                </div>

                <div className="description">
                  <p>Sold prior to MLS - for complementary purposes.</p>
                </div>

                <div className="request_info">
                  <a role="button" className="btn btn--primary contact_us__btn">
                    Request Info
                  </a>
                </div>

                <div className="share">
                  <span>Share:</span>
                  <ul className="socials">
                    <li>
                      <a
                        href="https://www.facebook.com/sharer/sharer.php?u=https://ivanestates.com/properties/3515-ashbourne-circle-san-ramon-ca-94583-us&quote="
                        className="socials_link"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/intent/tweet?url=https://ivanestates.com/properties/3515-ashbourne-circle-san-ramon-ca-94583-us"
                        className="socials_link"
                        target="_blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:?subject=3515 Ashbourne Cir&body=3515 Ashbourne Cir - https://ivanestates.com/properties/3515-ashbourne-circle-san-ramon-ca-94583-us"
                        className="socials_link"
                      >
                        <i className="fas fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <ul className="features_list">
            <li className="feature">
              <div className="feature_value serif">Sold</div>
              <div className="feature_title">Status</div>
            </li>
            <li className="feature">
              <div className="feature_value serif">5</div>
              <div className="feature_title">Bedrooms</div>
            </li>
            <li className="feature">
              <div className="feature_value serif">5</div>
              <div className="feature_title">Bathrooms</div>
            </li>
            <li className="feature">
              <div className="feature_value serif">2004</div>
              <div className="feature_title">Year Built</div>
            </li>
            <li className="feature">
              <div className="feature_value serif">4,524 Sq.Ft.</div>
              <div className="feature_title">Living Area</div>
            </li>
          </ul>
        </div>
      </section>

      <section id="section__features_amenities">
        <div className="features_amenities">
          <div className="container">
            <h2>Features & Amenities</h2>
            <div className="features_amenities__container">
              <div className="feature">
                <h3 className="features_amenities__title">Area & Lot</h3>
                <ul className="features_amenities__list">
                  <li>
                    <strong>Status:</strong> Sold
                  </li>
                  <li>
                    <strong>Living Space:</strong> 4,524 Sq.Ft.
                  </li>
                  <li>
                    <strong>Lot Size:</strong> 0.33 Sq.Ft.
                  </li>
                  <li>
                    <strong>Type:</strong> RESIDENTIAL
                  </li>
                  <li>
                    <strong>Year Built:</strong> 2004
                  </li>
                </ul>
              </div>

              <div className="feature">
                <h3 className="features_amenities__title">Interior</h3>
                <ul className="features_amenities__list">
                  <li>
                    <strong>Total Bedrooms:</strong> 5
                  </li>
                  <li>
                    <strong>Total Bathrooms:</strong> 5
                  </li>
                  <li>
                    <strong>Full Bathrooms:</strong> 5
                  </li>
                </ul>
              </div>

              <div className="feature">
                <h3 className="features_amenities__title">
                  Exterior & Building
                </h3>
                <ul className="features_amenities__list">
                  <li>
                    <strong>Garage Space:</strong> 3
                  </li>
                </ul>
              </div>

              <div className="feature">
                <h3 className="features_amenities__title">Financial</h3>
                <ul className="features_amenities__list">
                  <li>
                    <strong>Sales Price:</strong> $1,998,000
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- map section --> */}
      <section id="ashbourne-circle-san-ramon-ca">
        <div className="property-map js-property-map">
          <div className="container">
            <h2>3515 Ashbourne Cir</h2>
          </div>
          {/* <!-- google maps --> */}
          <div className="property-map__wrap">
            <div
              className="property-map__canvas map-container"
              data-lat="37.7516245"
              data-lng="-121.9897427"
            ></div>
          </div>
        </div>
      </section>

      <section className="image_section">
        <div className="work_with_us">
          <div className="work_with_us__content">
            <h2>Work With Ivan</h2>
            <p className="text_content">
              What Ivan most likes about selling real estate is helping others
              achieve homeownership, as he has a passion for helping others.
            </p>
            <a role="button" className="btn btn--secondary contact_us__btn">
              Let&#x27;s Connect
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageContent;
