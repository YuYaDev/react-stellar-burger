import { Logo, BurgerIcon,ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './app-header.module.css';

function AppHeader() {
    return (
        <header className={headerStyles.header}>
            <ul className={`${headerStyles.navbar} p-4`}>
                <li className={headerStyles.flexRow}>
                    <div className={`${headerStyles.flexRow} p-4`}>
                        <BurgerIcon type="primary" />
                        <p className="text text_type_main-default p-2">Конструктор</p>
                    </div>
                    <div className={`${headerStyles.flexRow} p-4`}>
                        <ListIcon type="primary" />
                        <p className="text text_type_main-default p-2">Лента заказов</p>
                    </div>
                </li>
                <li><Logo /></li>
                <li>
                    <div className={`${headerStyles.flexRow} p-4`}>
                        <ProfileIcon type="primary" />
                        <p className="text text_type_main-default p-2">Личный кабинет</p>
                    </div>
                </li>
            </ul>
        </header>
    );
}

export default AppHeader;
