import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../redux/inputSlice';
import styles from './Switcher.module.scss';

const Switcher = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.input.mode);

    return (
        <div className={styles.switcher}>
            <h5>Full table mode</h5>
            <label className={styles.switch}>
                <input type="checkbox" onChange={() => dispatch(setMode())} checked={mode} />
                <span className={styles.slider}></span>
            </label>
        </div>
    );
};

export default Switcher;
