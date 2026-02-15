import SectionHeading from "@/components/common/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./about.module.scss";
import React from "react";
import { Image } from "react-bootstrap";

const AboutSection = () => {
  return (
    <section className={styles.AboutSection}>
      <CustomContainer>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <div className={styles.top}>
              <h3>ABOUT US</h3>
              <h2>Building Sustainable Outsourcing Success</h2>
              <p>
                For over 17+ years, we have specialized in enabling individuals,
                startups, and companies to enter the global outsourcing
                ecosystem.
                <br />
                We function as a professional consulting bridge between MNC
                clients and execution vendors, transforming infrastructure into
                income-generating operations.
              </p>
            </div>
            <hr />

            <div className={styles.bot}>
              <div>
                <div>
                  <h4>Not just training.</h4>
                  {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
                </div>
                <div>
                  <h4>Not just projects.</h4>
                </div>
              </div>
              <p>We create a complete working business model.</p>
            </div>
          </div>

          <div className={styles.right}></div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default AboutSection;
