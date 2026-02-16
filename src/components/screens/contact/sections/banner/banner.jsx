import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "./banner.module.scss";

const ContactBanner = () => {
  return (
    <section className={styles.ContactBanner}>
      <CustomContainer>
        <div className={styles.cont}>
          <h1 data-aos="zoom-in">Contact Us</h1>
          <p data-aos="fade-up">
            We&apos;re proud to be working with these incredible companies, and
            thankful for their feedback, suggestions, and support.
          </p>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ContactBanner;
