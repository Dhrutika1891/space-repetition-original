import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";

export const LevelDropdown = () => {
  const dispatch = useDispatch();
  const level = useSelector((state) => state.level);
  const change = (eventkey) => {
    dispatch({ type: "UPDATE_LEVEL", level: eventkey });
  };

  return (
    <div>
      <Dropdown onSelect={change}>
        <Dropdown.Toggle variant="success">
          Current Level: {level}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="0">0</Dropdown.Item>
          <Dropdown.Item eventKey="1">1</Dropdown.Item>
          <Dropdown.Item eventKey="2">2</Dropdown.Item>
          <Dropdown.Item eventKey="3">3</Dropdown.Item>
          <Dropdown.Item eventKey="4">4</Dropdown.Item>
          <Dropdown.Item eventKey="5">5</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
