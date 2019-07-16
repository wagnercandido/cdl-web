import React, { Component } from 'react';
// import { Footer } from 'react-materialize';
import M from 'materialize-css';

import './styles.css';

export default class Rodape extends Component {

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <a>Admin</a>
                    <label>Desenvolvido por Wagner Candido</label>
                </div>
            </div>
        );
    }
}
