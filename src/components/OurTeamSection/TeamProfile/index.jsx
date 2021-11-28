import styles from './styles.module.scss'

export function TeamProfile({img, name}){

    return(
        <div className={styles.profile}>
            <span>
                <img src={img} alt="" />
            </span>
            <p>{name}</p>
        </div>
    )
}