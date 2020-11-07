import * as React from 'react'
import './Button.scss';


interface Props {
    text: string,
    primaryIcon?: string,
    secondaryIcon?: string,
    onClick?: () => void,
    primary?: boolean
}

const Button = ({ text, primaryIcon, secondaryIcon, onClick, primary = false }: Props) =>
    <button onClick={onClick} className={`mainButton ${primary ? 'primary' : ''}`}>
        {primaryIcon && <img src={primaryIcon} alt="" />}
        {text}
        {secondaryIcon && <img src={secondaryIcon} alt="" />}
    </button>


export default Button;
