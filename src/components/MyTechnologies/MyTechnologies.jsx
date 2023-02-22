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
import Footer from '../Footer/Footer';
import bootstrap from '../../assets/Bootstrap_logo.svg';
import figma from '../../assets/figma.svg';
import graphql from '../../assets/graphql.svg';
import jest from '../../assets/jest-js-icon.svg';
import materialui from '../../assets/materialui.png';
import webstorm from '../../assets/webstorm.svg';
import testinglibrary from '../../assets/testinglibrary.png';
import typescript from '../../assets/typescript.png';
import angular from '../../assets/angular.png';
import electron from '../../assets/electron.png';
import esbuild from '../../assets/esbuild.svg';
import yarn from '../../assets/yarn.png';
import vue from '../../assets/vue.png';
import svelt from '../../assets/svelt.png';
import styledComponents from '../../assets/styled-components.png';
import solidity from '../../assets/solidity.png';
import nodemon from '../../assets/nodemon.png';
import nodemailer from '../../assets/nodemailer.png';
import expressValidator from '../../assets/express-validator.svg';
import flutter from '../../assets/flutter.jpg';
import json from '../../assets/json.svg';
import mongoose from '../../assets/mongoose.png';
import TechnologyItem from '../TechnologyItem/TechnologyItem';
import transparent from '../../assets/transparent.png';
import Text from '../Text/Text';

const MyTechnologies = () => {
    return (
        <div className={styles.technologies}>
            <div className={styles.grid}>
                <div>
                    <h1>
                        <Text eng="My roadmap" rus="Мой план обучения" />
                    </h1>
                </div>
                <div className={styles.rowOdd}>
                    <TechnologyItem src={mongoose} id="Mongoose" used={true} />
                    <TechnologyItem src={typescript} id="TypeScript" used={false} />
                    <TechnologyItem src={bootstrap} id="Bootstrap" used={false} />
                    <TechnologyItem src={graphql} id="GraphQL" used={false} />
                    <TechnologyItem src={jest} id="Jest" used={false} />
                    <TechnologyItem src={json} id="JSON" used={true} />
                </div>
                <div className={styles.rowOdd}>
                    <TechnologyItem src={flutter} id="Flutter" used={false} />
                    <TechnologyItem src={dotenv} id="Dotenv" used={true} />
                    <TechnologyItem src={cssModules} id="CSS Modules" used={true} />
                    <TechnologyItem src={css} id="CSS" used={true} />
                    <TechnologyItem src={reactRouter} id="React Router" used={true} />
                    <TechnologyItem src={postman} id="Postman" used={false} />
                    <TechnologyItem src={nodemailer} id="Nodemailer" used={true} />
                </div>
                <div className={styles.rowEven}>
                    <TechnologyItem src={expressValidator} id="express-validator" used={true} />
                    <TechnologyItem src={insomnia} id="Insomnia" used={true} />
                    <TechnologyItem src={redux} id="Redux Toolkit" used={true} />
                    <TechnologyItem src={react} id="React" used={true} />
                    <TechnologyItem src={sass} id="Sass" used={true} />
                    <TechnologyItem src={es6} id="ECMAScript 6" used={true} />
                    <TechnologyItem src={postgresql} id="PostgreSQL" used={false} />
                    <TechnologyItem src={nodemon} id="nodemon" used={true} />
                </div>
                <div className={styles.rowOdd}>
                    <TechnologyItem src={solidity} id="Solidity" used={false} />
                    <TechnologyItem src={mongodb} id="MongoDB" used={true} />
                    <TechnologyItem src={eslint} id="ESLint" used={true} />
                    <TechnologyItem src={html} id="HTML5" used={true} />
                    <TechnologyItem src={nodeJs} id="Node.js" used={true} />
                    <TechnologyItem src={javaScript} id="JavaScript" used={true} />
                    <TechnologyItem src={axios} id="Axios" used={true} />
                    <TechnologyItem src={express} id="Express" used={true} />
                    <TechnologyItem src={svelt} id="Svelt" used={false} />
                </div>
                <div className={styles.rowEven}>
                    <TechnologyItem src={yarn} id="Yarn" used={false} />
                    <TechnologyItem src={jwt} id="JSON Web Token" used={true} />
                    <TechnologyItem src={prettier} id="Prettier" used={true} />
                    <TechnologyItem src={jsx} id="JSX" used={true} />
                    <TechnologyItem src={npm} id="npm" used={true} />
                    <TechnologyItem src={vs} id="Visual Studio Code" used={true} />
                    <TechnologyItem src={nestjs} id="NestJS" used={false} />
                    <TechnologyItem src={angular} id="Angular" used={false} />
                </div>
                <div className={styles.rowOdd}>
                    <TechnologyItem src={electron} id="Electron" used={false} />
                    <TechnologyItem src={nextjs} id="Next.js" used={false} />
                    <TechnologyItem src={tailwind} id="Tailwind CSS" used={false} />
                    <TechnologyItem src={git} id="Git" used={true} />
                    <TechnologyItem src={babel} id="Babel" used={true} />
                    <TechnologyItem src={webpack} id="Webpack" used={false} />
                    <TechnologyItem src={styledComponents} id="Styled Components" used={false} />
                </div>
                <div className={styles.rowOdd}>
                    <TechnologyItem src={esbuild} id="esbuild" used={true} />
                    <TechnologyItem src={figma} id="Figma" used={false} />
                    <TechnologyItem src={materialui} id="Material UI" used={false} />
                    <TechnologyItem src={webstorm} id="WebStorm" used={false} />
                    <TechnologyItem src={testinglibrary} id="React Testing Library" used={false} />
                    <TechnologyItem src={vue} id="Vue" used={false} />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '25px',
                        gap: '10px',
                    }}
                >
                    <TechnologyItem src={transparent} used={true} />
                    <h3>
                        <Text
                            eng={'Technology that i usedfrett in this project'}
                            rus="Технология, которую я использовал в данном проекте"
                        />
                    </h3>
                </div>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default MyTechnologies;
