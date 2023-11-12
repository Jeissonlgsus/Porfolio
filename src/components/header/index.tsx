import styles from './styles.module.css'
import Objects from '../objects/objects'
import Menu from '../menu'
import { Burger } from '../../stories/components/Burger/Burger'
import { Link } from 'react-router-dom'
import Button from '../../stories/components/Buttons/Button'

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.image} src={Objects.Header.Logo.src} alt={Objects.Header.Logo.name}/>
            </div>
            <Menu/>
            <Burger
                secondary
            >
                {Object.values(Objects.Buttons).map((menuButton,index) => (
                    <Link  to={menuButton.url} key={index}>
                        <Button
                        label={menuButton.name}
                        tertiary  
                        />
                    </Link>
                ))}
            </Burger>
        </header>
    )
}
export default Header