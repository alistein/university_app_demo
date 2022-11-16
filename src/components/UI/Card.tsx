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

}

const Card: React.FC<ICard> = ({ className, children, bgColor, maxWidth, padding }) => {

  return (
    <div
      className={className}
      style={{
        backgroundColor: `${bgColor}`,
        maxWidth: `${maxWidth || "700px"}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "0 auto",
        boxSizing: "border-box",
        padding: `${padding}`,
        borderRadius: "3px"

      }}
    >
      {children}
    </div>
  );
};

export default Card;
