import React from 'react'

export const ToDoList = (props: any) => {

    function handleClick(event: React.MouseEvent<HTMLDivElement>) {
        event.preventDefault();
        props.handleClickList(props.cardId, props.list.id)
    }

    return (
        <div onClick={handleClick} className="to-do-list-container">
            <h3 className={props.list.completed ? "completed-list" : "to-do-list"}>{props.list.description}{props.list.completed ? "  ✔️" : null}</h3>
        </div>
    )
};