import { useState } from "react";
import Layout from "../components/Layout";
import styles from '../styles/Estado.module.css'

export default function Estado() {
    const [numero, setNumero] = useState(0) // React Hooks
    
    function incrementar() {
        setNumero(numero + 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <div className={styles.estado}>
                <div className={styles.input_numero}>{numero}</div>
                <div onClick={incrementar} className={styles.button}>Incrementar</div>
            </div>
        </Layout>
    )
}