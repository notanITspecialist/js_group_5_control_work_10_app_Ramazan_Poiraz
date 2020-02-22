import React from 'react';
import Posts from "./components/posts/posts";
import {Route, Switch} from "react-router";
import Post from "./components/posts/post";

function App() {
  return (
    <div>
      <Switch>
          <Route path='/' exact component={Posts}/>
          <Route path='/news/:id' exact component={Post}/>
      </Switch>
    </div>
  );
}

export default App;