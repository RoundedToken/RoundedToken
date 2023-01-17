import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCustom, setFloat } from '../../redux/inputSlice';
import DecimalsRadio from '../DecimalsRadio/DecimalsRadio';
import PercentRadio from '../PercentRadio/PercentRadio';
import styles from './InputWindow.module.scss';

const InputWindow = () => {
    const dispatch = useDispatch();
    const float = useSelector((state) => state.input.float);
    const custom = useSelector((state) => state.input.custom);

    const check = (str) => {
        return str.includes('-') ? false : true;
    };

    return (
        <div className={styles.inputCont}>
            <div className={styles.inputBlock}>
                <h5>Token with fixed decimals</h5>
                <DecimalsRadio id={1} value={'6'} />
                <DecimalsRadio id={2} value={'8'} />
                <DecimalsRadio id={3} value={'18'} />
                <input
                    placeholder="Float"
                    type={'number'}
                    value={float}
                    onChange={(e) => {
                        check(e.target.value) === true
                            ? dispatch(setFloat(e.target.value))
                            : dispatch(setFloat(''));
                    }}
                />
            </div>
            <div className={styles.inputBlock}>
                <h5>Difference limit, %</h5>
                <PercentRadio id={4} value={'0.05'} />
                <PercentRadio id={5} value={'0.1'} />
                <PercentRadio id={6} value={'0.5'} />
                <PercentRadio id={7} value={'1'} />
                <PercentRadio id={8} value={custom} />
                <input
                    style={{ width: '65px' }}
                    placeholder="Custom"
                    type={'number'}
                    value={custom}
                    onChange={(e) => dispatch(setCustom(e.target.value))}
                />
            </div>
        </div>
    );
};

export default InputWindow;
