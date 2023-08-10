"use client";

import React, { useEffect } from "react";
import axios from "axios";
import { setCookie, getCookie } from 'typescript-cookie'
import { useUserContext } from "../context/user";


const RefreshToken: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { setAuthenticatedFun } = useUserContext();

  useEffect(() => {
    async function getData() {
      const body = {
        client_id: "3_APPID",
        client_secret: "TOPSECRET",
        grant_type: "refresh_token",
        refresh_token: getCookie("AUTH_REFRESH_TOKEN") || "",
      };
      try {
        const res = await axios.post(
          "https://testing-eg.am-root.com/api/v2/oauth/token",
          body
        );
        setAuthenticatedFun?.(true);  
        setCookie("AUTH_TOKEN", res.data.access_token);
        setCookie("AUTH_REFRESH_TOKEN", res.data.refresh_token);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);
  return <>{children}</>;
};

export default RefreshToken;
