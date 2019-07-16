import React, { Component } from 'react';
import { Toast } from 'react-bootstrap';


export default class services extends Component {

    state = {
        tipo: '',
        mensagem: '',
    }

    componentDidMount() {
        this.setState({ tipo: this.props.tipo, mensagem: this.props.mensagem });
    }

    render() {
        return (
            <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                    position: 'relative',
                    minHeight: '80px',
                    'font-size': '14px'
                }}
            >
                <Toast
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: -80,
                        background: this.state.tipo === 'success' ? 'green' : 'red',
                        color: '#FFF',
                    }}
                >
                    <Toast.Body><strong className="mr-auto">{this.state.mensagem}</strong></Toast.Body>
                </Toast>
            </div>
        );
    }
}
