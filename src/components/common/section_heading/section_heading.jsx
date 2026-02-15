import React from "react";
import styles from "./section_heading.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const SectionHeading = ({ title, head, caption, variant = 1, className }) => {
  return (
    <div className={`${styles.SectionHeading} ${styles[`v${variant}`]} ${className}`}>
      <CustomContainer>
        <div className={styles.wrap}>
          <p className={styles.title}>{title}</p>
          <h2>{head}</h2>
          <p className={styles.caption}>{caption}</p>
        </div>
      </CustomContainer>
    </div>
  );
};

export default SectionHeading;
