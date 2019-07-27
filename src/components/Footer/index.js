import React, { Component } from 'react';

import './styles.css';
import M from 'materialize-css';

export default class Rodape extends Component {
    state = {
        logged: false
    }

    componentDidMount() {
        M.AutoInit();
        this.painelPage();
    }

    redirectToLogin = () => {
        // this.props.history.push('/entrar'); //Não está funcionando
        window.open(window.location.href + 'entrar');
    }

    painelPage = () => {
        if (String(window.location.href).indexOf('painel') >= 0) {
            this.setState({ logged: true });
        }
    }

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <label style={{ display: !this.state.logged ? '' : 'none' }}><a onClick={() => this.redirectToLogin()}>Admin</a></label>
                    <label className="labelFooter">Desenvolvido por <a target="_blank" href='https://www.linkedin.com/in/wagner-candido-331a0212b/'>Wagner Candido</a></label>
                </div>
            </div>
        );
    }
}
