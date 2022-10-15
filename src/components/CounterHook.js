import React, { useState, useEffect } from "react";

function CounterHook() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("This is a text");
  const [info, setInfo] = useState({ name: "", email: "" });
  const [articles, setArcticles] = useState([
    "Article1",
    "Article2",
    "Article3",
  ]);

  const addArticle = () => {
    setArcticles([...articles, "New Article"]);
  };

  // useEffect(() => {
  //   console.log("useEffect is called");
  // }, [count]);

  useEffect(() => {
    document.title = `You have clicked ${count} times`;
  });
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">
        Click Me For Increasing the Number through Hooks
      </button>
      <br />
      <br />
      <h2>{text}</h2>
      <button
        className="btn btn-success"
        onClick={() => setText("The text is changed")}
      >
        Click for changin the text
      </button>

      <br />
      <br />
      <input
        type="text"
        className="form-control"
        value={info.name}
        onChange={(e) => setInfo({ ...info, name: e.target.value })}
      />
      <input
        type="text"
        className="form-control"
        value={info.email}
        onChange={(e) => setInfo({ ...info, email: e.target.value })}
      />

      <h2>Name is: {info.name}</h2>
      <h2>Email is: {info.email}</h2>

      <br />
      <br />
      {articles.map((article) => {
        return <h2 key={article}>{article}</h2>;
      })}
      <button className="btn btn-primary" onClick={addArticle}>
        Add Article
      </button>
      <br />
      <br />
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click here to change the title
      </button>
    </div>
  );
}

export default CounterHook;
