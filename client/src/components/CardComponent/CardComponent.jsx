import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./cardComponent.css";

const CardComponent = ({ card, onAnswer }) => {
  const [isquestion, setIsQuestion] = useState(true);

  const displayAnswer = () => {
    setIsQuestion(false);
  };

  const onClick = (status) => {
    onAnswer({
      id: card.id,
      callback: () => setIsQuestion(true),
      status,
    });
  };

  return (
    <div>
      <Card>
        <Card.Title>{isquestion ? "Question" : "Answer"}</Card.Title>
        <Card.Body>{isquestion ? card.question : card.answer}</Card.Body>
        <Card.Footer>
          {isquestion ? (
            <Button variant="outline-danger" onClick={displayAnswer}>
              Answer
            </Button>
          ) : (
            <div className="button-container">
              <Button
                variant="outline-danger"
                onClick={() => onClick("forget")}
              >
                Forget
              </Button>
              <Button
                variant="outline-danger"
                onClick={() => onClick("remember")}
              >
                Remember
              </Button>
            </div>
          )}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardComponent;
