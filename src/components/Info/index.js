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

    render() {
        return (
            <div>
                <div className="main">
                    <div className="cabecalho">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={Logo} />
                                </div>
                                <div className="col-md-10">
                                    <h3>Curso de Dinâmica para Líderes - CDL 2019</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="corpo">
                        <div className="row">
                            <div className="col-2">

                            </div>
                            <div className="10">

                            </div>
                        </div>
                    </div>
                </div>
                <Footer className="margincorrect" />
            </div>
        );
    }
}
