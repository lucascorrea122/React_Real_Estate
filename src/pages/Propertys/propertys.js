import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './property.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileSignature, faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import Header from '../../componentes/header';

export default function Propertys() {
    const [propertys, setPropertys] = useState([]);


    useEffect(() => {
        async function loadPropertys() {
            const companie_id = localStorage.getItem('companie_id');
            const access_token = localStorage.getItem('token_user');
            const response = await api.get(`company/${companie_id}/property-owner?orderBy=id,desc`, {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            });
            setPropertys(response.data['data']);
        }
        loadPropertys();

    }, [])


    return (
        <>
        <Header/>
        <div className="property__container">
            <ul className="property-list">
                {propertys.map(property => (
                    <li className="property-item">
                        <div>
                            <FontAwesomeIcon icon={faUser} />
                            <span className="item-name">{property.id}</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faFileSignature} />
                            <span>{property.name}</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faAt} />
                            <span>{property.email}</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPhone} />
                            <span>{property.phone}</span>
                        </div>
                        <div>
                            <button className="btn btn-edit" type="submit">Editar</button>
                            <button className="btn btn-delete" type="submit">Deletar</button>
                        </div>

                    </li>

                ))}
            </ul>
        </div>
        </>
    )
}