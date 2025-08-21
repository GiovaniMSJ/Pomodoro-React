import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storeTheme = localStorage.getItem('theme') as AvailableThemes || 'dark'

        return storeTheme
    })

    const themeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    }

    function handleThemeChange(
        event : React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        event.preventDefault()
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme
        });

    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
            <nav className={styles.menu}>
                <a href='#' className={styles.menuLink} aria-label='Ir para a home' title='Ir para a home'>
                    <HouseIcon />
                </a>
                <a href='#' className={styles.menuLink } aria-label='Ver Histórico' title='Ver o histórico'>
                    <HistoryIcon />
                </a>
                <a href='#' className={styles.menuLink } aria-label='Configurações' title='Configurações'>
                    <SettingsIcon />
                </a>
                <a href='#' className={styles.menuLink } onClick={handleThemeChange} aria-label='Mudar Tema' title='Mudar Tema'>
                    {themeIcon[theme]}
                </a>
            </nav>
    );
}
