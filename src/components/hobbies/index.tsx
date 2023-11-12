import styles from './styles.module.css'
import { useTranslation } from 'react-i18next'
import objects from '../objects/objects';

  const Hobbies = () => {
    const { t } = useTranslation("global")
    const Hobbie = objects.About.hobbies
    return (
            <div className={styles.boxhobbies}>
                {Object.values(Hobbie).map((hobby,index)=>(
                    <div key={index} className={styles.box}>
                        <a href={hobby.href} target="_blank" rel="noreferrer">
                            <img className={styles[hobby.name]} src={hobby.src} alt="EncierroLibro"/>
                        </a>
                        <p>
                            {t(`About.hobbies.${hobby.dicc}.description`)} 
                        </p>
                    </div> 
                ))}
            </div>
    )
}
export default Hobbies

