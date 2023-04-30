import React from "react";
import './Buttons.css'

export default props => {
    let classes = 'button '
    classes += props.operation_right ? 'operation_right' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    classes += props.button_top ? 'button_top' : ''

    return (
        <button 
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
                {props.label}
        </button>
    )
}
    