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
                <h3>3.3 :</h3>
                <ul>
                    <li>Fixed lexicographical mistakes</li>
                    <li>New technologies added</li>
                    <li>Minor bugs fixed</li>
                    <li>W3Schools profile added</li>
                </ul>
            </div>
        </div>
    );
};

export default WhatsNew;
