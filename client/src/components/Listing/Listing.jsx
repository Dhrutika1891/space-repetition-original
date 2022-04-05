import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getCards, updateCards } from "../../services";
import CardComponent from "../CardComponent/CardComponent";
import "./listing.css";

const Listing = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [reduxData, setReduxData] = useState(null);
  const level = useSelector((state) => state.level);

  React.useEffect(() => {
    const fetchCards = async () => {
      const response = await getCards(level);
      setReduxData(response);
      setCardIndex(0);
    };
    fetchCards();
  }, [level]);

  const listing = reduxData
    ? reduxData.sort((b, a) => {
        if (a.score === b.score) {
          return (
            new Date(b.createtime).getTime() - new Date(a.createtime).getTime()
          );
        }
        return b.score - a.score;
      })
    : [];

  const onAnswer = ({ id, status, callback }) => {
    updateCards({ id, status });
    if (cardIndex < listing.length) {
      setCardIndex(cardIndex + 1);
      callback();
    }
  };

  let comp;
  if (listing.length === 0) {
    comp = <div className="text-container"> No Cards to Display 🥲</div>;
  } else if (listing.length > 0 && cardIndex < listing.length) {
    comp = (
      <div>
        <CardComponent card={listing[cardIndex]} onAnswer={onAnswer} />
      </div>
    );
  } else {
    comp = (
      <div className="text-container">
        Congratulation 🎊 . All cards completed
      </div>
    );
  }
  return <div>{comp}</div>;
};

export default Listing;
