import React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import './toggle-switch.module.css';

const ToggleSwitch = ({ activeView, setView }) => {
    const isChecked = activeView === 'services';

    const handleToggle = () => {
        setView(isChecked ? 'products' : 'services');
    };

    return (
        <div className="toggle-container">
            <FormControlLabel
                control={
                    <Switch
                        checked={isChecked}
                        onChange={handleToggle}
                        color="primary"
                    />
                }
                label={isChecked ? 'Usługi' : 'Produkty'}
                labelPlacement="start"
            />
        </div>
    );
};

export default ToggleSwitch;