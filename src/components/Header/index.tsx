import {FiMenu} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'

import styles from './styles.module.scss'
import { useState } from 'react'

interface MenuItem{
    text: string
    link: string
}

interface HeaderProps{
    logo: string
    menuItems: MenuItem[]
}

export function Header({logo, menuItems}: HeaderProps){

    const [isMenuVisible, setMenuVisibility] = useState(false)

    return(
        <>
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    <a href="#homeSection" 
                    onClick={() => setMenuVisibility(false)}>
                        <img src={logo} alt="" />
                    </a>
                    <ul>
                        <div className={!isMenuVisible ? styles.hidden : ''}>
                            {
                                menuItems.map((item: MenuItem) => (
                                    <li key={item.text}>
                                        <a href={item.link}>
                                            {item.text}
                                        </a>
                                    </li>
                                ))
                            }
                            <AiOutlineClose 
                            onClick={() => setMenuVisibility(false)}
                            className={styles.closeIcon} color="#fff"
                            />
                        </div>
                    </ul>
                    <FiMenu onClick={() => setMenuVisibility(true)} />
                </div>
            </nav>
        </>
    )
}