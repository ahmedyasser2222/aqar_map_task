"use client";

import React, { useEffect } from "react";
import axios from "axios";
import * as Cookies from "js-cookie";
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
        refresh_token: Cookies.get("AUTH_REFRESH_TOKEN"),
      };
      try {
        const res = await axios.post(
          "https://testing-eg.am-root.com/api/v2/oauth/token",
          body
        );
        setAuthenticatedFun?.(true);
        Cookies.set("AUTH_TOKEN", res.data.access_token);
        Cookies.set("AUTH_REFRESH_TOKEN", res.data.refresh_token);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);
  return <>{children}</>;
};

export default RefreshToken;
