import React, { Fragment } from "react";
import { connect } from "react-redux";

import { addNewTodo, toggleCompleted } from "../actions/actions";

class TodoList extends React.Component {
  render() {
    return (
      <Fragment>
        <h2>To-Do List</h2>
        <div>
          {this.props.todos.map((todo, index) => (
            <h4
              className={todo.completed ? "completed" : ""}
              onClick={e => this.toggleCompleted(e, index)}
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
        <button onClick={this.addTodo}>Add To-Do</button>
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
