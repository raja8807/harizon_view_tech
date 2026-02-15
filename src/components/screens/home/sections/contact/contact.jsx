import React from "react";
import styles from "./contact.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { Row, Col, Form } from "react-bootstrap";
import { Globe } from "react-bootstrap-icons";

const ContactSection = () => {
    return (
        <section className={styles.ContactSection}>
            <CustomContainer>
                <Row className="align-items-center">
                    <Col lg={5} className="mb-5 mb-lg-0">
                        <div className={styles.textArea}>
                            <h2>Still have questions?</h2>
                            <p>
                                The fastest way to convert visitors into leads and sales on your website is with our expert guidance. That&apos;s why businesses choose us.
                            </p>

                            <div className={styles.graphicWrapper}>
                                {/* Abstract graphic representation using an Icon or pure CSS if needed. 
                    Using a large icon for now to match the visual weight. */}
                                <Globe className={styles.globeIcon} />
                            </div>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className={styles.formWrapper}>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-4" controlId="formFullName">
                                            <Form.Control type="text" placeholder="Full name" className={styles.inputField} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-4" controlId="formEmail">
                                            <Form.Control type="email" placeholder="Email" className={styles.inputField} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-4" controlId="formPhone">
                                            <Form.Control type="tel" placeholder="Phone number" className={styles.inputField} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-4" controlId="formCompany">
                                            <Form.Control type="text" placeholder="Company" className={styles.inputField} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-4" controlId="formMessage">
                                    <Form.Control as="textarea" rows={4} placeholder="Message" className={`${styles.inputField} ${styles.textarea}`} />
                                </Form.Group>

                                <div className={styles.submitBtnWrapper}>
                                    <button type="button" className={styles.submitBtn}>
                                        SUBMIT
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </CustomContainer>
        </section>
    );
};

export default ContactSection;
