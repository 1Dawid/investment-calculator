import React, { useState } from "react";
import styles from "./Form.module.css";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const Form = (props) => {
  const [submit, setSubmit] = useState(false);

  const [userInput, setUserInput] = useState(initialUserInput);

  const onHandleReset = () => {
    setUserInput(initialUserInput);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(submit);
    setSubmit(true);
    props.onCalculate(userInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInout) => {
      return {
        ...prevInout,
        [input]: +value,
      };
    });
  };

  return (
    <form className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={userInput.duration}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          onClick={onHandleReset}
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button
          type="submit"
          onClick={onHandleSubmit}
          className={styles.button}
        >
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
