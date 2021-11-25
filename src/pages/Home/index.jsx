import styles from './styles.module.scss'
import { HeaderSection } from "../../components/HeaderSection";

export function Home(){

    return(
        <main className={styles.home}>
            <HeaderSection/>
        </main>
    )
}