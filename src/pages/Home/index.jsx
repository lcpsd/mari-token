import styles from './styles.module.scss'
import { HeaderSection } from "../../components/HeaderSection";
import { SummarySection } from '../../components/SummarySection';
import { TokenomicsSection } from '../../components/TokenomicsSection';
import { RoadmapSection } from '../../components/RoadmapSection';
import { NumbersBannerSection } from '../../components/NumbersBannerSection';
import { FAQSection } from '../../components/FAQSection';
import { OurTeamSection } from '../../components/OurTeamSection';

export function Home(){

    return(
        <main className={styles.home}>
            <HeaderSection/>
            <SummarySection/>
            <TokenomicsSection/>
            <RoadmapSection/>
            <NumbersBannerSection/>
            <FAQSection/>
            <OurTeamSection/>
        </main>
    )
}