import React, { useEffect, useState } from "react";

function Facts() {
  let [facts, setFacts] = useState(null);
  let [funFact, setFunFact] = useState("");
  useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((response) => response.json())
      .then((data) => {
        setFacts(data);
      })
      .catch((error) => alert(error));
  }, []);

  let newData = "";

  function addFact() {
    let random = Math.floor(Math.random() * 5);
    newData = facts[random].text;
    setFunFact(newData);
  }

  return (
    <div>
      <h1>Welcome to Cat Fun Facts App</h1>
      <button onClick={addFact} className="center">
        Click for Cat Facts
      </button>
      <br></br>
      <p className="facts-p">{funFact}</p>
    </div>
  );
}

export { Facts };
