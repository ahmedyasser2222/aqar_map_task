"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="max-w-[2220px] mx-auto xl:mx-20 md:mx-10 sm:mx-2 px-4">
    {children}
  </div>
);

export default Container;
