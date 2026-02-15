import React from "react";
import styles from "./project_domains.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import { Col, Row } from "react-bootstrap";
import { FileEarmarkText, HeartPulse, ArrowUpRight } from "react-bootstrap-icons";

const ProjectDomains = () => {
    const domains = [
        {
            title: "Publishing & Digital Conversion",
            icon: <FileEarmarkText />,
            items: [
                "Data Entry operations",
                "PDF → XML Conversion",
                "Accessible PDF & EPUB",
                "WCAG Compliance Checks",
            ],
        },
        {
            title: "Healthcare Processes",
            icon: <HeartPulse />,
            items: ["Medical Coding (ICD-10)", "Medical Billing", "Revenue Cycle Management", "Claims Processing"],
        },
    ];

    return (
        <section className={styles.ProjectDomains}>
            <SectionHeading
                head="Available Project Domains"
                caption="Specialized services across key industries."
                variant={2}
            />
            <CustomContainer>
                <Row className="justify-content-center">
                    {domains.map((domain, index) => (
                        <Col key={index} md={6} lg={5} className="mb-4" data-aos="fade-up" data-aos-delay={index * 150}>
                            <div className={styles.domainCard}>
                                <div className={styles.iconBox}>
                                    {domain.icon}
                                </div>
                                <h3>{domain.title}</h3>
                                <div className={styles.listContainer}>
                                    <ul>
                                        {domain.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.actionLink}>
                                    <a>
                                        Look More <ArrowUpRight />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </CustomContainer>
        </section>
    );
};

export default ProjectDomains;
