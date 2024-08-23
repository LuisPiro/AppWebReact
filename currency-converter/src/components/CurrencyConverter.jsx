import React, { useState } from 'react';
import axios from 'axios';
import '../styles/CurrencyConverter.css';

const CurrencyConverter = () => {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [result, setResult] = useState(null);

    const currencies = [
        { code: 'USD', name: 'United States Dollar' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'British Pound Sterling' },
        { code: 'JPY', name: 'Japanese Yen' },
        { code: 'AUD', name: 'Australian Dollar' },
        { code: 'CAD', name: 'Canadian Dollar' },
        { code: 'CHF', name: 'Swiss Franc' },
        { code: 'CLP', name: 'Chilean Pesos' }
    ];

    const handleConversion = async () => {
        if (amount === '') return;
        try {
            const response = await axios.get(`https://v6.exchangerate-api.com/v6/30f1158b553f63c3e8f4d596/pair/${fromCurrency}/${toCurrency}`);
            setResult((response.data.conversion_rate * amount).toFixed(2));
        } catch (error) {
            console.error('Error fetching conversion data:', error);
        }
    };

    return (
        <div className="currency-converter">
            <h1>Currency Converter</h1>
            <div className="converter-form">
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="input-amount"
                />
                <div className="currency-select">
                    <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                        {currencies.map((currency) => (
                            <option key={currency.code} value={currency.code}>
                                {currency.code} - {currency.name}
                            </option>
                        ))}
                    </select>
                    <span>to</span>
                    <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                        {currencies.map((currency) => (
                            <option key={currency.code} value={currency.code}>
                                {currency.code} - {currency.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button onClick={handleConversion}>Convert</button>
            </div>
            {result && (
                <div className="conversion-result">
                    <h2>Result: {result} {toCurrency}</h2>
                </div>
            )}
        </div>
    );
};

export default CurrencyConverter;
