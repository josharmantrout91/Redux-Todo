import React, { Fragment } from "react";
import { connect } from "react-redux";

import { addNewTodo, toggleCompleted } from "../actions/actions";

import "../index.css";

class TodoList extends React.Component {
  state = {
    newTodo: ""
  };

  handleChanges = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  addNewTodo = e => {
    e.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  toggleCompleted = (e, index) => {
    e.preventDefault();
    this.props.toggleCompleted(index);
  };

  render() {
    return (
      <Fragment>
        <h2>To-Do List</h2>
        <div>
          {this.props.todos.map((todo, index) => (
            <h4
              className={todo.completed ? "completed" : ""}
              onClick={e => this.props.toggleCompleted(e, index)}
              key={index}
            >
              {todo.value}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChanges}
        />
        <button onClick={this.addNewTodo}>Add To-Do</button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { addNewTodo, toggleCompleted }
)(TodoList);
