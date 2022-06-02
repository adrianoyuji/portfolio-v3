import React from "react";

interface Props {
  children: React.ReactNode;
  delayMS: string;
}

const FadeUpTag = ({ children, delayMS }: Props) => {
  return (
    <div
      className="fade-in-image"
      style={{ animation: `fadeIn ${delayMS + "ms"}` }}
    >
      {children}
    </div>
  );
};

export default React.memo(FadeUpTag);
