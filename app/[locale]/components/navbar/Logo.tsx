"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter as s} from "next/router";
import { useRouter } from "next/navigation";

const Logo = (props: { locale: string }) => {
  const router = useRouter()
  return (
    <Image
      alt="Logo"
      className="cursor-pointer"
      height="100"
      width="100"
      src={
        props.locale == "en"
          ? "https://aqarmap.com.eg/images/EnglishLogo.png"
          : "https://aqarmap.com.eg/images/logo-ar.svg"
      }
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
