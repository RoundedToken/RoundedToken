import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Text from '../Text/Text';
import styles from './VersionHistory.module.scss';

const VersionHistory = () => {
    const divRef = useRef();
    const [topVisible, setTopVisible] = useState(false);
    const [bottomVisible, setBottomVisible] = useState(true);

    function eventHandler() {
        this.scrollTop === 0 ? setTopVisible(false) : setTopVisible(true);
        this.scrollTop === this.scrollHeight - this.offsetHeight
            ? setBottomVisible(false)
            : setBottomVisible(true);
    }

    useEffect(() => {
        const div = divRef.current;
        div.addEventListener('scroll', eventHandler);
        return () => {
            div.removeEventListener('scroll', eventHandler);
        };
    }, []);

    return (
        <div className={styles.versions}>
            <h1>
                <Text eng={'Versions history:'} rus="История версий:" />
            </h1>

            <h2 style={topVisible ? null : { visibility: 'hidden' }}>. . .</h2>

            <div className={styles.list} ref={divRef}>
                <h3>4.0 :</h3>

                <ul>
                    <li>
                        <Text
                            eng={'New email for suggestions'}
                            rus="Новый email для связи со мной"
                        />
                    </li>
                    <li>
                        <Text
                            eng={'All inputs validation fixed'}
                            rus="Исправлена валидация всех вводов"
                        />
                    </li>
                    <li>
                        <Text eng={'Design bugs fixed'} rus="Мелкие исправления в дизайне" />
                    </li>
                    <li>
                        <Text
                            eng={'New design of technology block'}
                            rus="Новый дизайн блока технологий"
                        />
                    </li>
                    <li>
                        <Text eng={'New technologies added'} rus="Добавлены новые технологии" />
                    </li>
                    <li>
                        <Text
                            eng={'Authorization system added'}
                            rus="Добавлена система авторизации"
                        />
                    </li>
                    <li>
                        <Text eng={'Navigation bar added'} rus="Добавлена панель навигации" />
                    </li>
                    <li>
                        <Text
                            eng={'Header now has a fixed position'}
                            rus="Шапка сайта теперь фиксированная"
                        />
                    </li>
                    <li>
                        <Text
                            eng={'New design of version history block'}
                            rus="Новый дизайн блока истории версий"
                        />
                    </li>
                </ul>

                <h3>3.3 :</h3>

                <ul>
                    <li>
                        <Text
                            eng={'Fixed lexicographical mistakes'}
                            rus="Исправлены лексикографические ошибки"
                        />
                    </li>
                    <li>
                        <Text eng={'New technologies added'} rus="Добавлены новые технологии" />
                    </li>
                    <li>
                        <Text eng={'Minor bugs fixed'} rus="Исправлены мелкие ошибки" />
                    </li>
                    <li>
                        <Text eng={'W3Schools profile added'} rus="Добавлен профиль W3Schools" />
                    </li>
                </ul>

                <h3>3.2 :</h3>

                <ul>
                    <li>
                        <Text eng={'Design bugs fixed'} rus="Мелкие исправления в дизайне" />
                    </li>
                    <li>
                        <Text eng={'Minimize design'} rus="Новый минималистичный дизайн" />
                    </li>
                    <li>
                        <Text eng={'Titles added'} rus="Добавлены заголовки" />
                    </li>
                    <li>
                        <Text eng={'Settings added'} rus="Добавлены настройки" />
                    </li>
                    <li>
                        <Text
                            eng={'Pop-up notifications added'}
                            rus="Добавлены всплыващие уведомления"
                        />
                    </li>
                    <li>
                        <Text eng={`"What's new" window added`} rus="Добавлено окно обновлений" />
                    </li>
                    <li>
                        <Text
                            eng={'"Float" column renamed to "Token"'}
                            rus="Колонка 'Вещественное число' переименована в 'Токен'"
                        />
                    </li>
                    <li>
                        <Text eng={'Tooltips added'} rus="Добавлены подсказки" />
                    </li>
                    <li>
                        <Text
                            eng={'Input clear button added'}
                            rus="Добавлена кнопка очистки ввода"
                        />
                    </li>
                    <li>
                        <Text eng={'New technologies added'} rus="Добавлены новые технологии" />
                    </li>
                    <li>
                        <Text
                            eng={'Difference limit options added ("decimals" and "absolute")'}
                            rus="Добавлены варианты предела разницы ('кол-во знаков' и 'абсолютный')"
                        />
                    </li>
                </ul>

                <h3>3.1 :</h3>

                <ul>
                    <li>
                        <Text
                            eng={'Fixed fatal error with negative numbers'}
                            rus="Исправлена фатальная ошибка с отрицательными числами"
                        />
                    </li>
                    <li>
                        <Text
                            eng={'Now only shows lower cost numbers'}
                            rus="Теперь показываются только более дешевые числа"
                        />
                    </li>
                    <li>
                        <Text eng={'New Design'} rus="Новый дизайн" />
                    </li>
                    <li>
                        <Text
                            eng={`The instruction has been temporarily removed (it's planned to add hints in
                        next updates)`}
                            rus="Инструкция временно удалена (планируется добавление подсказок в следующих обновлениях)"
                        />
                    </li>
                    <li>
                        <Text
                            eng={'Saving of user settings added'}
                            rus="Добавлено сохранение пользовательских настроек"
                        />
                    </li>
                    <li>
                        <Text
                            eng={`Now the function shows the cheapest tokens, taking into account the given
                        limit!!!`}
                            rus="Теперь функция показывает самые дешевые токены с учетом заданного лимита"
                        />
                    </li>
                    <li>
                        <Text
                            eng={'Compact outputting mode added'}
                            rus="Добавлен компактный режим вывода"
                        />
                    </li>
                    <li>
                        <Text eng={'Link to my CodeWars added'} rus="Добавлен профиль CodeWars" />
                    </li>
                    <li>
                        <Text
                            eng={'Link to my HackerRank added'}
                            rus="Добавлен профиль HeckerRank"
                        />
                    </li>
                    <li>
                        <Text eng={'New name and domain'} rus="Новое название и адрес" />
                    </li>
                </ul>

                <h3>3.0 :</h3>

                <ul>
                    <li>
                        <Text eng={'Site transfer to React'} rus="Перенос сайта на React" />
                    </li>
                    <li>
                        <Text eng={'New design'} rus="Новый дизайн" />
                    </li>
                    <li>
                        <Text eng={'Technology block added'} rus="Добавлен блок технологий" />
                    </li>
                    <li>
                        <Text eng={'Theme switcher added'} rus="Добавлен переключатель тем" />
                    </li>
                    <li>
                        <Text eng={'Link to my GitHub added'} rus="Добавлена ссылка на GithHub" />
                    </li>
                    <li>
                        <Text
                            eng={`The final table is now calculated in real time (removed the "calculate"
                        button)`}
                            rus="Финальная таблица теперь отрисовывается в реальном времени (убрана кнопка 'рассчитать')"
                        />
                    </li>
                    <li>
                        <Text
                            eng={'Copy button column merged with float column'}
                            rus="Колонка с кнопкой копирования объединена с колонкой 'Вещественное число'"
                        />
                    </li>
                </ul>

                <h3>2.0 :</h3>

                <ul>
                    <li>
                        <Text eng={'New design'} rus="Новый дизайн" />
                    </li>
                    <li>
                        <Text eng={'About page added'} rus="Добавлена страница 'о приложении'" />
                    </li>
                    <li>
                        <Text
                            eng={'Email for suggestions added'}
                            rus="Добавлен email для связи со мной"
                        />
                    </li>
                    <li>
                        <Text eng={'Instruction added'} rus="Добавлена инструкция" />
                    </li>
                    <li>
                        <Text eng={'Version history added'} rus="Добавлена история версий" />
                    </li>
                </ul>
            </div>

            <h2 style={bottomVisible ? { rotate: 'calc(180deg)' } : { visibility: 'hidden' }}>
                . . .
            </h2>
        </div>
    );
};

export default VersionHistory;
