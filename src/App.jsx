import './App.css'
import React from 'react'
import Primeiro from './components/Basics/Primeiro'
import ComParamentro from './components/Basics/ComParametro'
import ComFilhos from './components/Basics/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Basics/Repeticao'
import CondicionalComIf from './components/Basics/CondicionalComIf'
import Condicional from './components/Basics/Condicional';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
    <div className="App">
        <Card titulo="#6 - Condicional v2">
            <CondicionalComIf numero={3}></CondicionalComIf>
        </Card>
        <Card titulo="#5 - Condicional v1">
            <Condicional numero={10}></Condicional>
        </Card>
        <Card titulo="#4 - Componente com Repetição">
            <Repeticao/>
        </Card>
        <Card titulo="#03 - Componente com filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Maisa</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente com Parametro">
            <ComParamentro titulo="Esse é o Titulo" subtitulo="E esse é o subtitulo" />
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro/>
        </Card>
    </div>
)