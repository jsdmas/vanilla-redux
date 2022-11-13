import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";


const Detail = ({ toDos }) => {
    const id = useParams().id;
    const toDo = toDos.find((toDo) => toDo.id === parseInt(id));

    return (
        <>
            {toDo?.text}
            <br />
            Create at : {toDo?.id}
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return { toDos: state };
}
export default connect(mapStateToProps)(Detail);
