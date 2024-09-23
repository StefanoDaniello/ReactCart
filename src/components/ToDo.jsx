import { useReducer, useState } from "react";

function ToDo() {
    const initialState = [];

    const [todoState, dispatchTodo] = useReducer(reducer, initialState);
    const [inputValue, setInputValue] = useState(""); 
    const [errorMessage, setMessage]= useState("")

    const handleChange = (value) => {
        setInputValue(value); 
    };

    function reducer(state, action) {
        switch (action.type) {
            case "ADD_TODO":
                return [...state, { id: Date.now(), task: action.value }];
            case "REMOVE_EL":
                return state.filter((el)=> el.id !== action.id)
            default:
                return state;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue !== ""){
            dispatchTodo({ type: "ADD_TODO", value: inputValue }); 
            setInputValue(""); 
            setMessage("")
        }else{
            setMessage("errore devi inserire qualcosa")
        }
       
       
    };

    const handleElimina = (id) => {
        dispatchTodo({ type: "REMOVE_EL", id }); 
    }

    return (
        <div className="container text-center">
            <ul>
                {todoState.map((el) => (
                    <li key={el.id}>
                        {el.task}
                        <button className="btn btn-danger" onClick={() =>handleElimina(el.id)}>
                            Elimina
                        </button>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit} className="d-flex">
                <input
                    type="text"
                    name="task"
                    onChange={(e) => handleChange(e.target.value)}
                    value={inputValue} 
                />
                <button className="btn btn-success">Aggiungi</button>
            </form>
            {errorMessage &&(
                <strong className="text-danger">{errorMessage}</strong>
            )}
        </div>
    );
}

export default ToDo;
