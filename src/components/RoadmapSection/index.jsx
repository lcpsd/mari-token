import { RoadmapCard } from './RoadmapCard'
import styles from './styles.module.scss'

export function RoadmapSection(){

    const roadmap = [
        {
            id:1,
            title: "Q1",
            tasks: ["Task01", "Task02", "Task03"]
        },
        {
            id:2,
            title: "Q2",
            tasks: ["Task01", "Task02", "Task03"]
        },
        {
            id:3,
            title: "Q3",
            tasks: ["Task01", "Task02", "Task03"]
        },
        {
            id:4,
            title: "Q4",
            tasks: ["Task01", "Task02", "Task03"]
        },
    ]

    return(
        <section className={styles.section} id="roadmapSection">
            <div className={styles.container}>
                <h1>Roadmap 2021</h1>
                
                <div>
                    {
                        roadmap.map(item => (
                            <RoadmapCard obj={item}/>
                        ))
                    }
                </div>
                
            </div>
        </section>
    )
}