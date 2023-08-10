"use client";

import React from "react";
import Logo from "./Logo";
import Container from "../Container";
import SelectButton from "../SelectButton/SelectButton";
import { MdRealEstateAgent } from "react-icons/md";
import { AiOutlineSearch, AiOutlineHome } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { CgProfile } from "react-icons/cg"
import { PiSignInLight } from "react-icons/pi"
import { IoMdCreate } from "react-icons/io"
import { HiOutlineLogout } from "react-icons/hi"
import Link from "next-intl/link";
import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import { useUserContext } from "../../context/user";
import { removeCookie } from 'typescript-cookie'

const SearchList = [
  {
    text: "real_estate",
    Icon : MdRealEstateAgent,
  },
  {
    text: "compounds",
    Icon : MdRealEstateAgent
  },
];


const Navbar = (props: { locale: string }) => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const { authenticated , setAuthenticatedFun } = useUserContext() ;
  
  const logout = ()=>{
     removeCookie("AUTH_REFRESH_TOKEN")
     removeCookie("AUTH_TOKEN")
     setAuthenticatedFun?.(false)
  }

  const UserListNotAuth = [
    {
      text: "signIn",
      Icon : PiSignInLight,
      onClick : ()=> loginModal.onOpen()
    },
    {
      text: "signUp",
      Icon : IoMdCreate,
      onClick : ()=> registerModal.onOpen()
  
    },
  ];
  const UserListAuth = [
    {
      text: "addAcount",
      Icon : CgProfile,
      onClick : ()=> alert("ok")
    },
    {
      text: "logout",
      Icon : HiOutlineLogout,
      onClick : ()=> logout()
    },
  ];
  
  return (
    <div className="fixed w-full bg-white z-20 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="flex flex-row items-center justify-between gap-20">
              <Logo locale={props.locale} />
              <div className="flex flex-row items-center justify-between gap-5 md:gap-0">
                <SelectButton Icon={AiOutlineSearch} text="search" items={SearchList} />
                <SelectButton Icon={ImLocation} text="know" items={SearchList} />
                <SelectButton Icon={AiOutlineHome} text="list" />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-5 md:gap-0">
              <Link href="/" locale="en">
                <SelectButton  text="english" />
              </Link>
              <Link href="/" locale="ar">
                <SelectButton text="arabic" />
              </Link>
              <SelectButton text="help" />
              <SelectButton Icon={CgProfile} items={authenticated ? UserListAuth : UserListNotAuth} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
