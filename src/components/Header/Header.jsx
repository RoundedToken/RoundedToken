import styles from './Header.module.scss';
import React from 'react';
import logo from '../../assets/logo.svg';
import { Within } from '@theme-toggles/react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/themeSlice';
import '@theme-toggles/react/css/Within.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.color);

    return (
        <div className={styles.header}>
            <div style={{ position: 'absolute', left: '0' }}>
                <Within
                    className={styles.toggle}
                    duration={1500}
                    onToggle={() => dispatch(toggleTheme())}
                    toggled={theme === 'dark' ? true : false}
                />
            </div>
            <div className={styles.logoBlock}>
                <Link to="/">
                    <div className={styles.logoCont}>
                        <h1>R</h1>
                        <div className={styles.logo}>
                            <img
                                className={
                                    theme === 'light' ? styles.filterLight : styles.filterDark
                                }
                                width={32}
                                height={32}
                                src={logo}
                                alt="Logo"
                            />
                        </div>
                        <h1>undedT</h1>
                        <div className={styles.logo}>
                            <img
                                className={
                                    theme === 'light' ? styles.filterLight : styles.filterDark
                                }
                                width={32}
                                height={32}
                                src={logo}
                                alt="Logo"
                            />
                        </div>
                        <h1>ken</h1>
                    </div>
                </Link>
            </div>
            <div style={{ position: 'absolute', right: '0', marginRight: '10px' }}>
                <Link to={'/versions'}>
                    <h2>About</h2>
                </Link>
            </div>
        </div>
    );
};

export default Header;
