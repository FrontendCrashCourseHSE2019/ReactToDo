import React, {ChangeEvent, FormEvent} from 'react'

interface CreateCardProps {
    createNewCard: (input: string) => void;
}

interface State {
    input: string;
}

class CreateCard extends React.Component<CreateCardProps, State> {


    constructor(props: Readonly<CreateCardProps>) {
        super(props);

        this.state = {
            input: ''
        };
    }

    handleInput(event: ChangeEvent<HTMLInputElement>) {
        event.persist();
        this.setState({
            input: event.target.value
        })
    };

    handleNewCard(event: FormEvent) {
        event.preventDefault();
        this.props.createNewCard(this.state.input)
    };

    render() {
        return (
            <form onSubmit={event => this.handleNewCard(event)} className="new-card-form">
                <h4>Create Card</h4>
                <input onChange={event => this.handleInput(event)} className="new-card-input" type="text" value={this.state.input}/>
                <input className="new-card-input" type="submit" value="Create"/>
            </form>
        )
    }
}

export default CreateCard;