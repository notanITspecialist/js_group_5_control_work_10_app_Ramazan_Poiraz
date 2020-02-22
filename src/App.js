import React from 'react';
import Posts from "./components/posts/posts";
import {Route, Switch} from "react-router";
import Post from "./components/posts/post";
import AddPosts from "./components/posts/addPosts";

function App() {
  return (
    <div>
      <Switch>
          <Route path='/' exact component={Posts}/>
          <Route path='/news/add' exact component={AddPosts}/>
          <Route path='/news/:id' exact component={Post}/>
      </Switch>
    </div>
  );
}

export default App;