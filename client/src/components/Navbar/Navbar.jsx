import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import { insertCard } from "../../services";
import { LevelDropdown } from "./LevelDropdown";
import { getCards } from "../../services";
import "./navbar.css";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleShow = () => setShow(true);
  const questionText = React.createRef(null);
  const answerText = React.createRef(null);
  const { pathname } = useLocation();
  const level = useSelector((state) => state.level);
  const dispatch = useDispatch();
  const handleSave = async (e) => {
    const question = questionText.current.value;
    const answer = answerText.current.value;
    if (question === "" || answer === "") {
      setIsError(true);
      setShow(true);
    } else {
      const cardData = { question, answer };
      await insertCard(cardData);
      const response = await getCards(level);
      dispatch({ type: "FETCH_CARDS", cards: response });
      setIsError(false);
      setShow(false);
    }
  };

  return (
    <div>
      <div className="navbar-container-temp">
        <div className="navbar-container">
          <div className="navbar-text"> Space Repetition </div>
          <Button variant="primary" size="sm" onClick={handleShow}>
            Add New Card
          </Button>
          {pathname === "/practice" ? (
            <Link to="/">Test</Link>
          ) : (
            <Link to="/practice">Practice</Link>
          )}
          {pathname === "/practice" ? <></> : <LevelDropdown />}
        </div>
        <Modal show={show} onHide={handleSave}>
          <Modal.Header>
            <Modal.Title>Insert new Card Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="que-ans-container">
              <label>Question </label>
              <input type="que" id="que" ref={questionText} />
            </div>
            <div className="que-ans-container">
              <label> Answer </label>
              <input type="ans" id="ans" ref={answerText} />
            </div>
            {isError && (
              <div className="error-msg">Please Enter Valid Data</div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
