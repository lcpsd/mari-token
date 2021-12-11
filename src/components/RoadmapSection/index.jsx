import { RoadmapCard } from './RoadmapCard'
import styles from './styles.module.scss'

export function RoadmapSection(){

    const roadmap = [
        {
            id:1,
            title: "DECEMBER",
            tasks: ["IDO Private white list", "IDO Publica"]
        },
        {
            id:2,
            title: "Q1 2022",
            tasks: ["presentacion NFT /white list",
            "1ra venta NFT Laboratory (land)", 
            "2da venta personajes quimicos productores",
            "Marketplace NFT launch for everywhere",
            "Marketplace NFT launch for everywhere"
        ]
        },
        {
            id:3,
            title: "Q2 2022",
            tasks: ["Launch Pve Abis Lab", 
            "Launch Pve Abis Lab", 
            "Trailer PVP",
            "Marishop launch advertising in strategic points of the world",

        ]
        },
        {
            id:4,
            title: "Mid Q2",
            tasks: ["Launch PVP Game"]
        },
    ]

    return(
        <section className={styles.section} id="roadmapSection">
            <div className={styles.container}>
                <h1>Roadmap 2021</h1>
                
                <div>
                    {
                        roadmap.map(item => (
                            <RoadmapCard key={item.id} obj={item}/>
                        ))
                    }
                </div>
                
            </div>
        </section>
    )
}