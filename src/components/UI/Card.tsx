import React, {
  CSSProperties,
  ReactNode,
} from "react";

interface ICard {
  className?: string;
  children: any;
  maxWidth?: ReactNode;
  bgColor?: ReactNode;
  padding?: ReactNode;
  margin?: ReactNode;

}

const Card: React.FC<ICard> = ({ className, children, bgColor, maxWidth, padding,margin }) => {

  return (
    <div
      className={className}
      style={{
        backgroundColor: `${bgColor}`,
        maxWidth: `${maxWidth || "700px"}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: `${margin || "0 auto"}`,
        boxSizing: "border-box",
        padding: `${padding || "20px"}`,
        borderRadius: "3px",
        zIndex:"-1",

      }}
    >
      {children}
    </div>
  );
};

export default Card;
