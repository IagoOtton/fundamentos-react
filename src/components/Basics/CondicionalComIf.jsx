import React from 'react'
import If from "./If"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <h2>O numero é {props.numero}</h2>
            <If test={props.numero === 0}> 
                <span>O numero é Neutro</span>
            </If>
            <If test={props.numero % 2 === 0 && props.numero > 0}>
                <span>O numero é Par</span>
            </If>
            <If test={props.numero % 2 === 1 && props.numero > 0}>
            <span>O numero é Impar</span>
            </If>
        </div>
    )
}