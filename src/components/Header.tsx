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
import { useNavigate } from "react-router-dom";

interface IHeader {
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    theme: string;
}

const Header = ({ setTheme, theme }: IHeader) => {
    const navigate = useNavigate();
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
                    <div className="container-header__logo d-flex">
                        <img src={logo} alt="" />
                    </div>
                </Col>
                <Col className="d-flex justify-content-end align-items-center">
                    <Stack direction="horizontal" gap={3}>
                        <div
                            className="container-header__theme"
                            onClick={toggleTheme}
                        >
                            <img
                                src={theme === DARK_THEME ? iconLuna : iconSun}
                                alt=""
                            />
                        </div>
                        <div
                            className="container-header__user"
                            onClick={() => setUserButton(!userButton)}
                        >
                            <span>J</span>
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
