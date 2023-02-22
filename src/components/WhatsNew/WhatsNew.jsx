import React from 'react';
import styles from './WhatsNew.module.scss';
import close from '../../assets/close.svg';
import { useDispatch, useSelector } from 'react-redux';
import { closeUpdate } from '../../redux/updateSlice';
import { toast } from 'react-toastify';
import Text from '../Text/Text';

const WhatsNew = () => {
    const lang = useSelector((state) => state.language.lang);
    const dispatch = useDispatch();

    const onClickClose = () => {
        dispatch(closeUpdate());
        toast.success(lang === 'eng' ? 'Closed!' : ' Закрыто!');
    };

    return (
        <div className={styles.whatsNew}>
            <h1>
                <Text eng={"What's new:"} rus={'Обновление:'} />
            </h1>

            <button onClick={onClickClose}>
                <img src={close} alt="close" width={32} height={32} />
            </button>

            <div className={styles.list}>
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
            </div>
        </div>
    );
};

export default WhatsNew;
