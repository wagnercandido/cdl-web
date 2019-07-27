import React, { Component } from 'react';

import './styles.css';
import M from 'materialize-css';

export default class Rodape extends Component {

    componentDidMount() {
        M.AutoInit();
        console.log('log history', window.location.href);
        
    }

    redirectToLogin = () => {
        // this.props.history.push('/entrar'); //Não está funcionando
        window.open(window.location.href+'entrar');
    }

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <label><a onClick={() => this.redirectToLogin()}>Admin</a></label>
                    <label className="labelFooter">Desenvolvido por <a target="_blank" href='https://www.linkedin.com/in/wagner-candido-331a0212b/'>Wagner Candido</a></label>
                </div>
            </div>
        );
    }
}
