import React, { Children, CSSProperties, HTMLAttributes } from 'react'

interface ICard {
    className?: string;
    children: any
}

const Card:React.FC<ICard> = ({className,children}) => {

  let cardContainer:CSSProperties | undefined;

  cardContainer = {
    maxWidth: "700px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: '0 auto', 
    backgroundColor: "beige",
    padding:"20px",
  }
 
  return (
    <div style={cardContainer} className={className}>
        {children}
    </div>
  )
}

export default Card;