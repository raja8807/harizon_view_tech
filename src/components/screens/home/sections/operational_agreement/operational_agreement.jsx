import React from "react";
import styles from "./operational_agreement.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import { Row, Col, Image } from "react-bootstrap";
import { ClipboardCheck, GraphUpArrow, ShieldCheck } from "react-bootstrap-icons";

const OperationalAgreement = () => {
    const points = [
        {
            title: "Vendor Responsibility",
            desc: "Quality is the backbone of global projects. Vendors are required to maintain a minimum 95% accuracy level strictly as per client specifications.",
            icon: <ClipboardCheck />,
        },
        {
            title: "Billing & Volume Assurance",
            desc: "Billing support for 6 months with continuous workflow volume. Performance-based continuity ensures long-term operations.",
            icon: <GraphUpArrow />,
        },
        {
            title: "Our Assurance",
            desc: "We commit to structured support. Vendors commit to quality. Strong process + Consistent quality = Guaranteed continuity.",
            icon: <ShieldCheck />,
        },
    ];

    return (
        <section className={styles.OperationalAgreement}>
            <CustomContainer>
                <div className={styles.head}>
                    <h2>Operational Agreement & Performance Policy</h2>
                    <p>To maintain transparency and professional standards, an MOU will be executed after mutual KYC verification.</p>
                </div>

                <div className={styles.cont}>
                    <div className={styles.pointsList}>
                        {points.map((point, index) => (
                            <div key={index} className={styles.pointItem}>
                                <div className={styles.iconWrapper}>{point.icon}</div>
                                <div className={styles.textWrapper}>
                                    <h4>{point.title}</h4>
                                    <p>{point.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.img}>
                        <Image src="/images/agreement_img.jpg" alt="Operational Agreement" className={styles.mainImg} fluid />
                    </div>
                </div>
            </CustomContainer>
        </section>
    );
};

export default OperationalAgreement;



//   <Row className="align-items-center">
//                     <Col lg={6} className="mb-5 mb-lg-0">
//                         <div className={styles.content}>
//                             <SectionHeading
//                                 head="Operational Agreement & Performance Policy"
//                                 caption="To maintain transparency and professional standards, an MOU will be executed after mutual KYC verification."
//                                 className={styles.heading}
//                                 variant={2}
//                             />

//                             <div className={styles.pointsList}>
//                                 {points.map((point, index) => (
//                                     <div key={index} className={styles.pointItem}>
//                                         <div className={styles.iconWrapper}>{point.icon}</div>
//                                         <div className={styles.textWrapper}>
//                                             <h4>{point.title}</h4>
//                                             <p>{point.desc}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </Col>
//                     <Col lg={6}>
//                         <div className={styles.imageWrapper}>
//                             <Image
//                                 src="/images/agreement_img.jpg" // Placeholder, user might need to replace or I use a generic one if available
//                                 alt="Operational Agreement"
//                                 className={styles.mainImg}
//                                 fluid
//                             />
//                             {/* Highlight Card Overlay */}
//                             <div className={styles.highlightCard}>
//                                 <div className={styles.statItem}>
//                                     <h3>95%</h3>
//                                     <p>Min. Accuracy Required</p>
//                                 </div>
//                                 <div className={styles.divider}></div>
//                                 <div className={styles.statItem}>
//                                     <h3>6 Months</h3>
//                                     <p>Billing Support Assurance</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
