import {FaCaretRight} from 'react-icons/fa'
import styles from './styles.module.scss'

export function RoadmapCard({obj}){

    const tasks = obj.tasks

    return(
        <div className={styles.roadmapCard} key={obj.id}>
            <h2>{obj.title}</h2>

            {
                tasks.map(task => (
                    <div>
                        <FaCaretRight/>
                        <div>{task}</div>
                    </div>
                ))
            }
        </div>
    )
}