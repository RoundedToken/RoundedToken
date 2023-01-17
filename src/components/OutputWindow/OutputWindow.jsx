import React from 'react';
import main from '../../RoundedToken';
import styles from './OutputWindow.module.scss';
import { useSelector } from 'react-redux';
import copy from '../../assets/copy.svg';
import Footer from '../Footer/Footer';

function copyEvent(id) {
    var str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    document.execCommand('Copy');
}

const OutputWindow = () => {
    const decimals = useSelector((state) => state.input.decimals);
    const theme = useSelector((state) => state.theme.color);
    const float = useSelector((state) => state.input.float);
    const limit = useSelector((state) => state.input.percents);
    const mode = useSelector((state) => state.input.mode);
    const output = main(float, decimals, limit);

    return (
        <div className={styles.output}>
            {mode ? (
                float === '' ? null : (
                    <>
                        <h5>Full table</h5>
                        <table>
                            <thead>
                                <tr>
                                    <th>Float</th>
                                    <th>Difference</th>
                                    <th>Diff, %</th>
                                    <th>Price</th>
                                    <th>Uint 128</th>
                                </tr>
                            </thead>
                            <tbody>
                                {output.upFloat === undefined
                                    ? null
                                    : output.upFloat.map((_, i) => (
                                          <tr
                                              style={
                                                  output.uppest === output.upFloat[i]
                                                      ? { color: 'rgb(32,201,87)' }
                                                      : null
                                              }
                                              key={i}
                                          >
                                              <td style={{ display: 'flex' }}>
                                                  <div id={`up${i}`}>{output.upFloat[i]}</div>
                                                  <button onClick={() => copyEvent(`up${i}`)}>
                                                      <img
                                                          alt="copy"
                                                          src={copy}
                                                          width={16}
                                                          height={16}
                                                          className={
                                                              theme === 'dark'
                                                                  ? styles.filterDark
                                                                  : styles.filterLight
                                                          }
                                                      />
                                                  </button>
                                              </td>
                                              <td style={{ textAlign: 'right' }}>
                                                  {output.upDiff[i][1]}
                                              </td>
                                              <td>{output.upDiff[i][0]}</td>
                                              <td>{output.upPrice[i]}</td>
                                              <td>{output.up16[i]}</td>
                                          </tr>
                                      ))}
                                <tr
                                    style={
                                        output.lowestIndex === undefined &&
                                        output.uppestIndex === undefined
                                            ? { color: 'rgb(32,201,87)' }
                                            : { color: 'rgb(255,95,94)' }
                                    }
                                >
                                    <td style={{ display: 'flex' }}>
                                        <div id="number">{output.numberFloat}</div>
                                        <button onClick={() => copyEvent('number')}>
                                            <img
                                                alt="copy"
                                                src={copy}
                                                width={16}
                                                height={16}
                                                className={
                                                    theme === 'dark'
                                                        ? styles.filterDark
                                                        : styles.filterLight
                                                }
                                            />
                                        </button>
                                    </td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>{output.numberPrice}</td>
                                    <td>{output.numberStr16}</td>
                                </tr>
                                {output.lowFloat === undefined
                                    ? null
                                    : output.lowFloat.map((_, i) => (
                                          <tr
                                              style={
                                                  output.lowest === output.lowFloat[i]
                                                      ? { color: 'rgb(32,201,87)' }
                                                      : null
                                              }
                                              key={i}
                                          >
                                              <td style={{ display: 'flex' }}>
                                                  <div id={`low${i}`}>{output.lowFloat[i]}</div>
                                                  <button onClick={() => copyEvent(`low${i}`)}>
                                                      <img
                                                          alt="copy"
                                                          src={copy}
                                                          width={16}
                                                          height={16}
                                                          className={
                                                              theme === 'dark'
                                                                  ? styles.filterDark
                                                                  : styles.filterLight
                                                          }
                                                      />
                                                  </button>
                                              </td>
                                              <td style={{ textAlign: 'right' }}>
                                                  {output.lowDiff[i][1]}
                                              </td>
                                              <td>{output.lowDiff[i][0]}</td>
                                              <td>{output.lowPrice[i]}</td>
                                              <td>{output.low16[i]}</td>
                                          </tr>
                                      ))}
                            </tbody>
                        </table>
                    </>
                )
            ) : float === '' ? null : (
                <>
                    <h5>Short table</h5>
                    <table>
                        <thead>
                            <tr>
                                <th>Float</th>
                                <th>Difference</th>
                                <th>Diff, %</th>
                                <th>Price</th>
                                <th>Uint 128</th>
                            </tr>
                        </thead>
                        <tbody>
                            {output.uppestIndex === undefined ? null : (
                                <tr style={{ color: 'rgb(32,201,87)' }}>
                                    <td style={{ display: 'flex' }}>
                                        <div id="uppest">{output.upFloat[output.uppestIndex]}</div>
                                        <button onClick={() => copyEvent('uppest')}>
                                            <img
                                                alt="copy"
                                                src={copy}
                                                width={16}
                                                height={16}
                                                className={
                                                    theme === 'dark'
                                                        ? styles.filterDark
                                                        : styles.filterLight
                                                }
                                            />
                                        </button>
                                    </td>
                                    <td style={{ textAlign: 'right' }}>
                                        {output.upDiff[output.uppestIndex][1]}
                                    </td>
                                    <td>{output.upDiff[output.uppestIndex][0]}</td>
                                    <td>{output.upPrice[output.uppestIndex]}</td>
                                    <td>{output.up16[output.uppestIndex]}</td>
                                </tr>
                            )}
                            <tr
                                style={
                                    output.lowestIndex === undefined &&
                                    output.uppestIndex === undefined
                                        ? { color: 'rgb(32,201,87)' }
                                        : { color: 'rgb(255,95,94)' }
                                }
                            >
                                <td style={{ display: 'flex' }}>
                                    <div id="number">{output.numberFloat}</div>
                                    <button onClick={() => copyEvent('number')}>
                                        <img
                                            alt="copy"
                                            src={copy}
                                            width={16}
                                            height={16}
                                            className={
                                                theme === 'dark'
                                                    ? styles.filterDark
                                                    : styles.filterLight
                                            }
                                        />
                                    </button>
                                </td>
                                <td>-</td>
                                <td>-</td>
                                <td>{output.numberPrice}</td>
                                <td>{output.numberStr16}</td>
                            </tr>
                            {output.lowestIndex === undefined ? null : (
                                <tr style={{ color: 'rgb(32,201,87)' }}>
                                    <td style={{ display: 'flex' }}>
                                        <div id="lowest">{output.lowFloat[output.lowestIndex]}</div>
                                        <button onClick={() => copyEvent('lowest')}>
                                            <img
                                                alt="copy"
                                                src={copy}
                                                width={16}
                                                height={16}
                                                className={
                                                    theme === 'dark'
                                                        ? styles.filterDark
                                                        : styles.filterLight
                                                }
                                            />
                                        </button>
                                    </td>
                                    <td style={{ textAlign: 'right' }}>
                                        {output.lowDiff[output.lowestIndex][1]}
                                    </td>
                                    <td>{output.lowDiff[output.lowestIndex][0]}</td>
                                    <td>{output.lowPrice[output.lowestIndex]}</td>
                                    <td>{output.low16[output.lowestIndex]}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            )}
            <Footer />
        </div>
    );
};

export default OutputWindow;
