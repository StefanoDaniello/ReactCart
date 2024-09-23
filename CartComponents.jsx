import { useEffect, useState } from "react";
import { useContextApp } from "../store/context"

function CartComponents() {
    const { cart, ClearCart, Decrement, Increment } = useContextApp();
    const [total, setTotal] = useState(0)
    const hendleRemove = (item) => {
        ClearCart(item)
    }
    const ButtonDescrement = (id, key) => {
        Decrement(id, key)
    }
    const ButtonIncrement = (id, key) => {
        Increment(id, key)
    }

    const calculateTotal = () => {
        const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const totalFixed = newTotal.toFixed(2)
        setTotal(totalFixed);
    };

    useEffect(() => {
        calculateTotal();
    }, [cart]);


    return (
        <>
            <div className="container w-50">
                <h1 className="text-center">Cart</h1>
                <ul>
                    {cart.map(item => (
                        <li className="mb-3" key={item.id}>
                            {item.name} - €{item.price.toFixed(2)} <br />
                            {/* <span >Quantità: {item.quantity}</span>   */}
                            <div className="ms-5 my-2 d-flex align-items-center ">
                                <div className="mx-4">
                                    <button className="circle" onClick={() => ButtonDescrement(item.id, "cart")} disabled={item.quantity == 1}>-</button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button className="circle" onClick={() => ButtonIncrement(item.id, "cart")} >+</button>
                                </div>
                                <button className="btn btn-primary" onClick={() => hendleRemove(item)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="d-flex justify-content-between">
                    <div>
                        <h4>Totale</h4>
                        <h5>{total} €</h5>
                    </div>
                    <button className="btn btn-danger" onClick={() => hendleRemove()}>Svuota</button>
                </div>
            </div>
        </>
    )
}

export default CartComponents