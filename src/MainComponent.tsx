import React from 'react';
import CreateCard from "./components/CreateCard";
import {Card, Item} from "./data/Card";
import ToDoCard from "./components/ToDoCard";

interface State {
    cards: Card[];
}

export default class MainComponent extends React.Component<any, State> {

    static id = 0;

    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            cards: []
        };
    }


    componentDidMount() {
    }

    createNewCard = (input: any) => {
        this.setState({
            cards: [...this.state.cards, new Card(MainComponent.id++, input, [])]
        })
    };

    addList = (cardId: any, input: any) => {
        let card = this.state.cards.find(card => card.id === cardId);
        if (card) {
            card.lists.push(new Item(MainComponent.id++, input, false));
            this.setState(this.state);
        }
    };

    handleClickList = (cardId: any, listId: any) => {
        const foundCard = {...this.state.cards.find(card => card.id === cardId)} as Card;

        const foundList = foundCard.lists.find((list) => list.id === listId) as Item;

        foundList.completed = !foundList.completed;

        this.setState(this.state);
    };


    render() {
        return (
            <div className="main-container">
                <div>
                    {this.state.cards.map(card => {
                        return <ToDoCard key={card.id} handleClickList={this.handleClickList} addList={this.addList}
                                         card={card}/>
                    })}
                </div>
                <CreateCard createNewCard={this.createNewCard}/>
            </div>
        )
    }

}