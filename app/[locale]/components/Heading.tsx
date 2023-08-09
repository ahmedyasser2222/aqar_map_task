"use client";

interface HeadingProps {
  title: string;
  subTitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, center, subTitle }) => {
  return (
    <div className={`${center ? "text-center" : "text-start"}`}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="my-2 text-neutral-500 font-light">{subTitle}</div>
    </div>
  );
};

export default Heading;
