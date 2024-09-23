import React, { useReducer } from 'react';

function GestioneDati() {

    const initialState = { count: 0 };

    // Definiamo il reducer
    const reducer = (state, action) => {
        switch (action.type) {
            case 'INCREMENTA':
                return { count: state.count + 1 };
            case 'DECREMENTA':
                return { count: state.count - 1 };
            case 'RESETTA':
                return initialState;
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Contatore: {state.count}</h1>
                <button onClick={() => dispatch({ type: 'INCREMENTA' })}>Incrementa</button>
                <button onClick={() => dispatch({ type: 'DECREMENTA' })}>Decrementa</button>
                <button onClick={() => dispatch({ type: 'RESETTA' })}>Resetta</button>
            </div>
        </>
    )
}

export default GestioneDati