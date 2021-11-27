import { CardFaq } from './CardFaq'
import styles from './styles.module.scss'

export function FAQSection(){

    return(
        <section className={styles.section} id="faqSection">
            <div className={styles.container}>
                <h1>Frequently Asked Questions</h1>

                <CardFaq title="Question 1" info="orem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis sapien mauris, vel dictum magna consectetur sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras fermentum purus id mi lobortis laoreet. Fusce ac quam euismod, cursus quam non, maximus velit"/>

                <CardFaq title="Question 2" info="orem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis sapien mauris, vel dictum magna consectetur sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras fermentum purus id mi lobortis laoreet. Fusce ac quam euismod, cursus quam non, maximus velit"/>

                <CardFaq title="Question 3" info="orem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis sapien mauris, vel dictum magna consectetur sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras fermentum purus id mi lobortis laoreet. Fusce ac quam euismod, cursus quam non, maximus velit"/>

                <CardFaq title="Question 4" info="orem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis sapien mauris, vel dictum magna consectetur sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras fermentum purus id mi lobortis laoreet. Fusce ac quam euismod, cursus quam non, maximus velit"/>
            </div>
        </section>
    )
}