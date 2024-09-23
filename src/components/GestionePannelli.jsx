import { useEffect, useReducer } from "react";

function GestionePannelli() {
    const initialState = [
        { id: 1, name: false },
        { id: 2, name: false },
        { id: 3, name: false }
    ];

    const [pannelli, dispatchPannelli] = useReducer(reducer, initialState);

    function reducer(state, action) {
        switch (action.type) {
            case "TOGGLE":
                return state.map(el =>
                    el.id === action.id ? { ...el, name: !el.name } : el
                );
            case "CLOSE":
                return state.map(el =>
                    el.id === action.id ? {...el, name:false} : el
                )
            case "OPEN":
                return state.map(el =>
                    el.id === action.id ? { ...el, name: true } : { ...el, name: false }
                );
            default:
                return state;
        }
    }

    const prova = () => {
        console.log(pannelli);
    };

    useEffect(() => {
        prova();
    }, [pannelli]); 

    return (
        <>
        <div className="container d-flex justify-content-center text-center">
            {pannelli.map(item => (
                <div className="panel" key={item.id}>
                    <div
                        className="square"
                        onClick={() => dispatchPannelli({ type: "TOGGLE", id: item.id })}
                    >
                        
                        <strong className="text-light">{item.name ? "Open" : "Close"}</strong> 
                    </div>
                    <button
                        className="btn btn-danger"
                        onClick={() => dispatchPannelli({ type: "CLOSE", id: item.id })}
                    >
                        Chiudi
                    </button>
                    <button
                        className="btn btn-success"
                        onClick={() => dispatchPannelli({ type: "OPEN", id: item.id })}
                    >
                        Apri solo questo
                    </button>
                </div>
            ))}
        </div>
        </>
    );
}

export default GestionePannelli;
