import styles from './styles.module.css'
import Whatsapp from '../whatsapp/index'
import IconBox from '../Icons/index'
import LanguageButtons from '../Language/index'
import { useTranslation } from 'react-i18next'
import Objects from '../objects/objects'


const Footer = () => {
    const { t } = useTranslation('global')
    const whats = Objects.Contact.contactTwo 
    return (
        <div className={styles.footer}>
            <div className={styles.empty}>

            </div>
            <div className={styles.footerBox}>
                <IconBox/>
                <p>{t('Footer.text')}</p>
                <LanguageButtons/>
            </div>
            <Whatsapp link={whats.href} image={whats.src} name={whats.name} />
        </div>
    )
}
export default Footer