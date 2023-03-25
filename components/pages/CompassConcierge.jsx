import Banner from "../utils/Banner";

const CompassConcierge = () => {
  return (
    <>
      {/* <div id="bannar" className="section_concierge bannar custom_intro">
        <div className="bannar_container">
          <h1>Compass Concierge</h1>
          <p className="bannar_subtitle">
            Get fronted for the cost of home improvement services with no
            interest — ever.
          </p>
          <a className="btn bannar_scrolldown btn--secondary">
            <i className="fas fa-chevron-down" aria-hidden="true"></i>
          </a>
        </div>
      </div> */}

      <Banner
        title="Compass Concierge"
        subTitle="Get fronted for the cost of home improvement services with no
        interest — ever."
        bgImage="/img/banner/compass.webp"
      />

      <section id="section">
        <div className="section basic_paddings">
          <div className="container">
            <div className="section_content__row reverse">
              <div className="section_content__col">
                <div className="section_content__col__img">
                  <img
                    className="main_image"
                    src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/igbhueky0jn6egrr0ey0/compass-concierge-1"
                    alt="main image"
                  />
                </div>
              </div>

              <div className="section_content__col text">
                <div className="section_content__text_wrap">
                  <p>
                    <img
                      src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/mwuzusvuirrrmztphw3q/concierge"
                      alt=""
                    />
                  </p>
                  <p className="section_content__text1">
                    Get fronted for the cost of home improvement services with
                    no interest &mdash; ever.
                  </p>
                  <p className="section_content__text2">
                    Compass Concierge is the hassle-free way to sell your home
                    faster and for a higher price with services like staging,
                    flooring, painting, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="agent">
        <div className="section basic_paddings">
          <div className="container">
            <div className="section_content__row straight">
              <div className="section_content__col">
                <div className="section_content__col__img">
                  <img
                    src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/vhicjgpohrsvav1uxm6p/screen-shot-2020-01-14-at-14044-pm"
                    alt="main image"
                  />
                </div>
              </div>

              <div className="section_content__col text">
                <div className="section_content__text_wrap">
                  <p className="section_content__text1">
                    Learn how Ivan can help sell your home faster and for a
                    higher price with Concierge.
                  </p>
                  <p className="section_content__text2">Ivan Santacruz</p>

                  <p style={{ fontFamily: "CompassSans" }}>
                    Real Estate Agent
                    <br />
                    <a className="link" href="mailto:realty@ivanestates.com">
                      realty@ivanestates.com
                    </a>
                    <br />
                    M:{" "}
                    <a className="link" href="tel:(925) 999-5599">
                      (925) 999-5599
                    </a>
                  </p>
                  <div className="buttons-wrapper">
                    <a
                      role="button"
                      className="btn btn--primary contact_us__btn"
                    >
                      Work With Ivan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="feature">
        <div className="feature basic_paddings">
          <div className="container">
            <div className="feature_list">
              <div className="feature_list__wrapper">
                <div className="feature_content">
                  <h3>Smart</h3>
                  <p>
                    Your Compass agent will help you determine which services
                    can deliver the greatest return on your investment.
                  </p>
                </div>

                <div className="feature_content">
                  <h3>Fast</h3>
                  <p>
                    The entire process is designed for speed, so that work can
                    begin — and your home can sell — as quickly as possible.
                  </p>
                </div>

                <div className="feature_content">
                  <h3>Transparent</h3>
                  <p>
                    You&apos;ll never have to worry about upfront costs or
                    interest.
                  </p>
                </div>

                <div className="feature_content">
                  <h3>Easy</h3>
                  <p>
                    Your Compass agent will be by your side throughout the
                    process, advising you along the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="success_stories" className="spiral_bg">
        <div className="video">
          <div className="container basic_paddings">
            <div className="content">
              <h2 className="title">Success Stories</h2>
              <p>
                <div id="success_stories__p1">
                  <p>
                    &quot;The thing that was the most daunting for me about
                    selling the home was how would I get it to market, based on
                    being retired and have limited income. And that&apos;s where
                    the Compass Concierge service was absolutely
                    remarkable.&quot;
                    <br />
                    Julia, Seller | Oakland
                    <br />
                  </p>
                </div>
                <div id="success_stories__d_p" className="content_row">
                  <div id="success_stories__days_wrap" className="content_cell">
                    <div id="success_stories__days_n">
                      <p>12</p>
                    </div>
                    <div id="success_stories__days_m">
                      <p>days on market</p>
                    </div>
                  </div>

                  <div
                    id="success_stories__price_wrap"
                    className="content_cell"
                  >
                    <div id="success_stories__price">
                      <p>
                        47%
                        <br />
                      </p>
                    </div>
                    <div id="success_stories__price_text">
                      <p>over ask</p>
                    </div>
                  </div>
                </div>

                <div id="success_stories__footer">
                  <p>
                    Individual results may vary. Testimonials are not intended
                    to guarantee the same or similar results.
                  </p>
                </div>
              </p>
            </div>

            <div className="poster">
              <div className="poster-bgr poster_container">
                <button
                  id="success_stories__play"
                  className="btn-play"
                  data-type="VIDEO"
                  data-src="https://www.youtube.com/embed/4hd018raScA?autoplay&#x3D;1"
                >
                  <span className="visually-hidden">Play video</span>
                  <i className="fas fa-play" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="services basic_paddings">
          <div className="container">
            <div className="services__wrapper">
              <div id="services__outer_row" className="content_row">
                <div id="services__outer_cell" className="content_cell">
                  <div id="services_header">
                    <h2>Covered Services</h2>
                  </div>
                  <div id="services__inner_row" className="content_row">
                    <div id="" className="content_cell">
                      <div id="services__cell1">
                        <ul>
                          <li>Floor repair</li>
                          <li>Carpet cleaning &amp; replacement</li>
                          <li>Staging</li>
                          <li>Deep-cleaning</li>
                          <li>Decluttering</li>
                          <li>Cosmetic renovations</li>
                          <li>Landscaping</li>
                          <li>
                            Interior &amp; exterior painting
                            <br />
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div id="" className="content_cell">
                      <div id="services__cell2">
                        <ul>
                          <li>HVAC</li>
                          <li>Roofing repair</li>
                          <li>Moving &amp; storage</li>
                          <li>Pest control</li>
                          <li>Custom closet work</li>
                          <li>Fencing</li>
                          <li>Electrical work</li>
                          <li>Seller-side inspections &amp; evaluations</li>
                        </ul>
                      </div>
                    </div>

                    <div id="" className="content_cell">
                      <div id="services__cell3">
                        <ul>
                          <li>Kitchen improvements</li>
                          <li>Bathroom improvements</li>
                          <li>Pool &amp; tennis court services</li>
                          <li>Water heating &amp; plumbing repair</li>
                          <li>Sewer lateral inspections &amp; remediation</li>
                          <li>More than 100 other home improvement services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="company_stats">
        <div className="company_stats basic_paddings">
          <div className="container">
            <div className="company_stats__row ">
              <div className="company_stats__col">
                <div className="stat_card">
                  <h3 className="stat_card__value">
                    <span className="counter" data-target="54">
                      0
                    </span>
                    %
                  </h3>
                  <p className="stat_card__title">
                    The percentage of homebuyers willing to pay more for
                    hardwood floors
                  </p>
                </div>
              </div>

              <div className="company_stats__col">
                <div className="stat_card">
                  <h3 className="stat_card__value">
                    $
                    <span className="counter" data-target="400">
                      0
                    </span>
                  </h3>
                  <p className="stat_card__title">
                    The potential return of every $100 you invest in staging
                    your home
                  </p>
                </div>
              </div>

              <div className="company_stats__col">
                <div className="stat_card">
                  <h3 className="stat_card__value">
                    <span className="counter" data-target="53">
                      0
                    </span>
                    %
                  </h3>
                  <p className="stat_card__title">
                    The percentage of sellers&#x27; agents who say staging
                    decreases a property&#x27;s time on market
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how_it_works">
        <div className="section basic_paddings">
          <div className="container">
            <div className="section_content__row straight">
              <div className="section_content__col">
                <div className="section_content__col__img">
                  <img
                    src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/l8hmii52egrpsrqvh4ud/ymoz88kegbznlm28"
                    alt="main image"
                  />
                </div>
              </div>

              <div className="section_content__col text">
                <div className="section_content__text_wrap">
                  <h2>How it Works</h2>
                  <div>
                    <ol>
                      <li>
                        You and your agent work together to decide which
                        services can increase your home&rsquo;s value the most
                        and set an estimated budget for the work.
                      </li>
                      <li>
                        When you&apos;re ready to start, your Compass agent will
                        be by your side as you engage vendors and commission
                        work.
                      </li>
                      <li>
                        Once the transformation is complete, your home will go
                        on the market.
                      </li>
                      <li>
                        You&apos;ll pay for the services when one of the
                        following happens &mdash; your home sells, you terminate
                        your listing agreement with Compass, or 12 months pass
                        from your Concierge start date.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sale_transform" className="spiral_bg">
        <div className="video">
          <div className="container basic_paddings">
            <div className="content">
              <h2 className="title">
                Curious How Compass Concierge Can Transform Your Sale?
              </h2>
              <p>
                <div id="sale_transform__p1">
                  <p>
                    See what a difference this program makes for yourself right
                    here.
                  </p>
                </div>
              </p>
            </div>

            <div className="poster">
              <div className="poster-bgr poster_container">
                <button
                  id="sale_transform__play"
                  className="btn-play"
                  data-type="VIDEO"
                  data-src="https://www.youtube.com/embed/MSXEuRVBlyE?autoplay&#x3D;1"
                >
                  <span className="visually-hidden">Play video</span>
                  <i className="fas fa-play" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="qna">
        <div className="qna basic_paddings">
          <div className="container">
            <div className="qna__wrapper">
              <div id="qna__outer_row" className="content_row">
                <div id="qna__outer_cell" className="content_cell">
                  <div id="qna_header">
                    <h2>​​​​​​​Your Questions, Answered</h2>
                  </div>
                  <div id="qna__inner_row" className="content_row">
                    <div className="content_cell">
                      <div>
                        <h3>
                          Are there any services not covered by the program?
                        </h3>
                      </div>
                      <div>
                        <p>
                          Our goal is for Concierge to help as many clients as
                          possible. The program is intentionally flexible;
                          we&apos;ve developed Concierge to be used with most
                          vendors for your convenience.
                        </p>
                      </div>
                    </div>

                    <div className="content_cell">
                      <div>
                        <h3>When do I have to pay for these services?</h3>
                      </div>
                      <div>
                        <p>
                          You’ll pay once one of the following happens
                          (whichever occurs first): - Your home sells - You
                          terminate your listing agreement with Compass - 12
                          months pass from your Concierge start date.
                        </p>
                      </div>
                    </div>

                    <div className="content_cell">
                      <div>
                        <h3>How can I participate in the program?</h3>
                      </div>
                      <div>
                        <p>
                          Easy! Call your Compass agent today to find out how to
                          participate. Not yet working with one? Use the form to
                          get started.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="qna__footer">
                    <hr id="footer_hr" />
                    <div className="content_row">
                      <div className="content_cell" id="qna__footer_cell">
                        <div>
                          <p id="qna_desclaimer">
                            <i>
                              This inforrmation is provided for informational
                              purposes only and is not a solicitation,
                              recommendation, offer or promise to provide
                              services. Compass is not offering legal, financial
                              or other professional advice. Compass reserves the
                              right to refuse, reject, or cancel the program for
                              any reason at any time without liability. Compass
                              offers no guarantee or warranty of results.
                              Subject to additional terms and conditions.
                            </i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default CompassConcierge;
