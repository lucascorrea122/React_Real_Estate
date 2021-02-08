import React, { useState, useEffect } from 'react';
import Header from '../../componentes/header'
import api from '../../services/api'

import "./newProperty.css"


export default function New({ history }) {
    const [propety, setProperty] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [ocupacao, setOcupacao] = useState('');
    const [dtNascimento, setDtNascimento] = useState('');
    const [phone, setPhone] = useState('');
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [numberAddress, setNumberAddress] = useState('');
    const [city, setCity] = useState('');
    const [bairro, setBairro] = useState('');
    const [estado, setEstado] = useState('');
    const [pais, setPais] = useState('');
    const [complemento, setComplemento] = useState('');
    const id = localStorage.getItem('property_id');
    const isEdit = localStorage.getItem('is_edit');
    useEffect(() => {
        // const [propertys, setPropertys] = useState([]);

        console.log(isEdit);


        async function loadProperty() {
            if (isEdit === "true") {

                const companie_id = localStorage.getItem('companie_id');
                const access_token = localStorage.getItem('token_user');
                const response = await api.get(`company/${companie_id}/property-owner/${id}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${access_token}`
                        }
                    }
                );
                setProperty(response.data['data']['name']);
                setEmail(response.data['data']['email']);
                setCpf(response.data['data']['cpf']);
                setOcupacao(response.data['data']['occupation']);
                setPhone(response.data['data']['phone']);
                setDtNascimento(response.data['data']['birth_date']);
                setCep(response.data['data']['address']['zip_code']);
                setEstado(response.data['data']['address']['state']);
                setAddress(response.data['data']['address']['address']);
                setNumberAddress(response.data['data']['address']['number']);
                setCity(response.data['data']['address']['city']);
                setBairro(response.data['data']['address']['neighborhood']);
                setPais(response.data['data']['address']['country']);
                setComplemento(response.data['data']['address']['additional_address']);
            }
        }
        loadProperty();

    }, []);


    async function updateProperty() {
        const companie_id = localStorage.getItem('companie_id');
        const access_token = localStorage.getItem('token_user');
        console.log('antes POSR');
        const response = await api.put(`company/${companie_id}/property-owner/${id}`,
            {
                "name": propety,
                "email": email,
                "cpf": cpf,
                "marital_status_id": 1,
                "occupation": ocupacao,
                "birth_date": dtNascimento,
                "phone": phone,
                "address": {
                    "zip_code": cep,
                    "state": estado,
                    "address": address,
                    "number": numberAddress,
                    "city": city,
                    "neighborhood": bairro,
                    "country": pais,
                    "additional_address": complemento
                },
                "property_ids": []
            },
            {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            });
        // localStorage.setItem('companie_id', '');
        history.push('/property');


    }


    async function handleSubmit() {
        const companie_id = localStorage.getItem('companie_id');
        const access_token = localStorage.getItem('token_user');
        console.log('antes POSR');
        const response = await api.post(`company/3/property-owner`,
            {
                "name": propety,
                "email": email,
                "cpf": cpf,
                "marital_status_id": 1,
                "occupation": ocupacao,
                "birth_date": dtNascimento,
                "phone": phone,
                "address": {
                    "zip_code": cep,
                    "state": estado,
                    "address": address,
                    "number": numberAddress,
                    "city": city,
                    "neighborhood": bairro,
                    "country": pais,
                    "additional_address": complemento
                },
                "property_ids": []
            },
            {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            });
        // localStorage.setItem('companie_id', '');
        history.push('/property');


    }

    return (
        <div className="newProperty__container">
            <Header />
            <div className="newProperty__container">
                <form>
                    <div className="form-container">
                        <div className="first-line">
                            <label htmlFor="propety">Empresa *</label>
                            <input
                                id="property"
                                type="text"
                                placeholder="Seu nome completo"
                                value={propety}
                                onChange={event => setProperty(event.target.value)}
                            />
                        </div>
                        <div className="first-line">
                            <label>Email</label>
                            <input
                                id="email"
                                type="e-mail"
                                placeholder="Digite Seu e-mail"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>
                        <div>
                            <label>CPF</label>
                            <input
                                id="cpf"
                                type="text"
                                placeholder="Digite Seu CPF"
                                value={cpf}
                                onChange={event => setCpf(event.target.value)}
                            />
                        </div>
                        <div>
                            <label>Ocupação</label>
                            <input
                                id="ocupacao"
                                type="text"
                                placeholder="Digite Sua Ocupação"
                                value={ocupacao}
                                onChange={event => setOcupacao(event.target.value)}
                            />
                        </div>
                        <div>
                            <label>Data de Nascimento</label>
                            <input
                                id="Dtnascimento"
                                type="date"
                                placeholder="Digite Sua data de Nascimento"
                                value={dtNascimento}
                                onChange={event => setDtNascimento(event.target.value)}
                                // required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                            />
                        </div>
                        <div>

                            <label>Telefone</label>
                            <input
                                id="phone"
                                type="text"
                                placeholder="Digite Seu Telefone"
                                value={phone}
                                onChange={event => setPhone(event.target.value)}
                            />
                        </div>
                        <div>

                            <label>Cep</label>
                            <input
                                id="cep"
                                type=""
                                placeholder="Digite Seu CEP (Formato : 12345-678)"
                                value={cep}
                                onChange={event => setCep(event.target.value)}
                            />
                        </div>
                        <div>

                            <label>Endereço</label>
                            <input
                                id="address"
                                type="text"
                                placeholder="Digite Seu Endereço"
                                value={address}
                                onChange={event => setAddress(event.target.value)}
                            />
                        </div>
                        <div>
                            <label>Numero</label>
                            <input
                                id="numberAdress"
                                type="text"
                                placeholder="Nº"
                                value={numberAddress}
                                onChange={event => setNumberAddress(event.target.value)}
                            />
                        </div>
                        <div>
                            <label>Cidade</label>
                            <input
                                id="city"
                                type="text"
                                placeholder="Digite Sua Cidade"
                                value={city}
                                onChange={event => setCity(event.target.value)}
                            />
                        </div>
                        <div>
                            <label>Bairro</label>
                            <input
                                id="bairro"
                                type="text"
                                placeholder="Digite Seu Bairro"
                                value={bairro}
                                onChange={event => setBairro(event.target.value)}
                            />
                        </div>
                        <div>
                            <label>Estado</label>
                            <input
                                id="estate"
                                type="text"
                                placeholder="Digite Seu Estado"
                                value={estado}
                                onChange={event => setEstado(event.target.value)}
                            />
                        </div>
                        <div className="last-line">
                            <label>País</label>
                            <input
                                id="pais"
                                type="Text"
                                placeholder="Digite Seu País"
                                value={pais}
                                onChange={event => setPais(event.target.value)}
                            />
                        </div>
                        <div className="last-line">
                            <label>Complemento</label>
                            <input
                                id="complemento"
                                type="text"
                                placeholder="Complemento"
                                value={complemento}
                                onChange={event => setComplemento(event.target.value)}
                            />
                        </div>
                    </div>
                </form>
                <div className="buttons-form">
                    {isEdit == "true"
                        ? <button className="btn" onClick={updateProperty}>Salvar Proprietário</button>
                        : <button className="btn" onClick={handleSubmit}>Cadastrar Proprietário</button>
                    }
                </div>


            </div>
        </div>

    )
}