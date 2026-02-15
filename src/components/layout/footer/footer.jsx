import React from "react";
import styles from "./footer.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Row } from "react-bootstrap";
import SocialMedia from "@/components/common/social_media/social_media";
import Link from "next/link";
import {
  EnvelopeAtFill,
  GeoAltFill,
  TelephoneFill,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <CustomContainer>
        <div className={styles.top}>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <div className={`${styles.footerSection} ${styles.brand}`}>
                <h3>Logo</h3>
                <br />
                <SocialMedia />
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className={`${styles.footerSection} ${styles.link}`}>
                <Link href={"/"}>HOME</Link>
                <Link href={"/"}>CONTACT US</Link>
              </div>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <div className={`${styles.footerSection} ${styles.contact}`}>
                <div>
                  <GeoAltFill /> Patel Road, Perambur, Chennai 11
                </div>
                <div>
                  <TelephoneFill /> 9500023724 / 9710649567
                </div>
                <div>
                  <EnvelopeAtFill /> admin@Horizonviewtech.in
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.bot}>
          <p>© Nexus7. All Rights Reserved. Licensing</p>
        </div>
      </CustomContainer>
    </footer>
  );
};

export default Footer;
