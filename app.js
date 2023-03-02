import React, { useState } from "react";

function App() {
  const [pregnancies, setPregnancies] = useState("");
  const [glucose, setGlucose] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [skinThickness, setSkinThickness] = useState("");
  const [insulin, setInsulin] = useState("");
  const [bmi, setBmi] = useState("");
  const [dpf, setDpf] = useState("");
  const [age, setAge] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://diabetes-prediction-api.herokuapp.com/api/predict";
    const data = {
      pregnancies,
      glucose,
      bloodPressure,
      skinThickness,
      insulin,
      bmi,
      dpf,
      age,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data.prediction);
      });
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Diabetes Prediction</h1>
        <form onSubmit={handleSubmit}>
          <section>
            <h2>Enter Patient Information</h2>
            <div>
              <label htmlFor="pregnancies">Number of Pregnancies:</label>
              <input
                type="number"
                id="pregnancies"
                name="pregnancies"
                value={pregnancies}
                onChange={(e) => setPregnancies(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="glucose">Glucose Level:</label>
              <input
                type="number"
                id="glucose"
                name="glucose"
                value={glucose}
                onChange={(e) => setGlucose(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="bloodPressure">Blood Pressure:</label>
              <input
                type="number"
                id="bloodPressure"
                name="bloodPressure"
                value={bloodPressure}
                onChange={(e) => setBloodPressure(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="skinThickness">Skin Thickness:</label>
              <input
                type="number"
                id="skinThickness"
                name="skinThickness"
                value={skinThickness}
                onChange={(e) => setSkinThickness(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="insulin">Insulin:</label>
              <input
                type="number"
                id="insulin"
                name="insulin"
                value={insulin}
                onChange={(e) => setInsulin(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="bmi">BMI:</label>
              <input
                type="number
