import * as React from "react";
import {useState} from "react";

interface InputProps {
    onNewTask: (text: string) => void;

}

export const InputComponent: React.FunctionComponent<InputProps> = (props: InputProps) => {
    const [state, setState] = useState({
        jeppa: ""
    });
    return (
        <div>
            <div>
                <input onChange={event => {
                    setState({...state, jeppa: event.target.value});
                }}/>
            </div>
            <button onClick={_ => props.onNewTask(state.jeppa)}>ПОИХАЛИ</button>
        </div>
    )
};