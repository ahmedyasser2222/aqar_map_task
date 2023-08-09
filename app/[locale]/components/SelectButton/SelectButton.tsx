"use client";

import React, { useCallback, useState } from "react";
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
import { IconType } from "react-icons";
import { useTranslations } from "next-intl";

interface SelectButtonProps {
  Icon?: IconType;
  text?: string;
  items?: { Icon: IconType; text: string; onClick?: () => void }[];
}

const SelectButton: React.FC<SelectButtonProps> = ({ Icon, text, items }) => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Index");

  return (
    <div className="relative">
      <div
        className="btn-select flex justify-between items-center gap-2 py-2 px-4 rounded-md cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {Icon && <Icon />}
        {text && <span>{t(text)}</span>}
        {/* <Text text={text} /> */}
        {items && <AiFillCaretDown size={11} />}
      </div>
      {(open && items)  && (
        <div className="list-items absolute top-100 left-0 py-3  shadow-md rounded-md w-max bg-white">
          {items?.map((item, index) => (
            <div
              className="item-select flex  items-center gap-3 my-4 px-4 hover:cursor-pointer"
              key={index}
              onClick={item.onClick}
            >
              <item.Icon className="icon-item" size={20} />
              <span>{t(item.text)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectButton;
