import React from "react";
import styles from "./experience.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Row } from "react-bootstrap";
import { PeopleFill, BriefcaseFill, GeoAltFill, FileEarmarkCheckFill } from "react-bootstrap-icons";

const ExperienceScale = () => {
    const stats = [
        {
            count: "150+",
            label: "Vendors Successfully Consulted",
            icon: <PeopleFill />
        },
        {
            count: "40",
            label: "Direct Active Vendors",
            icon: <BriefcaseFill />
        },
        {
            count: "PAN India",
            label: "Reference Centers Available",
            icon: <GeoAltFill />
        },
        {
            count: "100%",
            label: "Verified Billing Proofs & Agreements",
            icon: <FileEarmarkCheckFill />
        }
    ];

    return (
        <section className={styles.ExperienceScale}>
            <CustomContainer>
                <div className={styles.heading} data-aos="fade-up">
                    <h2>Proven Scale & Experience</h2>
                    <p>Building a robust network of successful partners.</p>
                </div>

                <Row className="justify-content-center">
                    {stats.map((stat, index) => (
                        <Col key={index} xs={12} sm={6} lg={3} data-aos="flip-left" data-aos-delay={index * 150}>
                            <div className={styles.statCard}>
                                <div className={styles.icon}>{stat.icon}</div>
                                <div className={styles.content}>
                                    <h3>{stat.count}</h3>
                                    <p>{stat.label}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </CustomContainer>
        </section>
    );
};

export default ExperienceScale;
