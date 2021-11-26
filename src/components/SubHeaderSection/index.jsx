import { Card } from './Card'
import farmIcon from '@assets/farm.svg'
import logo from '@assets/logo.png'
import styles from './styles.module.scss'

export function SubHeaderSection(){

    return(
        <section className={styles.subHeaderSection}>

            <div className={styles.container}>
                <div className={styles.cardSection}>
                    <Card title="TELEGRAM GROUP" 
                    text="Join our Telegram group for all the latest updates on 
                    Mari token and read more about our long term plan."
                    iconClass="icon-agriculture"
                    />
                    
                    <span/>

                    <Card title="TELEGRAM GROUP" 
                    text="Join our Telegram group for all the latest updates on 
                    Mari token and read more about our long term plan."
                    iconClass="icon-farm"
                    />
                </div>

                <div className={styles.centerImg}>
                    <img src={logo} alt="" />
                </div>

                <div className={styles.cardSection}>
                    <Card title="TELEGRAM GROUP" 
                    text="Join our Telegram group for all the latest updates on 
                    Mari token and read more about our long term plan."
                    iconClass="icon-oil"
                    iconFirst
                    />
                    
                    <span/>

                    <Card title="TELEGRAM GROUP" 
                    text="Join our Telegram group for all the latest updates on 
                    Mari token and read more about our long term plan."
                    iconClass="icon-shovels"
                    iconFirst
                    />
                </div>
            </div>

        </section>
    )
}