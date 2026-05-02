// This function checks the quiz answers
//calculates the score
//displays results.
function gradeQuiz() {
  let score = 0;
  let results = "";

  // Q1: Fill in the blank
  let q1 = document.getElementById("q1").value.toLowerCase().trim();

  if (q1 === "quic") {
    score++;
    results += "<p style='color:green;'>Q1 Correct (Answer: QUIC)</p>";
  } else {
    results += "<p style='color:red;'>Q1 Incorrect (Answer: QUIC)</p>";
  }

  // Q2: Multiple choice
  let q2 = document.querySelector('input[name="q2"]:checked');

  if (q2 && q2.value === "correct") {
    score++;
    results += "<p style='color:green;'>Q2 Correct (Answer: HTTP/0.9)</p>";
  } else {
    results += "<p style='color:red;'>Q2 Incorrect (Answer: HTTP/0.9)</p>";
  }

  // Q3: Multiple choice
  let q3 = document.querySelector('input[name="q3"]:checked');

  if (q3 && q3.value === "correct") {
    score++;
    results += "<p style='color:green;'>Q3 Correct (Answer: HTTP/1.1)</p>";
  } else {
    results += "<p style='color:red;'>Q3 Incorrect (Answer: HTTP/1.1)</p>";
  }

  // Q4: Multiple choice
  let q4 = document.querySelector('input[name="q4"]:checked');

  if (q4 && q4.value === "correct") {
    score++;
    results += "<p style='color:green;'>Q4 Correct (Answer: Multiplexing)</p>";
  } else {
    results += "<p style='color:red;'>Q4 Incorrect (Answer: Multiplexing)</p>";
  }

  // Q5: Multi-select
  let q5 = document.querySelectorAll('input[name="q5"]:checked');
  let answers = Array.from(q5).map(function(choice) {
    return choice.value;
  });

  let correct = ["a", "b", "d"];

  if (answers.length === correct.length && correct.every(function(value) {
    return answers.includes(value);
  })) {
    score++;
    results += "<p style='color:green;'>Q5 Correct (Answers: HTTPS encrypts data, HTTP/1.0 introduced headers, HTTP is stateless)</p>";
  } else {
    results += "<p style='color:red;'>Q5 Incorrect (Answers: HTTPS encrypts data, HTTP/1.0 introduced headers, HTTP is stateless)</p>";
  }

  let percent = (score / 5) * 100;
  let pass = percent >= 70 ? "PASS" : "FAIL";
  let passColor = percent >= 70 ? "green" : "red";

  document.getElementById("results").innerHTML =
    "<h2>Score: " + score + "/5 (" + percent + "%)</h2>" +
    "<h3 style='color:" + passColor + ";'>" + pass + "</h3>" +
    results;
}

// This function clears the quiz results when the reset button is clicked.
function resetQuiz() {
  document.getElementById("results").innerHTML = "";
}
