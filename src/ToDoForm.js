import React, { useState } from 'react';
import useInput from './hooks/useInput';

const ToDoForm = ({ addTask }) => {

    const [userInput2, setTodo, resetTodo] = useInput('');
    // const [ userInput, setUserInput ] = useState('');

    // const handleChange = (e) => {
    //     setUserInput(e.currentTarget.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput2);
        // setUserInput("");
        resetTodo();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput2} type="text" onChange={setTodo} placeholder="Enter task..."/>
            <button>Submit</button>
        </form>
    );
};

export default ToDoForm;