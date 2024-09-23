import React, {createContext,useContext,useState}  from "react";

const Context= createContext();

export const ContextProvider = ({children})=>{

    const [list, setList] = useState([
        { id: 1, name: 'Pane', price: 1.20, quantity: 1 },
        { id: 2, name: 'Latte', price: 0.90, quantity: 1 },
        { id: 3, name: 'Uova', price: 2.50, quantity: 1 },
        { id: 4, name: 'Formaggio', price: 3.00, quantity: 1 },
        { id: 5, name: 'Frutta', price: 2.00, quantity: 1 },
        { id: 6, name: 'Verdura', price: 1.50, quantity: 1 },
        { id: 7, name: 'Carne', price: 5.00, quantity: 1 },
        { id: 8, name: 'Pesce', price: 7.00, quantity: 1 },
        { id: 9, name: 'Riso', price: 1.80, quantity: 1 },
        { id: 10, name: 'Pasta', price: 1.50, quantity: 1 },
    ]);

    const [cart, setCart] = useState([])

    const Increment = (id,key) => {
        if(key){
            setCart(prevCart =>
                prevCart.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        }else{
            setList(prevList =>
                prevList.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        }
       
    };
    const Decrement = (id,key) => {
        if(key){
            setCart(prevCart =>
                prevCart.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
            );
            // console.log('decrement cart')
        }else{
            setList(prevList =>
                prevList.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
            );
        }
       
    }

    const AddCart = (data) => {
        setCart(prevCart => {
            const itemInCart = prevCart.find(item => item.id === data.id);
            if (itemInCart) {
                // Se l'elemento è già nel carrello, incremento la quantità
                return prevCart.map(item =>
                    item.id === data.id ? { ...item, quantity: itemInCart.quantity + data.quantity } : item
                );
            } else {
                // Altrimenti, aggiungo il nuovo elemento0 al carrello
                return [...prevCart, { ...data}];
            }
        });
        console.log(cart)
    }

    const ClearCart = (itemRemove) => {
        if(itemRemove){
            setCart(prevCart =>
                prevCart.filter(item => item.id !== itemRemove.id)
            );
        }else{
            setCart([]);
        }
       
    };
    
    const value = {
        list,
        Increment,
        Decrement,
        cart,
        AddCart,
        ClearCart
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export const useContextApp = () => useContext(Context)