import { createStore } from 'redux';

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { text: action.text, id: action.id }]
    case "DELETE_TODO":
      return []
    default:
      return state;
  }


}

const store = createStore(reducer);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: "ADD_TODO", text: toDo, id: Date.now() });
}

form.addEventListener("submit", onSubmit);
