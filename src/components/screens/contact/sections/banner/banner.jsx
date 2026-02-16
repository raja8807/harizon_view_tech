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
            Partner with HarizonViewTech to scale your engineering capabilities. Let&apos;s build your strategic roadmap today.
          </p>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ContactBanner;
