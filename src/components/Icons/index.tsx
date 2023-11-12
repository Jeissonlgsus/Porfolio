import styles from './styles.module.css'
import Objects from '../objects/objects'
const IconBox = () => {
    const Icons = Objects.Footer.Icons
    return(
        <div className={styles.icons}>
            {Object.values(Icons).map((icon,index)=>(
                <a key={index} className={styles.icon} href={icon.href} target="_blank" rel="noreferrer"> 
                <img src={icon.src} alt={icon.name}/> 
            </a>    
            ))}
        </div>
    )
}
export default IconBox