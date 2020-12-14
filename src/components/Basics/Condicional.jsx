import React from "react"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <h2>O numero é {props.numero}</h2>
            {
                props.numero === 0 ? <span>O numero é neutro</span> : props.numero % 2 === 0 ? <span>O numero é Par</span> : <span>O numero é Impar</span>
            }
        </div>
    )
}