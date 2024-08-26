import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Actualiza el estado para que el siguiente renderizado muestre la UI alternativa.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Puedes registrar el error en un servicio de reporte de errores
        console.error('Error Boundary caught an error', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Puedes renderizar cualquier UI alternativa
            return (
                <div>
                    <h1>Oops! Something went wrong.</h1>
                    <button onClick={() => window.location.reload()}>Reload</button>
                </div>
            );
        }

        return this.props.children; 
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
