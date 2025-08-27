import React, { Fragment, useEffect, useState } from "react";
import styles from "../componentsStyles/Question.module.css";
import TestNav from "./TestNav.component";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Question(props) {
  let history = useHistory();

  const res = props.location.state.res;
  const mins = res.time.split(":")[0];
  const secs = res.time.split(":")[1] ? res.time.split(":")[1] : 0;
  const length = res.results.length;
  const [ques, setques] = useState(0);
  const [options, setoptions] = useState([]);
  const [question, setquestion] = useState("");
  const [answers, setanswers] = useState({});

  const submithandler = () => {
    let name = localStorage.getItem("name");
    let email = localStorage.getItem("email");
    let pin = localStorage.getItem("pin");

    let score = 0;
    for (let i = 0; i < length; i++) {
      if (answers[i] === res.results[i].correct_answer) {
        score += 1;
      }
    }

    axios
      .post(
        "/api/test/submittest",
        { pin, email, name, score, total: length },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(() => history.push("/abouttest", { pin }))
      .catch((err) => console.log(err));
  };

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    for (let i = 0; i < length; i++) {
      res.results[i].question = decodeHTML(res.results[i].question);
      res.results[i].correct_answer = decodeHTML(res.results[i].correct_answer);
      res.results[i].incorrect_answers = res.results[i].incorrect_answers.map(
        (x) => decodeHTML(x)
      );
    }
  }, []);

  useEffect(() => {
    setquestion(res.results[ques].question);
    const newOptions = [
      res.results[ques].correct_answer,
      ...res.results[ques].incorrect_answers,
    ];
    setoptions(shuffleArray(newOptions));
  }, [ques]);

  const decodeHTML = (str) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = str;
    return textarea.value;
  };

  return (
    <Fragment>
      <TestNav mins={mins} secs={secs} submithandler={submithandler} />

      <div className={styles.qcontainer}>
        {ques + 1}. {question}
      </div>

      <div id="options">
        {options.map((option, index) => (
          <label
            key={index}
            className={
              answers[ques] === option
                ? styles.containeractive
                : styles.container
            }
          >
            <input
              className={styles.radios}
              type="radio"
              value={option}
              name={`options-${ques}`}
              checked={answers[ques] === option}
              onChange={(e) =>
                setanswers({ ...answers, [ques]: e.target.value })
              }
            />
            {String.fromCharCode("A".charCodeAt(0) + index)}. {option}
          </label>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className={styles.navButtons}>
  {ques > 0 && (
    <button onClick={() => setques(ques - 1)} className={styles.buttons1}>
      &#8249;
    </button>
  )}
  {ques < length - 1 && (
    <button onClick={() => setques(ques + 1)} className={styles.buttons2}>
      &#8250;
    </button>
  )}
</div>
    </Fragment>
  );
}

export default Question;
