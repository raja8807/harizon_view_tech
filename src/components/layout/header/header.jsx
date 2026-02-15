import React from "react";
import styles from "./header.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import Link from "next/link";
import { useRouter } from "next/router";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { Image } from "react-bootstrap";

const Header = () => {
  const router = useRouter();

  const PAGES = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/abput",
    },

    {
      title: "Sevices",
      href: "/services",
    },

    {
      title: "Shop",
      href: "/shop",
    },

    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className={styles.Header}>
      <CustomContainer>
        <div className={styles.wrap}>
          <Link href="/">
            {/* <h3>HorizonView</h3> */}
            <Image src="/logo/logo.png" alt="logo" height={80} />
          </Link>
          <CustomButton>Contact Us</CustomButton>
        </div>
      </CustomContainer>
    </header>
  );
};

export default Header;
