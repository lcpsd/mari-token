import leafIcon from '@assets/leaf.png'
import styles from './styles.module.scss'

export function HeaderSection(){

    return(
        <section className={styles.headerSection}>

                <div className={styles.container}>
                    <div className={styles.leftSection}>
                        <h1>MARI ES UN ECOSISTEMA QUE SE RETROALIMENTA</h1>
                        <p>
                        de los diversos productos y beneficios que ofrece.
                        </p>

                        <a href="/">
                            <div>
                                <button></button>
                                    <h3>COMPRAR</h3>
                            </div>
                        </a>
                    </div>

                    <div className={styles.rightSection}>
                        <img src={leafIcon} alt="" />
                    </div>
                </div>
        </section>
    )
}