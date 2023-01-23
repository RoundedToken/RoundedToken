import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAbsoluteLimit, setCustom } from '../../redux/inputSlice';
import DecimalsLimit from '../DecimalsLimit/DecimalsLimit';
import DecimalsRadio from '../DecimalsRadio/DecimalsRadio';
import LimitOptions from '../LimitOptions/LimitOptions';
import PercentRadio from '../PercentRadio/PercentRadio';
import styles from './SettingsComponent.module.scss';
import closeIcon from '../../assets/close.svg';
import { toast } from 'react-toastify';

const SettingsComponent = () => {
    const dispatch = useDispatch();
    const close = useSelector((state) => state.settings.close);
    const custom = useSelector((state) => state.input.custom);
    const limitOptions = useSelector((state) => state.input.limitOptions);
    const absoluteLimit = useSelector((state) => state.input.absoluteLimit);
    const inputRef = useRef();

    const clearAbsoluteLimit = () => {
        dispatch(setAbsoluteLimit(''));
        inputRef.current.focus();
        toast.success('Cleared!');
    };

    return (
        <div className={close ? styles.settingsComponentClose : styles.settingsComponentOpen}>
            {!close && (
                <>
                    <div className={styles.vertical}>
                        <h5>Decimals</h5>
                        <div className={styles.decimals}>
                            <DecimalsRadio id={1} value={'6'} />
                            <DecimalsRadio id={2} value={'8'} />
                            <DecimalsRadio id={3} value={'18'} />
                        </div>
                    </div>
                    <div className={styles.vertical}>
                        <LimitOptions />
                        {limitOptions === '%' && (
                            <div className={styles.percents}>
                                <PercentRadio id={4} value={'0.05'} />
                                <PercentRadio id={5} value={'0.1'} />
                                <PercentRadio id={6} value={'0.5'} />
                                <PercentRadio id={7} value={'1'} />
                                <PercentRadio id={8} value={custom} />
                                <input
                                    placeholder="Custom"
                                    type={'number'}
                                    value={custom}
                                    onChange={(e) => dispatch(setCustom(e.target.value))}
                                />
                            </div>
                        )}
                        {limitOptions === 'decimals' && <DecimalsLimit />}
                        {limitOptions === 'absolute' && (
                            <div className={styles.input}>
                                <input
                                    placeholder="Custom absolute limit"
                                    ref={inputRef}
                                    type={'number'}
                                    value={absoluteLimit}
                                    onChange={(e) => dispatch(setAbsoluteLimit(e.target.value))}
                                />
                                {absoluteLimit !== '' && (
                                    <button onClick={clearAbsoluteLimit} title="Clear">
                                        <img src={closeIcon} alt="close" width={16} height={16} />
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default SettingsComponent;
