import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [probook, setprobook] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: {
          Authorization: "whatever-you-want",
        },
      })
      .then((output) => {
        if (output.data.books) {
          setprobook(output.data.books);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [probook]);

  return (
    <div>
      {probook.map((probook) => (
        <div key={probook.id}>
          <h1>
            {probook.title}
          </h1>
          <div>
            <img src={probook.imageLinks.smallThumbnail} />
            <p>{probook.description}</p>
          </div>
          <h2>{probook.authors}</h2>
          <hr />
        </div>
      ))}
      {probook.map((probook) => {
        return <div 
        key={probook.id}></div>;
      })}
    </div>
  );
}

export default App;
