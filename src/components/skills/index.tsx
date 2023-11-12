import styles from './styles.module.css'
import Objects from '../objects/objects'
import { useTranslation } from 'react-i18next'
const Main = () => {
    const { t } = useTranslation('global')
    const Skill = Objects.Skills
    return(
        <main className={styles.main}>
            <h1>{t('Buttons.Skills.name')}</h1>
            <div className={styles.bars}>
                {Object.values(Skill).map((skill,index)=>(
                    <div key={index} className={styles.progressBar}>
                        <h2>{skill.name}</h2>
                        <div className={styles.barImg}>
                            <img className={styles.Img} src={skill.src} alt={skill.name} />
                            <progress value={skill.progress} max="100"></progress>
                        </div>
                        <h5> {t('Skills.Range')}: {t(`Skills.${skill.dicc}.Range`)} </h5> 
                    </div>
                ))}
            </div>
        </main>
    )
}
export default Main