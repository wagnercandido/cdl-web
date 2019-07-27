import React, { Component } from 'react';

import M from 'materialize-css';
import { Form, Spinner, Alert } from 'react-bootstrap';
import { TextInput, Checkbox, Button, Navbar, NavItem } from 'react-materialize';

import './styles.css';
import api from '../../services/api';

import Logo from '../../assets/logo-cdl.png';

import Footer from '../Footer';

export default class Header extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    render() {
        return (
            <Navbar className="nav-header" brand={<a><img src={Logo}/></a>} alignLinks="right" sidenav={<li />}>
                <NavItem href="">Usuário</NavItem>
                <NavItem href="components.html">Sair</NavItem>
            </Navbar>
        );
    }
}
