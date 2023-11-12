import styles from './styles.module.css'
import Objects from '../objects/objects'
import { useTranslation } from 'react-i18next'
import { useSelector } from "react-redux"
import { RootState } from '../../redux/store'

const Main = () => {

    const { t } = useTranslation('global')
    const home = useSelector ((state:RootState) => state.home)
    return(
        <main className={styles.main}>
                <img className={styles.img} src={Objects.Home.src} alt={Objects.Home.name}/>
                <div className={styles.text}>
                    <h2>
                        {t(`${home.diccName}`)}
                    </h2>
                    <p>
                        {t(`${home.diccProfesion}`)}
                    </p>
                    <p>
                        {t(`${home.diccUniversity}`)}
                    </p>
                </div>
            </main>
    )
}
export default Main