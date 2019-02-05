import React, { Component } from "react";
import { createStore } from "redux";
import "./App.css";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const store = createStore(rootReducer);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
