import React from 'react';
import { useSelector } from 'react-redux';
import styles from './SignWindow.module.scss';
import copy from '../../assets/copy.svg';
import Switcher from '../Switcher/Switcher';

function copyEvent(id) {
    var str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    document.execCommand('Copy');
}

const SignWindow = () => {
    const decimals = useSelector((state) => state.input.decimals);
    const theme = useSelector((state) => state.theme.color);
    let sign = BigInt('0x' + '01'.padEnd(64, '0')).toString();
    sign = sign.slice(0, sign.length - decimals) + '.' + sign.slice(sign.length - decimals);

    return (
        <div className={styles.signBlock}>
            <div className={styles.sign}>
                <h5>Maximal approve number</h5>
                <div id="sign">{sign}</div>
                <button onClick={() => copyEvent('sign')}>
                    <img
                        src={copy}
                        alt="copy"
                        width={16}
                        height={16}
                        className={theme === 'dark' ? styles.filterDark : styles.filterLight}
                    />
                </button>
            </div>
            <Switcher />
        </div>
    );
};

export default SignWindow;
/* global BigInt */
