import React from "react";
import "./style.css";

function Home() {
  return (
    <div className="home">
      <h1>HOME</h1>
      <p className="p-center">Welcome to Fun Cat Facts</p>
      <img src="cat.jpeg" alt="cats" className="center" />
      <br></br>
      <button onClick={SwitchPage} className="center">
        Go to Fun Cat Facts Page
      </button>
    </div>
  );
}

function SwitchPage() {
  window.location.href = "http://localhost:3000/facts";
}

export { Home };
