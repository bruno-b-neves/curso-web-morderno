export default function Cabecalho(props) {
    // Props é somente leitura
    return (
        <header>
            <h1>
                {props.titulo}
            </h1>
        </header>
    )
}