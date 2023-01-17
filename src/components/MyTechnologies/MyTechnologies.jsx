import React from 'react';
import styles from './MyTechnologies.module.scss';
import nodeJs from '../../assets/node-js.svg';
import html from '../../assets/html.svg';
import babel from '../../assets/babel.svg';
import cssModules from '../../assets/css-modules.png';
import es6 from '../../assets/es6.png';
import git from '../../assets/git.svg';
import javaScript from '../../assets/javascript.svg';
import jsx from '../../assets/jsx.svg';
import npm from '../../assets/npm.svg';
import prettier from '../../assets/prettier.svg';
import reactRouter from '../../assets/react-router.svg';
import vs from '../../assets/vs.svg';
import tailwind from '../../assets/tailwind.svg';
import sass from '../../assets/sass.svg';
import redux from '../../assets/redux.svg';
import react from '../../assets/react.svg';
import css from '../../assets/css3.svg';

const MyTechnologies = () => {
    return (
        <div className={styles.technologies}>
            <div className={styles.grid}>
                <div>
                    <h1>Technologies I learned:</h1>
                </div>
                <div className={styles.rowOdd}>
                    <div className={styles.item} title={'CSS Modules'}>
                        <img src={cssModules} alt="" width={42} height={42} />
                    </div>
                    <div className={styles.item} title={'CSS'}>
                        <img src={css} alt="" width={42} height={42} />
                    </div>
                    <div className={styles.item} title={'React Router'}>
                        <img src={reactRouter} alt="" width={42} height={42} />
                    </div>
                </div>
                <div className={styles.rowEven}>
                    <div className={styles.item} title={'Redux Toolkit'}>
                        <img src={redux} alt="" width={42} height={42} />
                    </div>
                    <div className={styles.item} title={'React'}>
                        <img src={react} alt="" width={42} height={42} />
                    </div>
                    <div className={styles.item} title={'Sass'}>
                        <img src={sass} alt="" width={42} height={42} />
                    </div>
                    <div className={styles.item} title={'ECMAScript 6'}>
                        <img src={es6} alt="" width={42} height={42} />
                    </div>
                </div>
                <div className={styles.rowOdd}>
                    {/* <div className={styles.item}>
                        <img alt="" width={42} height={42} />
                    </div> */}
                    <div className={styles.item} title={'HTML5'}>
                        <img src={html} alt="" width={42} height={42} />
                    </div>
                    <div className={styles.item} title={'Node.js'}>
                        <img src={nodeJs} alt="" width={42} height={42} />
                    </div>
                    <div className={styles.item} title={'JavaScript'}>
                        <img src={javaScript} alt="" width={42} height={42} />
                    </div>
                    {/* <div className={styles.item}>
                        <img alt="" width={42} height={42} />
                    </div> */}
                </div>
                <div className={styles.rowEven}>
                    <div className={styles.item} title={'Prettier'}>
                        <img src={prettier} alt="" width={42} height={42} />
                    </div>
                    <div className={styles.item} title={'JSX'}>
                        <img src={jsx} alt="" width={42} height={42} />
                    </div>
                    <div className={styles.item} title={'npm'}>
                        <img src={npm} alt="" width={42} height={42} />
                    </div>
                    <div className={styles.item} title={'Visual Studio Code'}>
                        <img src={vs} alt="" width={42} height={42} />
                    </div>
                </div>
                <div className={styles.rowOdd}>
                    <div className={styles.item} title={'Tailwind CSS'}>
                        <img src={tailwind} alt="" width={42} height={42} />
                    </div>
                    <div className={styles.item} title={'Git'}>
                        <img src={git} alt="" width={42} height={42} />
                    </div>
                    <div className={styles.item} title={'Babel'}>
                        <img src={babel} alt="" width={42} height={42} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTechnologies;
