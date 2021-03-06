import './styles.scss'

export function TokenomicsCard({children, text, color}){

    return(
        <div className={`tokenomicsCard ${color}`} id="tokenomics">
            <div>
                {children}
            </div>
            <p>{text}</p>
        </div>
    )
}