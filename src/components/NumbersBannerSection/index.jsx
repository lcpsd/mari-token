import styles from './styles.module.scss'

export function NumbersBannerSection(){

    return(
        <section className={styles.section}>
            
            <div className={styles.background1}></div>

                <div className={styles.info}>
                    <div>
                        <h2>8300</h2>
                        <p>Mari Holders</p>
                    </div>
                    <div>
                        <h2>$27K</h2>
                        <p>Liquidit Pool</p>
                    </div>
                    <div>
                        <h2>$140K</h2>
                        <p>Token Marketcap</p>
                    </div>
                    <div>
                        <h2>100000000</h2>
                        <p>Circulating Supply</p>
                    </div>
                </div>
        </section>
    )
}