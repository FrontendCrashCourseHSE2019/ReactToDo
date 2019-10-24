import React, {ChangeEvent, FormEvent} from 'react'
import {ToDoList} from "./ToDoList";

interface ToDoCardProps {
    handleClickList: any;
    card: any;
    addList: any;
}

interface State {
    input: string;
}

class ToDoCard extends React.Component<ToDoCardProps, State> {


    constructor(props: Readonly<ToDoCardProps>) {
        super(props);
        this.state = {
            input: ''
        };
    }


     handleListInput(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
            input: event.target.value
        })
    }

    handleListSubmit(event: FormEvent) {
        event.preventDefault();

        this.props.addList(this.props.card.id, this.state.input);
        this.setState({
            input: ''
        })
    }



    renderLists(){
        return this.props.card.lists.map((list: any) => {
            return <ToDoList key={list.id} handleClickList={this.props.handleClickList} cardId={this.props.card.id} list={list}/>
        })
    }

    render(){
        return (
            <div className="to-do-card">
                <h4>{this.props.card.title}</h4>
                <form onSubmit={event => this.handleListSubmit(event)}>
                    <input onChange={event => this.handleListInput(event)} type="text" value ={this.state.input} />
                </form>
                {this.renderLists()}
            </div>
        )
    }
}


export default ToDoCard;