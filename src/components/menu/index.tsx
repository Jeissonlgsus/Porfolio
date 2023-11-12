import styles from './styles.module.css'
import { useTranslation } from 'react-i18next'
import Objects from '../objects/objects'
import { Link } from 'react-router-dom'
import Button  from '../../stories/components/Buttons/Button'
const Menu = () => {
    const { t } = useTranslation("global")

    return(
        <div className={styles.buttonsLock}>
            {Object.values(Objects.Buttons).map((button,index) => (
                <Link to={button.url} key={index}>
                    <Button
                        label={t(`Buttons.${button.name}.name`)}
                        secondary
                        onClick={() => {}}
                    />
                </Link>
            ))}
            
        </div>
    )
}
export default Menu