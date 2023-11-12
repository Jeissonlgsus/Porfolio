import { useTranslation } from 'react-i18next'
import styles from './styles.module.css'
import { Button } from '@mui/material'
import ButtonGroup from '@mui/material/ButtonGroup'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {  } from '@mui/material/colors'

const LanguajeButtons = () => {
    const [t, i18n ] = useTranslation('global')

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
      };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#FFFFFF',
            }
        }
    })

    return(
        <div className={styles.languageBox}>
            <ThemeProvider theme={theme}>
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button onClick={() => changeLanguage("en")} >{t('Footer.Buttons.btn1')}</Button>
                    <Button onClick={() => changeLanguage("es")} >{t('Footer.Buttons.btn2')}</Button>
                    <Button onClick={() => changeLanguage("de")} >{t('Footer.Buttons.btn3')}</Button>
                </ButtonGroup>
            </ThemeProvider>
        </div> 
    )
}
export default LanguajeButtons