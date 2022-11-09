/** count를 modify(수정)하기 위한 코드 
 * 이 케이스에서는 redux가 -1이나 +1을 count하는 걸 도와주기 위해 만들어졌다.
 */

/**
 * HTTP
 *  <body>
        <button id="add">+</button>
        <span></span>
        <button id="minus">-</button>
    </body>
 */

import { createStore } from "redux";

const add = document.querySelector(`#add`);
const minus = document.querySelector(`#minus`);
const number = document.querySelector(`span`);

number.innerText = 0;

const countModifier = (count = 0, action) => {
    switch (action.type) {
        case "ADD":
            return count + 1
        case "MINUS":
            return count - 1
        default:
            return count
    }
};

const countstore = createStore(countModifier);

countstore.subscribe(() => number.innerText = countstore.getState());

add.addEventListener("click", () => countstore.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => countstore.dispatch({ type: "MINUS" }));

