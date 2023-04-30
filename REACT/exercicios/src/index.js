import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

// $('<h1>').html('React 2') - Abaixo é um código semelhante

ReactDOM.render(
    <div>
       <Pai nome="Paulo" sobrenome="Silva" >
        { /* Como passo os componentes Filhos aqui? */ }

        <Filho nome="Pedro" />
        <Filho nome="Paulo" />
        <Filho nome="Carla" />

       </Pai>
    </div>,
    document.getElementById('root'))


