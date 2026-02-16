import React from "react";
import styles from "./contactForm.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";
import CustomButton from "@/components/ui/custom_button/custom_button";
import CustomTextArea from "@/components/ui/custom_textarea/custom_textarea";
import { EnvelopeAtFill, GeoAltFill } from "react-bootstrap-icons";
import { CONATCT_DETAILS } from "@/constants/constants";
import Link from "next/link";

const ContactFormSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.ContactFormSection}>
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.left}>
            <div className={styles.head}>
              <h4 data-aos="fade-right">GET IN TOUCH</h4>
              <h2 data-aos="fade-right" data-aos-delay="200">
                Chat with our support team to learn more
              </h2>
              <p data-aos="fade-right" data-aos-delay="400">
                We provide professional services to clients in a particular area
                of expertise. We have a team of experts in various fields who
                can offer advice on a project or problem.
              </p>
            </div>

            <hr />

            <div
              className={styles.contact}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h3>Reach Us</h3>
              <p>
                <GeoAltFill /> {CONATCT_DETAILS.address}
              </p>
              <p>
                <EnvelopeAtFill />{" "}
                <Link href={`mailto:${CONATCT_DETAILS.email}`}>
                  {CONATCT_DETAILS.email}
                </Link>
              </p>
            </div>
          </div>

          <div className={styles.right}>
            <form onSubmit={handleSubmit} data-aos="fade-left">
              <h2>Send us a message</h2>
              <CustomInput placeHolder={"Your Name"} />
              <CustomInput placeHolder={"Your Email"} />
              <CustomInput placeHolder={"Your Phone Number"} />
              <CustomTextArea placeHolder={"Your Text"} />
              <br />
              <CustomButton type="submit" />
            </form>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ContactFormSection;
