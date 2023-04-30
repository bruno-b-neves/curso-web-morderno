// COMPONENTE BASEADO EM CLASSE = TEM FUNCIONALIDADES QUE UM COMPONENTE FUNCIONAL NÃO TEM
// COMO TRABALHAR COM O ESTADO DO COMPONENTE E OS METODOS DO CICLO DE VIDA

import React, { Component } from "react";

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props)
        
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state
        return (
         <div>
            <h1>{tipo} {nome}</h1>
            <hr />
            <input type="text" placeholder="Assunto..." 
                value={tipo} onChange={ this.setTipo } />

            <input type="text" placeholder="Responsável..."
                value={nome} onChange={ e => this.setNome(e) } />
         </div>
        ) 
    } 
}
