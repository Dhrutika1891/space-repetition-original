import React, { useEffect } from "react";
import { Badge, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getCards } from "../../services";
import "../Listing/listing.css";

const Practice = () => {
  const level = useSelector((state) => state.level);
  const cards = useSelector((state) => state.cards);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCards = async () => {
      const response = await getCards(level);
      dispatch({ type: "FETCH_CARDS", cards: response });
    };
    fetchCards();
  }, [dispatch, level]);

  const sortedCards = cards.sort((a, b) => a.id - b.id);

  return (
    <>
      <h1>
        <Badge pill bg="success" lg>
          Practice Cards for level: {level}
        </Badge>
      </h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        {level <= 5 ? (
          <tbody>
            {sortedCards.map((item) => (
              <tr key={item.id}>
                <td>{item.question}</td>
                <td>{item.answer}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <div className="text-container">
            Congratulation 🎊 .You are master in these cards now.
          </div>
        )}
      </Table>
    </>
  );
};

export default Practice;
