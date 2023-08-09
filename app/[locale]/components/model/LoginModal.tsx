"use client";

import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import Button from "../Button";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import * as Cookies from "js-cookie";
import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import axios from "axios";

import { useUserContext } from "../../context/user";

const LoginModal = () => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthenticatedFun } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    let body = {
      ...data,
      client_id: "3_APPID",
      client_secret: "TOPSECRET",
      grant_type: "password",
    };
    try {
      const res: any = await axios.post(
        "https://testing-eg.am-root.com/api/v2/oauth/token",
        body
      );
      Cookies.set("AUTH_TOKEN", res.data.access_token);
      Cookies.set("AUTH_REFRESH_TOKEN", res.data.refresh_token);
      setAuthenticatedFun(true);
      loginModal.onClose();
    } catch (err) {
      console.log(err);
    }
  };
  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div>
      <Heading title="Welcome Back" subTitle="Login to your account!" />
      <Input
        id="username"
        label="Username"
        disabled={isLoading}
        register={register}
        error={errors}
        required
        type="text"
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        error={errors}
        required
        type="password"
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-3 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        Icon={FcGoogle}
        onClick={() => {}}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <p>
          First time using Airbnb ?
          <span
            onClick={onToggle}
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
          >
            Create an account
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLable="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
