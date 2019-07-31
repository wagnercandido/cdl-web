import React, { Component } from 'react';

import './styles.css';
import { Button } from 'react-materialize';
import M from 'materialize-css';

import Logo from '../../assets/logo-cdl.png';

import Footer from '../Footer';


export default class Info extends Component {

    componentDidMount() {
        M.AutoInit();
    }

    redirectInscricao = () => {
        this.props.history.push('/inscricao');
    }

    render() {
        return (
            <div>
                <div className="main-container">
                    <div className="cabecalho">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2 text-center">
                                    <img src={Logo} />
                                </div>
                                <div className="col-md-10 title">
                                    <h3>Curso de Dinâmica para Líderes - CDL 2019</h3>
                                    <p><label><i class="material-icons">location_on</i><div className="body-label">Hospedagem: São Clemente</div></label></p>
                                    <p><label><i class="material-icons">location_on</i>Curso: Escola Técnica Redentorista</label></p>
                                    <p><label><i class="material-icons">access_time</i>06 de Setembro de 2019 - 08 de Setembro de 2019</label></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="corpo">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2">
                                </div>
                                <div className="col-md-10">
                                    <p className="title-informes">
                                        INFORMES E INSTRUÇÕES DO CURSO
                                    </p>
                                    <ul>
                                        <li>
                                            <label>
                                                Necessário: Material de higiene pessoal, roupa de cama, pertences pessoais, ventilador (responsabilidade do cursista).
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                Em caso de alergia, medicamento controlado ou restrição com alimentação,
                                                descreva no campo de restrições da inscrição ou entre em contato com a coordenação geral para comunicação.
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                Inscrição no valor de R$ 100,00 (Só será confirmada após o pagamento).
                                            </label>
                                            <label>
                                                O pagamento da inscrição pode ser em dinheiro, cartão de crédito em até 3x ou via transferência ou depósito.
                                            </label>
                                            <label>
                                                <strong>Inscrições pelo cartão de crédito, só estarão disponíveis até o dia 28/08/2019.</strong>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12 text-right">
                                    <Button onClick={() => this.redirectInscricao()} waves="light">FAZER INSCRIÇÃO AGORA</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer className="margincorrect" />
            </div>
        );
    }
}
