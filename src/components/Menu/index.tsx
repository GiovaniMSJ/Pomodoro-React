import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>('dark')

    function handleTheme(
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
                <a href='#' className={styles.menuLink } onClick={handleTheme} aria-label='Mudar Tema' title='Mudar Tema'>
                    <SunIcon />
                </a>
            </nav>
    );
}
