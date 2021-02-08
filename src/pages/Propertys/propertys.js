import React, { useEffect, useState } from 'react';
import api from '../../services/api';
// import services from '../../services/services';
import './property.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileSignature, faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import Header from '../../componentes/header';
import { Link } from 'react-router-dom';

export default function Propertys({ history }) {
    const [propertys, setPropertys] = useState([]);

    useEffect(() => {
        localStorage.setItem('is_edit', false);
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


    }, []);

    async function deleteProperty(id) {
        const companie_id = localStorage.getItem('companie_id');
        const access_token = localStorage.getItem('token_user');
        const response = await api.delete(`company/${companie_id}/property-owner/${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            }
        );
        window.location.replace("/property");
    };

    async function updateProperty(id) {
        localStorage.setItem('is_edit', true);
        localStorage.setItem('property_id', id);

        history.push('/new');
    };



    return (
        <>
            <Header />
            <div className="header__form">
                <Link to="/new" >
                    <button id="btn-newProperty">cadastrar novo proprietário</button>
                </Link>
                <input
                    id="input-search"
                    type="text"
                    placeholder="digite um nome para pesquisar"

                />
            </div>

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
                                <span>{property.phone ? property.phone : 'Tel. não informado'}</span>
                            </div>

                            <div className="buttons-card-list">
                                <button className="btn btn-edit" onClick={() => updateProperty(property.id)}>Editar</button>
                                <button type="button" className="btn btn-delete" onClick={() => deleteProperty(property.id)} >Deletar</button>
                            </div>

                        </li>

                    ))}
                </ul>
            </div>
        </>
    )
}