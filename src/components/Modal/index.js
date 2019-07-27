import React, { Component } from 'react';

import './styles.css';
import { TextInput, Checkbox, Button, Table, Preloader, Modal } from 'react-materialize';
import M from 'materialize-css';

export default class Modal extends Component {

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <Modal header="Modal Header" fixedFooter trigger={<Button />}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Modal>
        );
    }
}
