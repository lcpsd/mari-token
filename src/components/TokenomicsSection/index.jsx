import { TokenomicsCard } from './TokenomicsCard'
import styles from './styles.module.scss'
import {GiReceiveMoney} from 'react-icons/gi'
import {IoMdBonfire} from 'react-icons/io'
import {HiSpeakerphone} from 'react-icons/hi'
import {BsFillShieldLockFill} from 'react-icons/bs'

export function TokenomicsSection(){

    return(
        <section className={styles.section}>
            <div className={styles.container}>
                <h1>Tokenomics</h1>
                <div>
                    <TokenomicsCard 
                    text="3% of each transaction is redistributed to all the holders"
                    color="brown"
                    >
                        <GiReceiveMoney/>
                    </TokenomicsCard>

                    <TokenomicsCard 
                    text="The Mari Token protocol will burn 3% of every transaction forever"
                    color="green"
                    >
                        <IoMdBonfire/>
                    </TokenomicsCard>

                    <TokenomicsCard 
                    text="3% of token supply allocated for marketing and promotion."
                    color="brown"
                    >
                        <HiSpeakerphone/>
                    </TokenomicsCard>

                    <TokenomicsCard 
                    text="Time locked liquidity with 3% of token supply in Dev Wallet."
                    color="green"
                    >
                        <BsFillShieldLockFill/>
                    </TokenomicsCard>
                </div>
                
            </div>
        </section>
    )
}