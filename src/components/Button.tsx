import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface IButton {
    colorFondo: string;
    colorHover: string;
    nombre: string;
    color: string;
    to: string;
    clase?: string;
    width?: string;
    border?: string;
    children?: ReactNode;
    onClick?: () => void
}

const Button = ({
    colorFondo,
    colorHover,
    nombre,
    color,
    children,
    clase,
    width,
    border,
    to,
    onClick
}: IButton) => {
    return (
        <NavLink
            to={to}
            className={`container-button ${colorFondo} ${colorHover} ${color} ${border} ${clase}`}
            style={{width: `${width}`}}
            onClick={onClick}
        >
            {children}
            {nombre}
        </NavLink>
    );
};

export default Button;