import React, {
  ReactNode,
} from "react";

interface ICard {
  className?: string;
  children: any;
  maxWidth?: ReactNode;
  bgColor?: ReactNode;
}

const Card: React.FC<ICard> = ({ className, children, bgColor, maxWidth }) => {

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
        padding: "20px",
        boxSizing:"border-box",
        marginTop:"10px",
      
      }}
    >
      {children}
    </div>
  );
};

export default Card;
