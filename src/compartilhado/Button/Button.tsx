import React from "react";
import './Button.css'

declare interface ButtonProps {
    content?: string
    onClick?: () => void
    children:any
    icone: JSX.Element
}

const Button: React.FC<ButtonProps> = (props) => {

    return <button className="AppButton" onClick={props.onClick}>
        {props.children || 'botao padrao'}
        {props.icone}
    </button>

}

export default Button