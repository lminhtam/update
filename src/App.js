import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Post from "./post";
import SetPost from "./setPost";

function App() {
  const [index, setIndex] = useState(0);
  return (
    <Router>
      <div>
        <Route exact path="/">
          <SetPost onLeadToPost={postIndex => setIndex(postIndex)} />
        </Route>
        <Route path={`/${index}`}>
          <Post index={index} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
