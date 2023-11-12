import styles from './styles.module.css'
import { useTranslation } from 'react-i18next'

interface WhatsappProps {
    link: string;
    image: string;
    name: string;
  }

const Whatsapp: React.FC<WhatsappProps> = (props) => {
    const { t } = useTranslation('global');
    const { link, image, name } = props
  
    return (
      <div className={styles.container}>
        <div className={styles.whatsapp} >
                <p className={styles.whText}>{t('Footer.whats')}</p>
                <a className={styles.whLink} href={link} target="_blank" rel="noreferrer">
                 <img className={styles.whImg} src={image} alt={name}/>
                </a>
            </div>
      </div>
    );
  };
  
  export default Whatsapp;
