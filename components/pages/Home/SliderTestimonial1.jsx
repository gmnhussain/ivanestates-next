import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";

const SliderTestimonial = () => {
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const prev = useRef(null);
  const next = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const [length, setLength] = useState(0);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);

    // setLength(slider2.current.children.length);

    const prevBtn = prev.current;
    const nextBtn = next.current;

    const handlePrev = () => {
      slider1.current.slickPrev();
      slider2.current.slickPrev();
    };

    const handleNext = () => {
      slider1.current.slickNext();
      slider2.current.slickNext();
    };

    prevBtn.addEventListener("click", handlePrev);
    nextBtn.addEventListener("click", handleNext);

    return () => {
      prevBtn.removeEventListener("click", handlePrev);
      nextBtn.removeEventListener("click", handleNext);
    };
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    adaptiveHeight: true,
    asNavFor: nav2,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    // slidesToShow: slidesNum > 7 ? 7 : slidesNum,
    slidesToScroll: 1,
    asNavFor: nav1,
    focusOnSelect: true,
  };

  return (
    <section id="slider_testimonials">
      <div className="testimonials">
        <div className="container basic_paddings">
          <div className="slider__container">
            <div className="slider__header">Testimonials</div>

            <div className="slider__slider" data-autoplay="true">
              <Slider {...settings} ref={slider1}>
                <div className="slider__item">
                  <blockquote className="slider__item-content">
                    Our experience with Ivan Santacruz was nothing short of
                    excellent from start to finish. His knowledge of real estate
                    and the homes in our area/neighborhood, as well ...
                  </blockquote>
                  <div className="slider__item-author">Jocelyn</div>
                </div>

                <div className="slider__item">
                  <blockquote className="slider__item-content">
                    Ivan was fantastic to work with! He was able to sell our
                    home the first weekend with 11 offers and sold our house for
                    10% more than what we listed it for.
                  </blockquote>
                  <div className="slider__item-author">Monina</div>
                </div>

                <div className="slider__item">
                  <blockquote className="slider__item-content">
                    Ivan was a great resource in helping us sell our house. He
                    was very communicative and spent considerable time helping
                    guide us with many key decisions.
                  </blockquote>
                  <div className="slider__item-author">Faraz</div>
                </div>

                <div className="slider__item">
                  <blockquote className="slider__item-content">
                    Ivan helped us with an investment property recently. He was
                    very responsive and always on top of all the details. He is
                    definitely an expert you can trust.
                  </blockquote>
                  <div className="slider__item-author">June L.</div>
                </div>

                <div className="slider__item">
                  <blockquote className="slider__item-content">
                    Ivan helped us through the whole moving process! He
                    connected us with great contractors and even hooked us up
                    with a great realtor.
                  </blockquote>
                  <div className="slider__item-author">Jeannie F.</div>
                </div>
              </Slider>
            </div>
          </div>

          <div className="testimonials__slider-arrows">
            <button className="slick-arrow slider__prev" ref={prev}>
              &#10229;
            </button>
            <div className="dots-slider">
              <Slider {...settings2} ref={slider2}>
                <span className="dots-slider__item">01</span>
                <span className="dots-slider__item">02</span>
                <span className="dots-slider__item">03</span>
                <span className="dots-slider__item">04</span>
                <span className="dots-slider__item">05</span>
              </Slider>
            </div>
            <button className="slick-arrow slider__next" ref={next}>
              &#10230;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderTestimonial;
