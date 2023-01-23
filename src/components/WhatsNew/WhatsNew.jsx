import React from 'react';
import styles from './WhatsNew.module.scss';
import close from '../../assets/close.svg';
import { useDispatch } from 'react-redux';
import { closeUpdate } from '../../redux/updateSlice';
import { toast } from 'react-toastify';

const WhatsNew = () => {
    const dispatch = useDispatch();
    const onClickClose = () => {
        dispatch(closeUpdate());
        toast.success('Closed!');
    };
    return (
        <div className={styles.whatsNew}>
            <h1>What's new:</h1>
            <button onClick={onClickClose}>
                <img src={close} alt="close" width={32} height={32} />
            </button>
            <div className={styles.list}>
                <h3>3.2 :</h3>
                <ul>
                    <li>Design bugs fixed</li>
                    <li>Minimize design</li>
                    <li>Titles added</li>
                    <li>Settings added</li>
                    <li>Pop-up notifications added</li>
                    <li>"What's new" window added</li>
                    <li>"Float" renamed to "token"</li>
                    <li>Tooltips added</li>
                    <li>Input clear button added</li>
                    <li>New technologies added</li>
                    <li>Difference limit options added ("decimals" and "absolute")</li>
                </ul>
            </div>
        </div>
    );
};

export default WhatsNew;
