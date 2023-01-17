import React from 'react';
import styles from './Footer.module.scss';
import email from '../../assets/email.svg';
import github from '../../assets/github.svg';
import codewars from '../../assets/codewars.svg';
import { useSelector } from 'react-redux';
import hackerrank from '../../assets/hackerrank.svg';

function copyEvent(id) {
    var str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    document.execCommand('Copy');
}

const Footer = () => {
    const theme = useSelector((state) => state.theme.color);

    return (
        <div className={styles.footer}>
            <div>Write for suggestions:</div>
            <div id="email" style={{ marginInline: '10px', fontStyle: 'italic' }}>
                stepan.zip.07@gmail.com
            </div>
            <div className={styles.links}>
                <button onClick={() => copyEvent('email')}>
                    <img
                        className={theme === 'dark' ? styles.filterDark : styles.filterLight}
                        src={email}
                        alt="email"
                        width={32}
                        height={32}
                    />
                </button>
                <a rel="noreferrer" target={'_blank'} href="https://github.com/RoundedToken">
                    <img
                        className={theme === 'dark' ? styles.filterDark : styles.filterLight}
                        src={github}
                        alt="github"
                    />
                </a>
                <a
                    rel="noreferrer"
                    target={'_blank'}
                    href="https://www.codewars.com/users/RoundedToken"
                >
                    <img
                        width={32}
                        height={32}
                        className={theme === 'dark' ? styles.filterDark : styles.filterLight}
                        src={codewars}
                        alt="github"
                    />
                </a>
                <a
                    rel="noreferrer"
                    target={'_blank'}
                    href="https://www.hackerrank.com/RoundedToken"
                >
                    <img
                        width={32}
                        height={32}
                        className={theme === 'dark' ? styles.filterDark : styles.filterLight}
                        src={hackerrank}
                        alt="github"
                    />
                </a>
            </div>
        </div>
    );
};

export default Footer;
