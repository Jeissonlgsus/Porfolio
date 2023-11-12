import styles from './styles.module.css'
import objects from '../objects/objects'
import Hobbies from '../hobbies/index'
import { useTranslation } from 'react-i18next'


const About = () => {
    const { t } = useTranslation('global')
   
    return(
        <main className={styles.main}>
            <h1>
            {t('Buttons.About.name')}
            </h1>
            <div className={styles.faseuno}>
                <p className={styles.textOne}>
                    {t('About.textOne.description')}
                </p>
                <img src={objects.About.imgAbout.src} alt={objects.About.imgAbout.name}/>
                <p className={styles.textTwo}>
                    {t('About.textTwo.description')}
                </p>
            </div>
            <div className={styles.fasedos}>
                <h2>{t('About.title')}</h2>   
                <div className={styles.boxhobbies}>
                        <div  className={styles.box}>
                        <Hobbies/>
                        </div>
                </div>
            </div>
        </main>
    )
}
export default About