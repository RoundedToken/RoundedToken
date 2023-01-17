import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Program from '../../pages/Program';
import Versions from '../../pages/Versions';
import styles from './Main.module.scss';

const Main = () => {
    return (
        <div className={styles.main}>
            <Routes>
                <Route path="/" element={<Program />} />
                <Route path="/versions" element={<Versions />} />
                <Route path="*" element={'Not Found'} />
            </Routes>
        </div>
    );
};

export default Main;
