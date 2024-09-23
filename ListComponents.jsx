import { useContextApp } from "../store/context"


function ListComponents (){

    const { list,Increment,Decrement,AddCart } = useContextApp();

    const ButtonDescrement = (id) => {
        Decrement(id)
    }
    const ButtonIncrement = (id) => {
        Increment(id)
    }
    const AddToCart = (item) => {
        AddCart(item)
    }
    return(
        <>
            <div className="container w-50">
                <h1 className="text-center">Lista di prodotti acquistabili</h1>

                <ul>
                    {list.map(item =>(
                        <li key={item.id}> 
                            {item.name} - €{item.price.toFixed(2)}
                            <div className="ms-5 my-2 d-flex align-items-center ">
                                <div className="mx-4">
                                    <button className="circle" onClick={() => ButtonDescrement(item.id)} disabled={item.quantity == 1}>-</button>
                                        <span className="mx-2">{item.quantity}</span>
                                    <button className="circle" onClick={() => ButtonIncrement(item.id)} >+</button>
                                </div>
                                <button className="btn btn-success" onClick={() => AddToCart(item)}>Add</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>    
        </>
    )
}

export default ListComponents