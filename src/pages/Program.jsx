import React from 'react';
import InputWindow from '../components/InputWindow/InputWindow';
import OutputWindow from '../components/OutputWindow/OutputWindow';
import SettingsComponent from '../components/SettingsComponent/SettingsComponent';

const Program = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <SettingsComponent />
            <InputWindow />
            <OutputWindow />
        </div>
    );
};

export default Program;
