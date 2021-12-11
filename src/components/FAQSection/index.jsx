import { CardFaq } from './CardFaq'
import styles from './styles.module.scss'

export function FAQSection(){

    return(
        <section className={styles.section} id="faqSection">
            <div className={styles.container}>
                <h1>Frequently Asked Questions</h1>

                <CardFaq title="¿Qué es Abis Lab?" 
                info="Es un juego impulsado por el Mariverso, el cual tiene como finalidad crear tus propios
                productos de cannabis y obtener beneficios con ellos, el PVE sera la granja donde se
                realice todo el proceso de creacion y PVP batallas al estilo de Overcooked."
                
                extra1="Los propietarios de los Laboratorios NFT son recompensados por los
                duelos que organizan."

                extra2="
                Cuando termina un partido, el token de moneda del juego, se divide entre
                el equipo ganador y el propietario del Laboratorio."/>

                <CardFaq title="¿como compro el token MARI?" info="En las ICOs que se realizaran en las fechas indicadas y luego de ello en pancakeswap"/>

                <CardFaq title="¿Cómo compro un Laboratorio NFT?" info="En el marketplace que se implentara pronto a la interfaz de la plataforma."/>

                <CardFaq title="¿Cómo compro un Productor quimico NFT?" info="Del mismo modo que los Laboratorios en el marketplace, donde luego se podran vender y
                comprar entre los usuarios"/>
            </div>
        </section>
    )
}