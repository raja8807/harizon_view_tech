import SectionHeading from "@/components/common/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "./services.module.scss";
import { Col, Row } from "react-bootstrap";
import { CheckCircle, CheckCircleFill } from "react-bootstrap-icons";

const ServicesSection = () => {
  const services = [
    {
      head: "ODC Infrastructure & Setup",
      points: [
        "Workflow planning",
        "Team structure guidance",
        "Recruitment assistance",
        "Infrastructure setup consultation",
        "Production monitoring guidance",
      ],
    },
    {
      head: "Strategic Project Enablement",
      points: [
        "Live project allocation",
        "Client requirement mapping",
        "Quality standard implementation",
        "Performance improvement strategies",
      ],
    },
    {
      head: "Vendor Management & Stability",
      points: [
        "Billing guidance",
        "Volume management support up to 1 year",
        "Vendor escalation handling",
        "Process documentation assistance",
      ],
    },
  ];

  return (
    <section className={styles.ServicesSection}>
      <SectionHeading
        head={"Our Core Services"}
        caption={
          "We provide end-to-end operational support to setup, scale, and manage high-performance offshore development centers."
        }
      />
      <CustomContainer>
        <div className={styles.wrap}>
          <Row>
            {services.map((ser, index) => (
              <Col key={ser.head} xs={12} md={4} data-aos="fade-up" data-aos-delay={index * 150}>
                <div className={styles.item}>
                  <h4>{ser.head}</h4>

                  <hr />
                  <ul>
                    {ser.points.map((point) => (
                      <li key={point}>
                        <CheckCircleFill />
                        <p>{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ServicesSection;
