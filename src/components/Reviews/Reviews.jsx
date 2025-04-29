import React from "react";

//Animations
import { motion } from "framer-motion";
import { fadeIn, slideLeft } from "../../styles/animations";
//Components
import SectionHeadline from "../SectionHeadline/SectionHeadline";
//Styles
import styles from "./Reviews.module.css";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, EffectCoverflow } from "swiper/modules";
//Data
import { reviews } from "../../data/reviews";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

const Reviews = () => {
  const StarRating = ({ starsNumber }) => {
    const renderStar = () => {
      //New Array for stars
      const starsArray = [];
      for (let i = 1; i <= 5; i++) {
        let starClassName = "empty-star";
        if (i <= starsNumber) {
          starClassName = "filled-star";
        } else if (i - 0.5 === starsNumber) {
          starClassName = "half-star";
        }
        starsArray.push(
          <img
            key={i}
            className={styles.starIcon}
            src={`/images/${starClassName}.png`}
            alt={`Star ${i}`}
          />
        );
      }
      return starsArray;
    };
    return <div className="star-rating">{renderStar()}</div>;
  };

  return (
    <div className={styles.reviewsContainer}>
      <SectionHeadline sectionName="Our clients" />
      <motion.img
        className={styles.image}
        src="/images/reviews-header-img.png"
        alt=""
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
      />

      <motion.p
        className={styles.description}
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
      >
        At Luminova Studios, our clients are at the heart of everything we do.
        Their experiences speak louder than words, and we're proud to share
        their stories with you. In this section, discover firsthand accounts of
        the impact our products/services have had on individuals and businesses
        alike.
      </motion.p>

      <Swiper
        className={styles.swiper}
        modules={[A11y, Autoplay, EffectCoverflow]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        centeredSlides={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 40,
          slideShadows: false,
        }}
        grabCursor={true}
        spaceBetween={2}
        slidesPerView={3}
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.reviewCard}>
              <p className={styles.reviewCardText}>{item.text}</p>
              <h2 className={styles.reviewCardName}>{item.name}</h2>
              <div className={styles.starsContainer}>
                <StarRating starsNumber={item.stars} />
                <span style={{ color: "#fff", marginLeft: "5px" }}>
                  ({item.stars})
                </span>
              </div>
              <img
                className={styles.reviewCardAvatar}
                src={item.img}
                alt=""
              ></img>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
