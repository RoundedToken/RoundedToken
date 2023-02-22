import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPage } from '../../redux/pageSlice';
import Text from '../Text/Text';
import styles from './Navbar.module.scss';

const Navbar = () => {
    const lang = useSelector((state) => state.language.lang);
    const isAuth = useSelector((state) => state.auth.isAuth);
    const page = useSelector((state) => state.page.page);
    const dispatch = useDispatch();
    const active = { color: 'var(--text-color)', textDecoration: 'underline' };

    useEffect(() => {}, [page]);

    return (
        <div className={styles.navbar}>
            <Link
                title={lang === 'eng' ? 'Go to main page' : 'Перейти на главную страницу'}
                to={'/'}
                onClick={() => dispatch(setPage(''))}
            >
                <h2 style={page === '' ? active : null}>
                    <Text eng={'Main'} rus={'Главная'} />
                </h2>
            </Link>
            <Link
                title={lang === 'eng' ? 'Go to about page' : 'Перейти на страницу описания'}
                to={'/versions'}
                onClick={() => dispatch(setPage('versions'))}
            >
                <h2 style={page === 'versions' ? active : null}>
                    <Text eng={'About'} rus="Описание" />
                </h2>
            </Link>
            {!isAuth && (
                <>
                    <Link
                        title={
                            lang === 'eng'
                                ? 'Go to authorization page'
                                : 'Перейти на страницу авторизации'
                        }
                        to={'/auth'}
                        onClick={() => dispatch(setPage('auth'))}
                    >
                        <h2 style={page === 'auth' ? active : null}>
                            <Text eng={'Log in'} rus="Авторизация" />
                        </h2>
                    </Link>
                    <Link
                        title={
                            lang === 'eng'
                                ? 'Go to registration page'
                                : 'Перейти на страницу регистрации'
                        }
                        to={'/register'}
                        onClick={() => dispatch(setPage('register'))}
                    >
                        <h2 style={page === 'register' ? active : null}>
                            <Text eng={'Sign up'} rus="Регистрация" />
                        </h2>
                    </Link>
                </>
            )}
        </div>
    );
};

export default Navbar;
