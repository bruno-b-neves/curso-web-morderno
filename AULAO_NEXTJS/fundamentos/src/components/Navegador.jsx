import Link from 'next/link'
import styles from '../styles/Navegador.module.css'

export default function Navegador(props) {
    return (
        <Link href={props.destino}>
            <div className={styles.navegador} passHref style={{
                background: props.cor ?? 'dodgerblue',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                letterSpacing: '0.085rem'
            }}>
                {props.texto}
            </div>
        </Link>
    )
}