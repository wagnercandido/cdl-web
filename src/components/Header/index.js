import React, { Component } from 'react';

import M from 'materialize-css';
import { Form, Spinner, Alert } from 'react-bootstrap';
import { TextInput, Checkbox, Button, Navbar, NavItem } from 'react-materialize';

import './styles.css';
import api from '../../services/api';

import Logo from '../../assets/logo-cdl.png';

import Footer from '../Footer';

export default class Header extends Component {
    state = {
        usuario: ''
    }

    componentDidMount() {
        this.getLoggedUser();
        M.AutoInit();
    }

    getLoggedUser = () => {
        this.setState({ usuario: localStorage.getItem('data') })
    }

    sair = () => {
        localStorage.removeItem('data');
        localStorage.removeItem('data_id');
        this.props.history.push('/entrar');
    }

    render() {
        return (
            <Navbar className="nav-header" brand={<a><img src={Logo} /></a>} alignLinks="right" sidenav={<li />}>
                <NavItem href="">{this.state.usuario}</NavItem>
                <NavItem href="" title="Sair" onClick={this.sair}><i className="material-icons">power_settings_new</i></NavItem>
            </Navbar>
        );
    }
}
