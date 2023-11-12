import styles from './styles.module.css'
import Objects from '../objects/objects'
import { useTranslation } from 'react-i18next'

const Main = () => {
    const { t } = useTranslation('global')
    const Contacts = Objects.Contact 
    return(
        <main className={styles.main}>
            <h1>
            {t('Buttons.Contact.name')}
            </h1>
            <div className={styles.contactBox}>
                {Object.values(Contacts).map((contact,index)=>(
                    <div key={index}>
                        <a className={styles.contact} href={contact.href} target="_blank" rel="noreferrer">
                            <img src={contact.src} alt="numberimage"/>
                        {contact.name}
                        </a>    
                    </div>
                ))}
            </div>
            
        </main>
    )
}
export default Main