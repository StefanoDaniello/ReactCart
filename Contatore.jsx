import { useReducer } from "react"

const reducer = (state,action)=>{
    switch(action.type){
        case "INCREMENTA":
            return { count: state.count +1};
        case "DECREMENT":
            return {count: state.count -1};
        case "RESET":
            return { count: 0};
        default:
            return state;
    }
};


function Contatore (){

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return(
        <div className="container text-center mt-5">
            <h5>Count: {state.count}</h5>
            <button className="btn btn-success " onClick={() => dispatch({ type: 'INCREMENTA' })}>Increment</button>
            <button className="btn btn-danger mx-2" onClick={() => dispatch({ type: "DECREMENT"})}>Decrement</button>
            <button className="btn btn-primary" onClick={()=> dispatch({type:"RESET"})}>Reset</button>
        </div>
    )
}


export default Contatore 