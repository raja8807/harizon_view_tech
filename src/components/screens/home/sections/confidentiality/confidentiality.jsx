import React from "react";
import styles from "./confidentiality.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { ShieldLockFill } from "react-bootstrap-icons";

const ClientConfidentiality = () => {
    return (
        <section className={styles.Confidentiality}>
            <CustomContainer>
                <div className={styles.wrapper}>
                    <ShieldLockFill className={styles.icon} />
                    <h2>Client Confidentiality & Compliance</h2>
                    <p>
                        Projects are assigned based on current client requirements.
                        <br />
                        For security and contractual compliance, <span>client company identities remain confidential under NDA policy.</span>
                    </p>
                </div>
            </CustomContainer>
        </section>
    );
};

export default ClientConfidentiality;
