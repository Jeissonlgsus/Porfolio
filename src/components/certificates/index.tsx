import styles from './styles.module.css'
import Objects from '../objects/objects'
import { useTranslation } from 'react-i18next'

const Main = () => {
    const { t } = useTranslation('global')
    const certificates = Objects.Certificates
    return(
        <main className={styles.main}>
            <h1>{t('Buttons.Certificates.name')}</h1>
            <div className={styles.box}>
                {Object.values(certificates).map((certificate,index)=>(
                    <div key={index} className={styles.school}>
                        <a  href={certificate.href} target="_blank" rel="noreferrer"> 
                            <img src={certificate.src} alt='School'/> 
                        </a>
                        <h5>{t(`Certificates.${certificate.dicc}.name`)}</h5>
                        <p>{certificate.time}</p>
                </div>    
                ))}
            </div>
        </main>
    )
}
export default Main