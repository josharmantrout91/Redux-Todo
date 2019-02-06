export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

export function addNewTodo(newTodo) {
  console.log(newTodo);
  return {
    type: ADD_TODO,
    payload: newTodo
  };
}

export function toggleCompleted(index) {
  console.log(index);
  return {
    type: TOGGLE_COMPLETED,
    payload: index
  };
}
