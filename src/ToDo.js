/** ToDo 작성 코드 */
/**
 * HTML
 * <h1>To Dos</h1>
        <form>
            <input type="text" placeholder="Write to do" />
            <button>Add</button>
        </form>
    <ul></ul>
 */

import { createStore } from 'redux';

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const addToDo = text => { return { type: "ADD_TODO", text } };
const deleteToDo = id => { return { type: "DELETE_TODO", id } };

const reducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [{ text: action.text, id: Date.now() }, ...state];
        case "DELETE_TODO":
            // state의 배열 값을 변화시키지 않고 새로운 배열 반환
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    }
}

const store = createStore(reducer);

const dispatchAddToDo = text => store.dispatch(addToDo(text));
const dispatchDeleteToDo = e => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteToDo(id));
}

const paintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach(toDo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "DEL";
        btn.addEventListener("click", dispatchDeleteToDo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    })
}

store.subscribe(paintToDos);

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    dispatchAddToDo(toDo);
}

form.addEventListener("submit", onSubmit);
