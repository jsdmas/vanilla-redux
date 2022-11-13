import React, { useState } from "react";
import { connect } from 'react-redux';
import { actionCreators } from "../store";

import ToDo from "../components/ToDo";

const Home = ({ toDos, addToDo }) => {
    // mapDispatchToProps로 받은 함수
    console.log(addToDo);

    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(text);
        setText("");
    };

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type='text' value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {
                    // toDos : mapStateToProps로 부터 받아온 값
                    toDos.map(toDo => <ToDo {...toDo} key={toDo.id} />)
                }
            </ul>
        </>
    );
}

const mapStateToProps = (state) => {
    return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
    // reducer에게 dispatch
    return {
        addToDo: text => dispatch(actionCreators.addToDo(text)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);