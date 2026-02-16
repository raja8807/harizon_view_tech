import React from "react";
import styles from "./contactForm.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";
import CustomButton from "@/components/ui/custom_button/custom_button";
import CustomTextArea from "@/components/ui/custom_textarea/custom_textarea";
import { EnvelopeAtFill, GeoAltFill } from "react-bootstrap-icons";
import { CONATCT_DETAILS } from "@/constants/constants";
import Link from "next/link";

const ContactFormSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.ContactFormSection}>
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.left}>
            <div className={styles.head}>
              <h4 data-aos="fade-right">GET IN TOUCH</h4>
              <h2 data-aos="fade-right" data-aos-delay="200">
                Speak with our ODC Strategy Experts
              </h2>
              <p data-aos="fade-right" data-aos-delay="400">
                Our experts are ready to guide you through MNC project enablement, vendor selection, and establishing your dedicated offshore teams.
              </p>
            </div>

            <hr />

            <div
              className={styles.contact}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h3>Reach Us</h3>
              <p>
                <GeoAltFill /> {CONATCT_DETAILS.address}
              </p>
              <p>
                <EnvelopeAtFill />{" "}
                <Link href={`mailto:${CONATCT_DETAILS.email}`}>
                  {CONATCT_DETAILS.email}
                </Link>
              </p>
            </div>
          </div>

          <div className={styles.right}>
            <form onSubmit={handleSubmit} data-aos="fade-left">
              <h2>Request a Consultation</h2>
              <CustomInput placeHolder={"Your Name"} />
              <CustomInput placeHolder={"Your Email"} />
              <CustomInput placeHolder={"Your Phone Number"} />
              <CustomTextArea placeHolder={"Your Text"} />
              <br />
              <CustomButton type="submit" />
            </form>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ContactFormSection;
