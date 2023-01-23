import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFloat } from '../../redux/inputSlice';
import styles from './InputWindow.module.scss';
import close from '../../assets/close.svg';
import { useRef } from 'react';
import { toast } from 'react-toastify';

const InputWindow = () => {
    const dispatch = useDispatch();
    const float = useSelector((state) => state.input.float);
    const inputRef = useRef();

    const check = (str) => {
        return str.includes('-') ? false : true;
    };
    const clearFloat = () => {
        dispatch(setFloat(''));
        inputRef.current.focus();
        toast.success('Cleared!');
    };

    return (
        <div className={styles.inputCont}>
            <div className={styles.inputBlock}>
                <div className={styles.input}>
                    <input
                        ref={inputRef}
                        placeholder="Token"
                        type={'number'}
                        value={float}
                        onChange={(e) => {
                            check(e.target.value) === true
                                ? dispatch(setFloat(e.target.value))
                                : dispatch(setFloat(''));
                        }}
                    />
                    {float !== '' && (
                        <button onClick={clearFloat} title="Clear">
                            <img src={close} alt="close" width={16} height={16} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InputWindow;
