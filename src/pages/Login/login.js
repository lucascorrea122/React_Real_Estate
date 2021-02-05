import React, { useState } from 'react';
import './login.css'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        console.log(email)
        console.log(password)
    }


    return (
        <div className="container">
            
            <div className="login__container">
            <h1 className="login-title">Easy Real Estate</h1>
                <div className="login__form">
                    
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">E-MAIL</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Digite seu e-mail"
                            onChange={event => setEmail(event.target.value)}
                        />
                        <label htmlFor="email">Senha</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Digite sua senha"
                            onChange={event => setPassword(event.target.value)}
                        />

                        <button className="btn" type="submit">Entrar</button>
                    </form>
                </div>

            </div>
        </div>

    );
}