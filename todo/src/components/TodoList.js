import React from "react";

class TodoList extends React.Component {
  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
}

export default TodoList;
