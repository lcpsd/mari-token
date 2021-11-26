import leafIcon from '@assets/leaf.png'
import styles from './styles.module.scss'

export function HeaderSection(){

    return(
        <section className={styles.headerSection}>

                <div className={styles.container}>
                    <div className={styles.leftSection}>
                        <h1>Community Owned <br />
                            Liquidity Locked</h1>
                        <p>
                            Mari Token is a Frictionless, Yield Generating, Community Owned Token.
                        </p>

                        <a href="/">
                            <div>
                                <button></button>
                                    <h3>BUY NOW</h3>
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