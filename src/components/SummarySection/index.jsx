import { Card } from './Card'
import logo from '@assets/logo.png'
import styles from './styles.module.scss'

export function SummarySection(){

    return(
        <section className={styles.summarySection}>

            <div className={styles.container}>
                <div className={styles.cardSection}>
                    <Card title="TELEGRAM GROUP" 
                    text="Join our Telegram group for all the latest updates on 
                    Mari token and read more about our long term plan."
                    iconClass="icon-agriculture"
                    />
                    
                    <span/>

                    <Card title="TOKEN PROTOCOL" 
                    text="6% of each transaction is split among token holders and the burn wallet rewarding holders."
                    iconClass="icon-farm"
                    />
                </div>

                <div className={styles.centerImg}>
                    <img src={logo} alt="" />
                </div>

                <div className={styles.cardSection}>
                    <Card title="CONTESTS" 
                    text="Giveaways will be held once a week with flash and happy hour Giveaways introduced along the way!"
                    iconClass="icon-oil"
                    iconFirst
                    />
                    
                    <span/>

                    <Card title="TECHRATE AUDIT" 
                    text="Fully audited by Techrate, our Smart Contract does not contain any severe vulnerabilities."
                    iconClass="icon-shovels"
                    iconFirst
                    />
                </div>
            </div>

        </section>
    )
}