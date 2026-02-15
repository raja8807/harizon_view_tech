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
            Global Project Enablement
            <br />& Vendor Consulting
          </h1>
          <p>
            Building Businesses. Delivering Work. Creating Revenue Pipelines.
          </p>
          <div className={styles.bgImg}>
            <Image src="/images/bg_img.png" />
          </div>
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