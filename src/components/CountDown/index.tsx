import type { homeProps } from '../../pages/Home'
import styles from './styles.module.css'

type CountDownProps = {} & homeProps

export function CountDown ({state} : CountDownProps) {
    return <div className={styles.container}>{state.formattedSecondsRemaining}</div>
}