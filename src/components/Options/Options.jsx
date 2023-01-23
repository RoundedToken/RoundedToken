import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Options.module.scss';
import { Within } from '@theme-toggles/react';
import { toggleTheme } from '../../redux/themeSlice';
import '@theme-toggles/react/css/Within.css';
import settings from '../../assets/settings.svg';
import { setClose } from '../../redux/settingsSlice';
import { toast } from 'react-toastify';

const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.color);
    const page = useSelector((state) => state.page.page);
    const close = useSelector((state) => state.settings.close);
    const update = useSelector((state) => state.update.status);
    const changeTheme = () => {
        dispatch(toggleTheme());
        toast.success(theme === 'dark' ? 'Light theme!' : 'Dark theme!');
    };
    const changeSettings = () => {
        dispatch(setClose());
        toast.success(close ? 'Settings opened!' : 'Settings closed!');
    };

    return (
        <div className={styles.themeSwitcher}>
            <Within
                title="Theme"
                className={styles.toggle}
                duration={1500}
                onToggle={changeTheme}
                toggled={theme === 'dark' ? true : false}
            />
            {!update && page === 'program' && (
                <button title="Settings" className={styles.settings} onClick={changeSettings}>
                    <img
                        className={theme === 'dark' ? styles.filterDark : styles.filterLight}
                        src={settings}
                        height={48}
                        width={48}
                        alt="settings"
                    />
                </button>
            )}
        </div>
    );
};

export default ThemeSwitcher;
