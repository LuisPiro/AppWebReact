import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyConverter from './components/CurrencyConverter';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
    return (
        <ErrorBoundary>
            <CurrencyConverter />
        </ErrorBoundary>
    );
}

export default App;
