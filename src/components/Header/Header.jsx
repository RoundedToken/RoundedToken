import styles from './Header.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import ProgramName from '../ProgramName/ProgramName';
import ThemeSwitcher from '../Options/Options';
import { useDispatch } from 'react-redux';
import { setPage } from '../../redux/pageSlice';

const Header = () => {
    const dispatch = useDispatch();

    return (
        <div className={styles.header}>
            <ThemeSwitcher />
            <ProgramName />
            <div style={{ position: 'absolute', right: '25px', marginRight: '10px' }}>
                <Link
                    title="Go to about page"
                    to={'/versions'}
                    onClick={() => dispatch(setPage('versions'))}
                >
                    <h2>About</h2>
                </Link>
            </div>
        </div>
    );
};

export default Header;
