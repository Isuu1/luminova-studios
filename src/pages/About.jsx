import React from "react";

//Components
import Faq from "../components/FAQ/FAQ";
//Data
import { people } from "../data/about.js";
//Styles
import styles from "./About.module.css";
import SectionHeadline from "../components/SectionHeadline/SectionHeadline.jsx";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.header}>
        <div className={styles.shapeDivider}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className={styles.shapeDividerFill}
            ></path>
          </svg>
        </div>
        {/* <div className="about-container__head-section__shadow"></div> */}
      </div>

      <div className={styles.mainSection}>
        <SectionHeadline sectionName="About" />
        <div className={styles.text}>
          <p>
            "Fueling adrenaline with innovative games, Luminova Studios
            transforms playtime into a thrilling adventure."
          </p>
        </div>
        <div className={styles.companyImage} id="header-img">
          <div className={styles.shape}></div>
          <img src="/images/company.png" alt="" />
        </div>
        <img className={styles.bgImage} src="/images/gaming-bg.png" alt="" />

        <div className={styles.team}>
          <h2 className={styles.teamTitle}>Our team</h2>
          {people.map((item) => (
            <div className={styles.teamMember} key={item.id}>
              <div className={styles.teamMemberAvatar}>
                <img src="/images/avatar.png" alt="" />
                <div className={styles.teamMemberDescription}>
                  {item.description}
                </div>
              </div>

              <div className={styles.teamMemberCredentials}>
                <h2>{item.title}</h2>
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
        <Faq />
      </div>
    </div>
  );
};

export default About;
