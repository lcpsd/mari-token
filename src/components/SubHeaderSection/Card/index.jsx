
export function Card({title, text, cardIcon, iconFirst}){

    return(
        <div>

            {
                iconFirst && <img src={cardIcon} alt="" />
            }

            <h1>{title}</h1>
            <p>{text}</p>

            {
                !iconFirst && <img src={cardIcon} alt="" />
            }

        </div>
    )
}