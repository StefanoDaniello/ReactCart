import React, { useReducer } from 'react';

function ModulodiRegistrazione() {
    const initialState = {
        name: '',
        email: '',
        password: '',
        successMessage: '',
        errorMessage: ''
    };

    const [formData, dispatchFormData] = useReducer(formReducer, initialState);

    const handleChange = (name, value) => {
        dispatchFormData({ type: "CHANGE-FILE", name, value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Resetta i messaggi all'inizio del submit
        dispatchFormData({ type: "ERROR-MESSAGE", message: '' });
        dispatchFormData({ type: "SUCCESS-MESSAGE", message: '' });

        const { name, email, password } = formData;
        if (!name || !email || !password) {
            dispatchFormData({ type: "ERROR-MESSAGE", message: 'I campi non possono essere vuoti' });
            return;
        }

        const emailPattern = /^[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}$/;
        //controlla se una stringa e composta da uno o piu caratteri tra lettere maiuscole e minuscole
        const namePattern = /^[A-Za-z-' ]+$/; 
        const passwordPattern = /^[A-z0-9\.\+_-]{8,20}$/;

        if (namePattern.test(name) && emailPattern.test(email) && passwordPattern.test(password)) {
            dispatchFormData({ type: "SUCCESS-MESSAGE", message: 'Ti sei registrato con successo!' });
        } else {
            dispatchFormData({ type: "ERROR-MESSAGE", message: 'Controlla i tuoi dati inseriti' });
        }
    };

    function formReducer(state, action) {
        switch (action.type) {
            case "CHANGE-FILE":
                return { ...state, [action.name]: action.value };
            case "ERROR-MESSAGE":
                return { ...state, errorMessage: action.message };
            case "SUCCESS-MESSAGE":
                return { ...state, successMessage: action.message };
            default:
                return state;
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    onChange={(e) => handleChange("name", e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => handleChange("email", e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => handleChange("password", e.target.value)}
                />
                <button type="submit">Registrati</button>
            </form>
            {formData.errorMessage && <p style={{ color: 'red' }}>{formData.errorMessage}</p>}
            {formData.successMessage && <p style={{ color: 'green' }}>{formData.successMessage}</p>}
        </>
    );
}

export default ModulodiRegistrazione;
