import React from 'react';
import styles from './DecimalsRadio.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setDecimals } from '../../redux/inputSlice';

const DecimalsRadio = ({ value, id }) => {
    const decimals = useSelector((state) => state.input.decimals);
    const dispatch = useDispatch();

    return (
        <div className={styles.decimalRadio}>
            <input
                className={styles.input}
                id={id}
                type="radio"
                name="digits"
                onChange={() => dispatch(setDecimals(value))}
                checked={decimals === value ? true : false}
            />
            <label htmlFor={id} className={styles.label}>
                {value}
            </label>
        </div>
    );
};

export default DecimalsRadio;
