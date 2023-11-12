import styles from './styles.module.css'
import Objects from '../objects/objects'
import { useTranslation } from 'react-i18next'
const Main = () =>{
    const { t } = useTranslation('global')
    const projects = Objects.Projects
    return(
        <main className={styles.main}>
            <h1>{t('Buttons.Projects.name')}</h1>
            <div className={styles.table}>
                    {Object.values(projects).map((project,index)=>(
                        <div key={index} className={styles.cards}>
                            <div>
                                <h3> {project.name} </h3>
                                <p>
                                    {t(`Projects.${project.dicc}.description`)}
                                </p>
                            </div>
                            <a className={styles[project.name]} href={project.href} target="_blank" rel="noreferrer">
                                <img src={project.src} alt={project.name}/>
                            </a> 
                        </div>
                    ))}
            </div>
        </main>
    )
}
export default Main