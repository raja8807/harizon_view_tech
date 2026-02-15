import React from "react";
import styles from "./languages.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/common/section_heading/section_heading";

const LanguageSupport = () => {
    const languages = [
        { en: "Tamil", native: "தமிழ்", color: "#C8102E" },      // Deep Red
        { en: "Telugu", native: "తెలుగు", color: "#1B5E20" },    // Rich Green
        { en: "Kannada", native: "ಕನ್ನಡ", color: "#0D47A1" },    // Royal Blue
        { en: "Malayalam", native: "മലയാളം", color: "#4A148C" },  // Deep Purple
        { en: "Hindi", native: "हिन्दी", color: "#FF6F00" }      // Saffron Orange
    ];




    return (
        <section className={styles.LanguageSupport}>
            <SectionHeading
                head="Regional Language Support"
                caption="Specialized workflows for South Indian languages to support region-wise publishing demands."
                variant={2}
                title={'Languages'}
            />
            <CustomContainer>
                <div className={styles.langWrapper}>
                    {languages.map((lang, index) => (
                        <div key={`lang_${index}`} className={styles.langItem} data-aos="zoom-in" data-aos-delay={index * 150}>
                            <h3
                                style={{ color: lang.color }}
                            >{lang.native}</h3>
                            <p>{lang.en}</p>
                        </div>
                    ))}
                </div>
            </CustomContainer>
        </section>
    );
};

export default LanguageSupport;
