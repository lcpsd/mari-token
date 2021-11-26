import { Card } from './Card'
import farmIcon from '@assets/farm.svg'
import styles from './styles.module.scss'

export function SubHeaderSection(){

    return(
        <section className={styles.subHeaderSection}>

            <div>
                <Card title="TELEGRAM GROUP" 
                text="Join our Telegram group for all the latest updates on 
                Mari token and read more about our long term plan."
                cardIcon={farmIcon}
                />
            </div>

        </section>
    )
}