import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Text.module.scss';

const Text = ({ eng, rus }) => {
    const lang = useSelector((state) => state.language.lang);

    return <div className={styles.text}>{lang === 'eng' ? eng : rus}</div>;
};

export default Text;
