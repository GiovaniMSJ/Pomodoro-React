import styles from './styles.module.css';

type DefaultInputProps = {
    id: string;
    lableText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput ({ id, type, lableText, ...rest}: DefaultInputProps) {
    return (
        <>
            <label htmlFor={id}>{lableText}</label>
            <input className={styles.input} id={id} type={type} {...rest}/>
        </>
    )
}