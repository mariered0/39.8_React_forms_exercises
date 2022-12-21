import React, { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = {
        todo: ""
    };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...formData});
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Todo: </label>
            <input
                type="text"
                id="todo"
                name="todo"
                placeholder="todo"
                value={formData.todo}
                onChange={handleChange}
            />

            <button>Add</button>
        </form>
    )
}

export default NewTodoForm;