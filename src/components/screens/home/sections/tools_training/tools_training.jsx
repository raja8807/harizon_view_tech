import React from "react";
import styles from "./tools_training.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";
import { Laptop, FileEarmarkCode, Tools, Globe, LayoutTextWindowReverse, CheckCircleFill } from "react-bootstrap-icons";

const ToolsTraining = () => {
    const tools = [
        {
            title: "Oxygen XML Editor",
            desc: "Comprehensive training on XML authoring, debugging, and structured content management.",
            icon: <FileEarmarkCode />
        },
        {
            title: "ABBYY FineReader",
            desc: "Professional OCR training for high-accuracy document digitization and conversion.",
            icon: <LayoutTextWindowReverse />
        },
        {
            title: "Epsilon Workflow",
            desc: "Mastering the end-to-end publishing workflow for efficient project delivery.",
            icon: <Tools />
        },
        {
            title: "ArcGIS",
            desc: "Specialized training for mapping, spatial analysis, and geographic data management.",
            icon: <Globe />
        },
        {
            title: "HTML & Publishing",
            desc: "Hands-on sessions for structured publishing tools and modern web standards.",
            icon: <Laptop />
        }
    ];

    return (
        <section className={styles.ToolsTraining}>
            <SectionHeading
                head="Technology & Tools Training"
                caption="We ensure your team is project-ready with comprehensive hands-on training."
                variant={1}
                className={styles.darkHeading}
                data-aos="fade-up"
            />
            <CustomContainer>
                <div className={styles.gridWrapper}>
                    {tools.map((tool, index) => (
                        <div key={index} className={styles.toolCard} data-aos="fade-up" data-aos-delay={index * 150}>
                            <div className={`${styles.iconBox} ${styles[`color${index % 3}`]}`}>
                                {tool.icon}
                            </div>
                            <h3>{tool.title}</h3>
                            <p>{tool.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Retaining the training mode info but styling it to fit the new theme */}
                <div className={styles.trainingFooter}>
                    <p>
                        <CheckCircleFill /> Training available <br /><span>Online</span> & <span>Offline</span> <br /> based on vendor preference.

                    </p>
                </div>
            </CustomContainer>
        </section>
    );
};

export default ToolsTraining;
