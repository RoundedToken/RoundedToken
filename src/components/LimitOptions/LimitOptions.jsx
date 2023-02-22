import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLimitOptions } from '../../redux/inputSlice';
import Text from '../Text/Text';
import styles from './LimitOptions.module.scss';

const LimitOptions = () => {
    const dispatch = useDispatch();
    const lang = useSelector((state) => state.language.lang);
    const limitOptions = useSelector((state) => state.input.limitOptions);

    useEffect(() => {
        if (limitOptions === 'in %') dispatch(setLimitOptions('в %'));
        if (limitOptions === 'by decimals') dispatch(setLimitOptions('по десятичным'));
        if (limitOptions === 'absolute') dispatch(setLimitOptions('абсолютный'));
        if (limitOptions === 'в %') dispatch(setLimitOptions('in %'));
        if (limitOptions === 'по десятичным') dispatch(setLimitOptions('by decimals'));
        if (limitOptions === 'абсолютный') dispatch(setLimitOptions('absolute'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang]);

    return (
        <div className={styles.limitOptions}>
            <h5>
                <Text eng={'Difference limit'} rus="Предел разницы" />
            </h5>
            <select
                value={limitOptions}
                onChange={(e) => dispatch(setLimitOptions(e.target.value))}
            >
                <option>{lang === 'eng' ? 'in %' : 'в %'}</option>
                <option>{lang === 'eng' ? 'by decimals' : 'по десятичным'}</option>
                <option>{lang === 'eng' ? 'absolute' : 'абсолютный'}</option>
            </select>
        </div>
    );
};

export default LimitOptions;
