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
                    <a><label>Admin</label></a>
                    <label className="labelFooter">Desenvolvido por <a target="_blank" href='https://www.linkedin.com/in/wagner-candido-331a0212b/'>Wagner Candido</a></label>
                </div>
            </div>
        );
    }
}
