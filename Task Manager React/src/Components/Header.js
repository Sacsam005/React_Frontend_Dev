import React from "react";
import "../App.css";
import Button from "./Button";

const Header = ({ title, onAdd }) => {
  return (
    <>
      <header className="header" style={HeadingStyling}>
        <h1>{title}</h1>
        <Button color="green" text="Add" onClick={onAdd} />
      </header>
    </>
  );
};

Header.defaultProps = {
  title: "Task Manager",
};

const HeadingStyling = {
  color: "green",
  fontSize: "2rem",
};

export default Header;
