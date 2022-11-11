import React, { useState } from "react";
import { connect } from 'react-redux';

const Home = (toDos, dispatch) => {
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setText("");
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type='text' value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul></ul>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
    // props 변경가능
    return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);