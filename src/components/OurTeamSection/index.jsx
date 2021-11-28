import mike from '@assets/mike-big-smoke.jpg'
import cents from '@assets/50c.jpg'
import yoshi from '@assets/yoshi.jpg'
import noia from '@assets/noia.jpg'
import styles from './styles.module.scss'
import { TeamProfile } from './TeamProfile'

export function OurTeamSection(){

    return(
        <section className={styles.section} id="ourTeamSection">
            <h1>Our Team</h1>
            <div>
                <TeamProfile img={mike} name="Mike Green Smoke"/>
                <TeamProfile img={cents} name="25 Cents"/>
                <TeamProfile img={yoshi} name="Yosh Of Drogs"/>
                <TeamProfile img={noia} name="Zika Rodrigues"/>
            </div>
        </section>
    )
}