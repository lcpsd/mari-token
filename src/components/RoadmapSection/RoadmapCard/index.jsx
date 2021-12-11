import {FaCaretRight} from 'react-icons/fa'
import styles from './styles.module.scss'

export function RoadmapCard({obj}){

    const tasks = obj.tasks

    return(
        <div key={obj.id} className={styles.roadmapCard}>
            <h2>{obj.title}</h2>

            {
                tasks.map(task => (
                    <div key={obj.id + 1}>
                        <FaCaretRight/>
                        <div>{task}</div>
                    </div>
                ))
            }
        </div>
    )
}