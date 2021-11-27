import styles from './styles.module.scss'
import { HeaderSection } from "../../components/HeaderSection";
import { SubHeaderSection } from '../../components/SubHeaderSection';
import { TokenomicsSection } from '../../components/TokenomicsSection';
import { Footer } from '../../components/Footer';
import { RoadmapSection } from '../../components/RoadmapSection';
import { NumbersBannerSection } from '../../components/NumbersBannerSection';

export function Home(){

    return(
        <main className={styles.home}>
            <HeaderSection/>
            <SubHeaderSection/>
            <TokenomicsSection/>
            <RoadmapSection/>
            <NumbersBannerSection/>
            <Footer/>
        </main>
    )
}