import Cliente from "@/core/Client"
import { IconsEdicao, IconsLixo } from "./Icones"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelect?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

const Tabela = (props: TabelaProps) => {

    const exibirAcoes = props.clienteExcluido || props.clienteSelect

    const renderizarCabecalho = () => {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false }
            </tr>
        )
    }

    const renderizarDados = () => {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} 
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    const renderizarAcoes = (cliente: Cliente) => {
        return (
            <td className="flex justify-center">
                {props.clienteSelect ? (
                    <button onClick={() => props.clienteSelect?.(cliente)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full
                        hover:bg-purple-50 p-2 m-1
                    `}>
                        {IconsEdicao}
                    </button>
                ) : false }

                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                        flex justify-center items-center
                        text-red-600 rounded-full
                        hover:bg-purple-50 p-2 m-1
                    `}>
                        {IconsLixo}
                    </button>
                ) : false }
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
} 

export default Tabela 