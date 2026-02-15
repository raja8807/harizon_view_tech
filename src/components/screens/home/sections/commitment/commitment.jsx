import React from "react";
import styles from "./commitment.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import { CheckCircleFill } from "react-bootstrap-icons";

const Commitment = () => {
    const commitments = [
        "100% NDA Protected",
        "Assured Project Allocation",
        "Refund Guarantee if project not provided"
    ];

    return (
        <section className={styles.Commitment}>
            <SectionHeading
                head="Our Commitment"
                caption="We believe consulting must produce results, not promises."
            />
            <CustomContainer>
                <div className={styles.checklist}>
                    {commitments.map((text, index) => (
                        <div key={index} className={styles.checkItem} data-aos="zoom-in" data-aos-delay={index * 150}>
                            <CheckCircleFill />
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            </CustomContainer>
        </section>
    );
};

export default Commitment;
