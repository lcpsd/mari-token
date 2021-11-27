import styles from './styles.module.scss'
import { HeaderSection } from "../../components/HeaderSection";
import { SubHeaderSection } from '../../components/SubHeaderSection';
import { Tokenomics } from '../../components/Tokenomics';

export function Home(){

    return(
        <main className={styles.home}>
            <HeaderSection/>
            <SubHeaderSection/>
            <Tokenomics/>
        </main>
    )
}