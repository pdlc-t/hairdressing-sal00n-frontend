import React from 'react';
import './toggle-button.module.css';

const ToggleButton = ({ activeView, setView }) => {
    return (
        <div className="toggle-container">
            <button
                className={`toggle-button ${activeView === 'products' ? 'active' : ''}`}
                onClick={() => setView('products')}
                disabled={activeView === 'products'}
            >
                Produkty
            </button>
            <button
                className={`toggle-button ${activeView === 'services' ? 'active' : ''}`}
                onClick={() => setView('services')}
                disabled={activeView === 'services'}
            >
                Usługi
            </button>
        </div>
    );
};

export default ToggleButton;
