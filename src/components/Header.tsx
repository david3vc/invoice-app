import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import logo from "../assets/logo.svg";
import iconLuna from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";
import { useEffect, useState } from "react";
import { DARK_THEME, LIGHT_THEME } from "../constants";
import Button from "./Button";
import { LocalStorageSession } from "../sessions";
import { NavLink } from "react-router-dom";

interface IHeader {
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    theme: string;
}

const Header = ({ setTheme, theme }: IHeader) => {
    const [userButton, setUserButton] = useState(false);
    const toggleTheme = () => {
        if (theme === LIGHT_THEME) setTheme(DARK_THEME);
        else setTheme(LIGHT_THEME);
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const logout = () => {
        LocalStorageSession.removeAuthorization();
    }

    return (
        <div className="container-header">
            <Row className="d-flex">
                <Col>
                    <NavLink className="container-header__logo d-flex" to={"/"}>
                        <img src={logo} alt="" />
                    </NavLink>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                    <Stack direction="horizontal" gap={3}>
                        <div
                            className="container-header__theme"
                            onClick={toggleTheme}
                            style={{cursor: 'pointer'}}
                        >
                            <img
                                src={theme === DARK_THEME ? iconLuna : iconSun}
                                alt=""
                            />
                        </div>
                        <div
                            className="container-header__user"
                            onClick={() => setUserButton(!userButton)}
                            style={{cursor: 'pointer'}}
                        >
                            <span>{LocalStorageSession.getUsername().toString().substring(0,1).toUpperCase()}</span>
                            {userButton && (
                                <div className="container-header__user__logout">
                                    <Button
                                        color=""
                                        colorFondo="colorFondoD"
                                        colorHover=""
                                        nombre="Logout"
                                        to="/login"
                                        onClick={logout}
                                    />
                                </div>
                            )}
                        </div>
                    </Stack>
                </Col>
            </Row>
        </div>
    );
};

export default Header;
