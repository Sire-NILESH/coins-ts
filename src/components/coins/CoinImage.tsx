import React from "react";

interface IProps {
  image: string;
  name: string;
}

const CoinImage: React.FC<IProps> = (props) => {
  return (
    <img
      className="h-6 rounded-full"
      src={`${props.image}`}
      alt={`${props.name}`}
    />
  );
};

export default CoinImage;
