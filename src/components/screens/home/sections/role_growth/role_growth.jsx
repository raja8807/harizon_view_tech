import React from "react";
import styles from "./role_growth.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import { ArrowRight, GearFill, CurrencyDollar, GraphUpArrow } from "react-bootstrap-icons";

const RoleGrowth = () => {
    const steps = [
        {
            title: "System Setup",
            icon: <GearFill />,
            desc: "Infrastructure & Process Initialization"
        },
        {
            title: "First Billing",
            icon: <CurrencyDollar />,
            desc: "Revenue Generation Begins"
        },
        {
            title: "Stable Workflow",
            icon: <GraphUpArrow />,
            desc: "Consistent Monthly Operations"
        }
    ];

    return (
        <section className={styles.RoleGrowth}>
            <SectionHeading
                head="Our Role in Your Growth"
                caption="We don't just give work. We help you run an outsourcing business."
            />
            <CustomContainer>
                <div className={styles.timelineWrapper}>
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div className={styles.stepItem} data-aos="fade-up" data-aos-delay={index * 200}>
                                <div className={styles.iconCircle}>
                                    {step.icon}
                                </div>
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className={styles.connector} data-aos="fade-right" data-aos-delay={index * 200 + 100}>
                                    <ArrowRight />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </CustomContainer>
        </section>
    );
};

export default RoleGrowth;
