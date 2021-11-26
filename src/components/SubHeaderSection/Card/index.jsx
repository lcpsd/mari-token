import styles from './styles.module.scss'

export function Card({title, text, iconClass, iconFirst}){

    return(
        <div className={styles.card}>

            {
                !iconFirst && <span className={iconClass}></span>
            }

            <div>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>

            {
                iconFirst && <span className={iconClass}></span>
            }

        </div>
    )
}