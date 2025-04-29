import React, { useState } from "react";

//Icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
//Styles
import styles from "./Contact.module.css";
//Components
import Newsletter from "../components/Newsletter/Newsletter";
import SectionHeadline from "../components/SectionHeadline/SectionHeadline";

const Contact = () => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your form validation here before setting the modal state
    // For simplicity, let's assume all fields are required
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    } else {
      setModal(true);
    }
  };
  return (
    <div className={styles.contact}>
      <div className={styles.headSection}>
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
      </div>
      <div className={styles.mainSection}>
        <div className={styles.sectionHeadline}>
          <SectionHeadline sectionName="Contact us" />

          <p>Feel free to use a contact form below</p>
        </div>

        <div className={styles.contactDetails}>
          <IconContext.Provider
            value={{
              size: "2rem",
            }}
          >
            <div className={styles.contactDetailsTile}>
              <p
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: "1.5rem",
                }}
              >
                Call us
              </p>
              <BsFillTelephoneFill />{" "}
              <p style={{ marginLeft: "5px" }}>0799 987 9287</p>
            </div>
            <div className={styles.contactDetailsTile}>
              <p
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: "1.5rem",
                }}
              >
                Email us
              </p>
              <MdEmail />{" "}
              <p style={{ marginLeft: "5px" }}>admin@luminova.com</p>
            </div>
            <div className={styles.contactDetailsTile}>
              <p
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: "1.5rem",
                }}
              >
                Visit us
              </p>
              <FaLocationDot />{" "}
              <p style={{ marginLeft: "5px", lineHeight: "22px" }}>
                Imaginary street 21<br></br> E1 6AN<br></br> London
              </p>
            </div>
          </IconContext.Provider>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988661267!2d-0.2664031741739742!3d51.528739805062266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondyn!5e0!3m2!1spl!2suk!4v1690627944786!5m2!1spl!2suk"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
            style={{ border: 0 }}
          ></iframe>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.formTitle}>Contact form</h2>
          {modal === false ? (
            <>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                onChange={handleChange}
                value={formData.name}
              />
              <input type="text" name="surname" placeholder="Surname" />
              <input type="email" placeholder="Email" name="email" required />
              <textarea
                placeholder="Message"
                name="message"
                rows={10}
                required
              />
              <button type="submit">Submit</button>
            </>
          ) : (
            <h2 className={styles.formSuccess}>
              Thank you for contacting us! We'll respond to you shortly.
            </h2>
          )}
        </form>
      </div>
      <Newsletter />
    </div>
  );
};

export default Contact;
