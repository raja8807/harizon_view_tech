import React from "react";
import styles from "./banner.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";

const BannerSection = () => {
  return (
    <div className={styles.BannerSection}>
      <CustomContainer>
        <div className={styles.cont}>
          <h1 data-aos="fade-up">
            MNC Project Enablement
            <br />& Strategic IT Outsourcing
          </h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Building Scalable ODCs. Delivering Enterprise Excellence. Creating Revenue Pipelines.
          </p>
          {/* <div className={styles.bgImg} data-aos="zoom-in" data-aos-delay="400">
            <Image src="/images/bg_img.png" />
          </div> */}
        </div>
      </CustomContainer>
    </div>
  );
};

export default BannerSection;


//  <CustomContainer>
//         <div className={styles.cont}>
//           <h1>
//             Horizon View Tech
//           </h1>
//           <p>
//             MNC Project Enablement & Vendor Consulting
//           </p>
//           {/* <div className={styles.bgImg}>
//             <Image src="/images/bg_img.png" />
//           </div> */}
//         </div>
//       </CustomContainer>