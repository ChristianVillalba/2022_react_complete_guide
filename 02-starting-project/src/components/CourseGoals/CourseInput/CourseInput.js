import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// Using Styled-Components
// import styled from "styled-components";
// import { Component } from "react/cjs/react.production.min";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props =>( props.invalidProp ? "red" : "black")} ;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props =>( props.invalidProp ? "red" : "#ccc")};
//     background: ${props =>( props.invalidProp ? "salmon" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;



const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);
  // by default, we trust that the input is valid

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsInputValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // Check if the input is empty
    if (enteredValue.trim().length === 0) {
      setIsInputValid(false); // the input is NOT valid
      return; // if the result is 0, the next line of code won't be executed
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isInputValid && "invalid-input"}> */}
      {/* Feature provided by styled-components: adding props to our Styled Component */}
      <div className={`
      ${styles[`form-control`]} 
      // invalid-input name changed to invalid
      ${!isInputValid && styles.invalid}
       `}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
