import Layout from "../components/Layout";
import Link from 'next/link'

export default function Dinamica() {
    return(
        <Layout titulo="Conteúdo Dinâmico">
            <h1>Página Dinâmica...</h1>
            <Link href="/products/product">
                Navegar para podutos
            </Link>
        </Layout>
    )
}