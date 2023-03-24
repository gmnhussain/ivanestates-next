import SliderTestimonial1 from "./SliderTestimonial1";
import SliderTestimonial2 from "./SliderTestimonial2";

const Home = () => {
  return (
    <>
      {/* <!-- intro video --> */}
      <section id="homepage_intro">
        <div className="video">
          <video
            loop
            muted
            autoPlay
            poster="https://res.cloudinary.com/luxuryp/videos/f_auto,q_auto,so_0,eo_0/pxacwpzk2mlf7x7jq9qp/gmum054m1eu4g8i0h47l9trqq.jpg"
            playsInline
          >
            <source
              src="https://res.cloudinary.com/luxuryp/videos/f_auto,q_auto/pxacwpzk2mlf7x7jq9qp/gmum054m1eu4g8i0h47l9trqq.webm"
              type="video/webm"
            />
            <source
              src="https://res.cloudinary.com/luxuryp/videos/f_auto,q_auto/pxacwpzk2mlf7x7jq9qp/gmum054m1eu4g8i0h47l9trqq.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div
          className="poster"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/bc3n5fdqhzll3iecwmxk/rtvyyzfovhj9epmj')",
          }}
        ></div>

        <div className="shade"></div>

        <div className="home_heading">
          <div className="home_heading_inner">
            <div className="container home_heading__container">
              <p className="home_heading__title1">
                <span>Your East Bay Realtor</span>
              </p>
              <h1 className="home_heading__lgtitle">Ivan Santacruz</h1>
              <p className="home_heading__title3">CA DRE# 02055245</p>
              <a role="button" className="btn btn--secondary contact_us__btn">
                Let&#x27;s Connect
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="section vertical_paddings">
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
                  <h2 className="about_h2">About Ivan Santacruz</h2>
                  <div className="about_text">
                    <p>
                      Ambitious. Innovative. Experienced. These are just three
                      words clients frequently use to describe Ivan Santacruz. A
                      Bay Area native, Ivan has extensive firsthand knowledge of
                      the region, making him the perfect asset and advocate for
                      those looking to move there.&nbsp;
                    </p>
                    <p>
                      Specializing in the Tri-Valley East Bay, Ivan has been
                      making his mark on this sought-after area. His vast
                      experience in the sales field&mdash;not to mention his
                      go-getter attitude and perseverance&mdash;sets him apart,
                      helping his clients reach their real estate goals in this
                      competitive market.
                    </p>
                  </div>
                  <div>
                    <a href="" role="button" className="btn btn--primary">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /.row--> */}
          </div>
          {/* <!-- /.container--> */}
        </div>
        {/* <!-- /.section--> */}
      </section>

      {/* <!--  slider testimonial 1  --> */}
      <SliderTestimonial1 />

      {/* <!--  slider testimonial 2  --> */}
      <SliderTestimonial2 />

      {/* <!------------------------------ video content ----------------------------> */}
      <section id="video_testimonial1" className="spiral_bg video_testimonial">
        <div className="video">
          <div className="container basic_paddings">
            <div className="content">
              <h2 className="title">COVID-19 Client Testimonial</h2>
              <p>
                <div>
                  <p>
                    3 days 5 offers, $21,000 over asking. Saved my clients
                    $10,000 mandatory repairs in the heart of COVID-19!
                  </p>
                  <p>
                    <br />
                  </p>
                </div>
              </p>

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
                    <svg width="14.5" height="14.5" viewBox="0 0 9 9">
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
                    <i className="fab fa-linkedin"></i>
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
                    <svg width="20" height="20" viewBox="0 0 60.14 60">
                      <path d="M29.86 0a30 30 0 00.28 60 30.03 30.03 0 0030-30A30 30 0 0029.86 0zm.28 8a22.03 22.03 0 0122 22 22 22 0 11-22-22zm7.18 9.17l-20 20 5.65 5.66 20-20z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="poster">
              <div className="poster_container">
                <button
                  className="btn-play"
                  data-type="VIDEO"
                  data-src="https://www.youtube.com/embed/qtXEhGsRzKQ?autoplay&#x3D;1"
                >
                  <i className="fas fa-play" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="video_testimonial2" className="spiral_bg video_testimonial">
        <div className="video">
          <div className="container basic_paddings reverse">
            <div className="content">
              <h2 className="title">
                From 0 Offers In 3 Months To 11 Offers In 3 Days
              </h2>
              <p>
                <div>
                  <p>
                    This listing sat on the market for over seventy days with
                    zero offers with another agent. I was able to sell the
                    property with 11 offers $80,000 over asking price within the
                    first weekend.
                  </p>
                </div>
              </p>

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
                    <svg width="14.5" height="14.5" viewBox="0 0 9 9">
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
                    <i className="fab fa-linkedin"></i>
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
                    <svg width="20" height="20" viewBox="0 0 60.14 60">
                      <path d="M29.86 0a30 30 0 00.28 60 30.03 30.03 0 0030-30A30 30 0 0029.86 0zm.28 8a22.03 22.03 0 0122 22 22 22 0 11-22-22zm7.18 9.17l-20 20 5.65 5.66 20-20z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="poster">
              <div className="poster_container">
                <button
                  className="btn-play"
                  data-type="VIDEO"
                  data-src="https://www.youtube.com/embed/6azNJclO1KI?autoplay&#x3D;1"
                >
                  <i className="fas fa-play" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="video_testimonial3" className="spiral_bg video_testimonial">
        <div className="video">
          <div className="container basic_paddings">
            <div className="content">
              <h2 className="title">
                First Time Selling In The Bay Area Testimonial
              </h2>
              <p>
                <div>
                  <p>Who you work with matters in a shifting market.</p>
                </div>
              </p>

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
                    <svg width="14.5" height="14.5" viewBox="0 0 9 9">
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
                    <i className="fab fa-linkedin"></i>
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
                    <svg width="20" height="20" viewBox="0 0 60.14 60">
                      <path d="M29.86 0a30 30 0 00.28 60 30.03 30.03 0 0030-30A30 30 0 0029.86 0zm.28 8a22.03 22.03 0 0122 22 22 22 0 11-22-22zm7.18 9.17l-20 20 5.65 5.66 20-20z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="poster">
              <div className="poster_container">
                <button
                  className="btn-play"
                  data-type="VIDEO"
                  data-src="https://www.youtube.com/embed/KqrCi28A8gQ?autoplay&#x3D;1"
                >
                  <i className="fas fa-play" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ------------------------ work with us ---------------------- --> */}
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

export default Home;
