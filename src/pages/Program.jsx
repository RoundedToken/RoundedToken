import React from 'react';
import InputWindow from '../components/InputWindow/InputWindow';
import OutputWindow from '../components/OutputWindow/OutputWindow';
import SignWindow from '../components/SignWindow/SignWindow';

const Program = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <InputWindow />
            <SignWindow />
            <OutputWindow />
        </div>
    );
};

export default Program;
