import React from "react";
import styles from "./banner.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";

const BannerSection = () => {
  return (
    <div className={styles.BannerSection}>
      <CustomContainer>
        <div className={styles.cont}>
          <h1>
            Landing Page
            <br />
            Webflow Template
          </h1>
          <p>5 Landing Pages. 16 Inner Pages.</p>
          <div className={styles.bgImg}>
            <Image src="/images/bg_img.png" />
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default BannerSection;
