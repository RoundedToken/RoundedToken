import React from 'react';
import styles from './Footer.module.scss';
import email from '../../assets/email.svg';
import github from '../../assets/github.svg';
import codeWars from '../../assets/codeWars.svg';
import hackerRank from '../../assets/hackerRank.svg';
import SocialLink from '../SocialLink/SocialLink';
import ImageButton from '../ImageButton/ImageButton';
import copyFunction from '../../Functions/CopyFunction.js';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <h5>Write for suggestions</h5>
                <h5 id="email" style={{ fontStyle: 'italic' }}>
                    stepan.zip.07@gmail.com
                </h5>
                <ImageButton
                    f={copyFunction}
                    id={'email'}
                    tooltipId={'tooltipEmail'}
                    src={email}
                    width={32}
                    height={32}
                    content={'Copy email'}
                    place={'right'}
                />
            </div>

            <div className={styles.container}>
                <h5>If you like program, give it a star on GitHub!</h5>
                <SocialLink
                    id={'gitHub'}
                    content={'Go to GitHub'}
                    place={'right'}
                    src={github}
                    href={'https://github.com/RoundedToken/RoundedToken'}
                    width={32}
                    height={32}
                />
            </div>
            <div className={styles.container}>
                <h5>Check up my profiles</h5>
                <SocialLink
                    id={'codeWars'}
                    content={'Go to CodeWars'}
                    place={'bottom'}
                    src={codeWars}
                    href={'https://www.codeWars.com/users/RoundedToken'}
                    width={32}
                    height={32}
                />
                <SocialLink
                    id={'hackerRank'}
                    content={'Go to HackerRank'}
                    place="bottom"
                    src={hackerRank}
                    href={'https://www.hackerrank.com/RoundedToken?hr_r=1'}
                    width={32}
                    height={32}
                />
            </div>
        </div>
    );
};

export default Footer;
