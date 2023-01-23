import React from 'react';
import styles from './VersionHistory.module.scss';

const VersionHistory = () => {
    return (
        <div className={styles.versions}>
            <h1>Versions history:</h1>
            <div className={styles.list}>
                <h3>3.2 :</h3>
                <ul>
                    <li>Design bugs fixed</li>
                    <li>Minimize design</li>
                    <li>Titles added</li>
                    <li>Settings added</li>
                    <li>Pop-up notifications added</li>
                    <li>"What's new" window added</li>
                    <li>"Float" renamed to "token"</li>
                    <li>Tooltips added</li>
                    <li>Input clear button added</li>
                    <li>New technologies added</li>
                    <li>Difference limit options added ("decimals" and "absolute")</li>
                </ul>
                <h3>3.1 :</h3>
                <ul>
                    <li>Fixed fatal error with negative numbers</li>
                    <li>Now only shows lower cost numbers</li>
                    <li>New Design</li>
                    <li>
                        The instruction has been temporarily removed (it's planned to add hints in
                        next updates)
                    </li>
                    <li>About page renamed to "Versions"</li>
                    <li>Saving of user settings added</li>
                    <li>
                        Now the function shows the cheapest tokens, taking into account the given
                        error!!!
                    </li>
                    <li>Compact outputting mode added</li>
                    <li>Titles for learned technologies added</li>
                    <li>Link to my CodeWars added</li>
                    <li>Link to my HackerRank added</li>
                    <li>New name and domain</li>
                </ul>
                <h3>3.0 :</h3>
                <ul>
                    <li>Site transfer to React</li>
                    <li>New design</li>
                    <li>Learned technologies added</li>
                    <li>Theme switcher added</li>
                    <li>Link to my github added</li>
                    <li>
                        The final table is now calculated in real time (removed the "calculate"
                        button)
                    </li>
                    <li>Copy button column merged with float column</li>
                </ul>
                <h3>2.0 :</h3>
                <ul>
                    <li>New design</li>
                    <li>About page added</li>
                    <li>Email for suggestions added</li>
                    <li>Instruction added</li>
                    <li>Version history added</li>
                </ul>
            </div>
        </div>
    );
};

export default VersionHistory;
