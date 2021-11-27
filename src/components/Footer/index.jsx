import {BsFacebook} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

import logo from '@assets/logo.png'

import styles from './styles.module.scss'

export function Footer(){

    return(
        <footer className={styles.footer}>
            <img src={logo} alt="" />
            <div>
                <a href="facebook.com">
                    <BsFacebook/>
                </a>

                <a href="telegram.com">
                    <BsTelegram/>
                </a>

                <a href="instagram.com">
                    <AiFillInstagram/>
                </a>
            </div>
        </footer>
    )
}