import React from 'react';
import { Tooltip } from 'react-tooltip';
import styles from './TechnologyItem.module.scss';

const TechnologyItem = ({ src, id, used }) => {
    return (
        <div className={used ? styles.itemUsed : styles.item}>
            <img src={src} alt="" width={42} height={42} id={id} />
            <Tooltip content={id} anchorId={id} place="top" className={styles.tooltip} />
        </div>
    );
};

export default TechnologyItem;
