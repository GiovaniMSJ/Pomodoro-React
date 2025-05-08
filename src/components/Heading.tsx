import styles from './Heading.module.css'

export function Heading(props) {
    return <h1 className={styles.purple}>{props.children}</h1>
}
