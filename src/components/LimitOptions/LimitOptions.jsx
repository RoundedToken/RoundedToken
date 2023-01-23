import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLimitOptions } from '../../redux/inputSlice';
import styles from './LimitOptions.module.scss';

const LimitOptions = () => {
    const dispatch = useDispatch();
    const limitOptions = useSelector((state) => state.input.limitOptions);

    return (
        <div className={styles.limitOptions}>
            <h5>Difference limit</h5>
            <select
                value={limitOptions}
                onChange={(e) => dispatch(setLimitOptions(e.target.value))}
            >
                <option>%</option>
                <option>decimals</option>
                <option>absolute</option>
            </select>
        </div>
    );
};

export default LimitOptions;
