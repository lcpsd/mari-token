import { useState } from 'react'
import styles from './styles.module.scss'

export function CardFaq({title, info}){

    const [isQuestionOpened, setQuestionOpen] = useState(false)

    function toggleMenuOpen(){
        setQuestionOpen(!isQuestionOpened)
    }

    return(
        <div className={styles.cardFaq}>
            <h2 onClick={() => toggleMenuOpen()}>{title}</h2>
            <p className={isQuestionOpened && styles.open}>
                <div>
                    {info}
                </div>
            </p>
        </div>
    )
}