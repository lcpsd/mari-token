import { Card } from './Card'
import logo from '@assets/logo.png'
import styles from './styles.module.scss'

export function SummarySection(){

    return(
        <section className={styles.summarySection} id="summarySection">

            <div className={styles.container}>
                <div className={styles.cardSection}>
                    <Card title="ECOSISTEMA" 
                    text="El token pieza central de todo este MARIverso busca ser el activo de referencia con
                    mayor capitalización del mercado cannábico en el mundo de las criptomonedas.
                    Además es el activo fundamental para el Play to earn “ABIS Lab”
                    "
                    iconClass="icon-agriculture"
                    />
                    
                    <span/>
                </div>

                <div className={styles.centerImg}>
                    <img src={logo} alt="" />
                </div>

                <div className={styles.cardSection}>
                    <Card title="ABIS LAB" 
                    text="El token pieza central de todo este MARIverso busca ser el activo de referencia con
                    mayor capitalización del mercado cannábico en el mundo de las criptomonedas.
                    Además es el activo fundamental para el Play to earn ABIS Lab."
                    iconClass="icon-farm"
                    />
                    
                    <span/>

                </div>
            </div>

        </section>
    )
}