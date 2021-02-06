import React, { useState } from 'react';
import api from '../services/api';
import "../App.css"

import { useHistory } from "react-router-dom";

export default function Header({ }) {
    const history = useHistory();
    async function handleSubmit(event) {
        event.preventDefault();
        const access_token = localStorage.getItem('token_user');
        const data = '';
        console.log(access_token);
        const response = await api.post('auth/logout',data,
            {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            });

        console.log(response.data);    
        
        
        history.push('/');
    }

    return (
        <header className="property__header">
            <h1 className="header-title">Easy Real Estate</h1>

            <button className="btn-logout" onClick={handleSubmit}>Logout</button>
        </header>

    );
}

