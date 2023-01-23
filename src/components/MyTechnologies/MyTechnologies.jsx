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
import { Tooltip } from 'react-tooltip';
import axios from '../../assets/axios.png';
import eslint from '../../assets/eslint.svg';
import dotenv from '../../assets/dotenv.svg';
import express from '../../assets/express.svg';
import insomnia from '../../assets/insomnia.png';
import jwt from '../../assets/jwt.png';
import mongodb from '../../assets/mongodb.svg';
import nestjs from '../../assets/nestjs.png';
import nextjs from '../../assets/nextjs.png';
import postgresql from '../../assets/postgresql.svg';
import postman from '../../assets/postman.svg';
import webpack from '../../assets/webpack.svg';

const MyTechnologies = () => {
    return (
        <div className={styles.technologies}>
            <div className={styles.grid}>
                <div>
                    <h1>Technologies that I want to learn:</h1>
                </div>
                <div className={styles.rowOdd}>
                    <div className={styles.item}>
                        <img src={dotenv} alt="" width={42} height={42} id="dotenv" />
                        <Tooltip
                            content="Dotenv"
                            anchorId="dotenv"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={cssModules} alt="" width={42} height={42} id="cssModules" />
                        <Tooltip
                            content="CSS Modules"
                            anchorId="cssModules"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={css} alt="" width={42} height={42} id="css" />
                        <Tooltip
                            content="CSS"
                            anchorId="css"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={reactRouter} alt="" width={42} height={42} id="reactRouter" />
                        <Tooltip
                            content="React Router"
                            anchorId="reactRouter"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={postman} alt="" width={42} height={42} id="postman" />
                        <Tooltip
                            content="Postman"
                            anchorId="postman"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                </div>
                <div className={styles.rowEven}>
                    <div className={styles.item}>
                        <img src={insomnia} alt="" width={42} height={42} id="insomnia" />
                        <Tooltip
                            content="Insomnia"
                            anchorId="insomnia"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={redux} alt="" width={42} height={42} id="redux" />
                        <Tooltip
                            content="Redux Toolkit"
                            anchorId="redux"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={react} alt="" width={42} height={42} id="react" />
                        <Tooltip
                            content="React"
                            anchorId="react"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={sass} alt="" width={42} height={42} id="sass" />
                        <Tooltip
                            content="Sass"
                            anchorId="sass"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={es6} alt="" width={42} height={42} id="es6" />
                        <Tooltip
                            content="ECMAScript 6"
                            anchorId="es6"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={postgresql} alt="" width={42} height={42} id="postgresql" />
                        <Tooltip
                            content="PostgreSQL"
                            anchorId="postgresql"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                </div>
                <div className={styles.rowOdd}>
                    <div className={styles.item}>
                        <img src={mongodb} alt="" width={42} height={42} id="mongodb" />
                        <Tooltip
                            content="MongoDB"
                            anchorId="mongodb"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={eslint} alt="" width={42} height={42} id="eslint" />
                        <Tooltip
                            content="ESLint"
                            anchorId="eslint"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={html} alt="" width={42} height={42} id="html" />
                        <Tooltip
                            content="HTML5"
                            anchorId="html"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={nodeJs} alt="" width={42} height={42} id="nodeJs" />
                        <Tooltip
                            content="Node.js"
                            anchorId="nodeJs"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={javaScript} alt="" width={42} height={42} id="javaScript" />
                        <Tooltip
                            content="JavaScript"
                            anchorId="javaScript"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={axios} alt="" width={42} height={42} id="axios" />
                        <Tooltip
                            content="Axios"
                            anchorId="axios"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={express} alt="" width={42} height={42} id="express" />
                        <Tooltip
                            content="Express"
                            anchorId="express"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                </div>
                <div className={styles.rowEven}>
                    <div className={styles.item}>
                        <img src={jwt} alt="" width={42} height={42} id="jwt" />
                        <Tooltip
                            content="JWT"
                            anchorId="jwt"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={prettier} alt="" width={42} height={42} id="prettier" />
                        <Tooltip
                            content="Prettier"
                            anchorId="prettier"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={jsx} alt="" width={42} height={42} id="jsx" />
                        <Tooltip
                            content="JSX"
                            anchorId="jsx"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={npm} alt="" width={42} height={42} id="npm" />
                        <Tooltip
                            content="npm"
                            anchorId="npm"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={vs} alt="" width={42} height={42} id="vs" />
                        <Tooltip
                            content="Visual Studio Code"
                            anchorId="vs"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={nestjs} alt="" width={42} height={42} id="nestjs" />
                        <Tooltip
                            content="NestJS"
                            anchorId="nestjs"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                </div>
                <div className={styles.rowOdd}>
                    <div className={styles.item}>
                        <img src={nextjs} alt="" width={42} height={42} id="nextjs" />
                        <Tooltip
                            content="Next.js"
                            anchorId="nextjs"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={tailwind} alt="" width={42} height={42} id="tailwind" />
                        <Tooltip
                            content="Tailwind CSS"
                            anchorId="tailwind"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={git} alt="" width={42} height={42} id="git" />
                        <Tooltip
                            content="Git"
                            anchorId="git"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={babel} alt="" width={42} height={42} id="babel" />
                        <Tooltip
                            content="Babel"
                            anchorId="babel"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                    <div className={styles.item}>
                        <img src={webpack} alt="" width={42} height={42} id="webpack" />
                        <Tooltip
                            content="Webpack"
                            anchorId="webpack"
                            place="top"
                            className={styles.tooltip}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTechnologies;
