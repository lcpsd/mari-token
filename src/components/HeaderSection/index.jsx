import styles from './styles.module.scss'

export function HeaderSection(){

    return(
        <section className={styles.headerSection}>

                <div className={styles.container}>
                    <h1>Community Owned <br />
                        Liquidity Locked</h1>
                    <p>
                        Mari Token is a Frictionless, Yield Generating, Community Owned Token.
                    </p>

                    <div>
                        <button></button>
                        <h3>BUY NOW</h3>
                    </div>
                </div>
            
        </section>
    )
}