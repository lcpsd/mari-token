import styles from './styles.module.scss'

export function NumbersBannerSection(){

    return(
        <section className={styles.section} id="numbersSection">
            
            <div className={styles.background1}></div>

                <div className={styles.info}>
                    <div>
                        <h2>8300</h2>
                        <p>Inversores Mari</p>
                    </div>
                    <div>
                        <h2>$27K</h2>
                        <p>Liquidit Pool</p>
                    </div>
                    <div>
                        <h2>$140K</h2>
                        <p>capitalización</p>
                    </div>
                    <div>
                        <h2>100000000</h2>
                        <p>Suministro Circulante</p>
                    </div>
                </div>
        </section>
    )
}