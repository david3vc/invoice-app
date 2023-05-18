import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import {
    BOX_SHADOW_DARK_THEME,
    BOX_SHADOW_LIGHT_THEME,
    LIGHT_THEME,
} from "../../constants";

const Main = styled("div")`
    font-family: sans-serif;
    height: 100vh;
`;

const DropDownContainer = styled("div")`
    width: 5.5em;
    margin: 0 auto;
`;

const DropDownHeader = styled("div")`
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
    cursor: pointer;
    width: 8.5em;
    padding: 1em;
    margin-top: 10px;
    box-sizing: border-box;
    &:first-child {
        padding-top: 0.8em;
    }
    border-radius: 15px;
    /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
    position: absolute;
    /* left: 110px; */
    right: 80px;
    z-index: 3;
`;

const ListItem = styled("li")`
    list-style: none;
    margin-bottom: 3px;
`;

const options = [
    { typography: "Draft", codigo: 1 },
    { typography: "Pending", codigo: 2 },
    { typography: "Paid", codigo: 3 },
];

interface IHome {
    theme: string;
}

const Home = ({ theme }: IHome) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [themeBoxShadow, setThemeBoxShadow] = useState(BOX_SHADOW_DARK_THEME);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = () => () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (theme === LIGHT_THEME) setThemeBoxShadow(BOX_SHADOW_DARK_THEME);
        else setThemeBoxShadow(BOX_SHADOW_LIGHT_THEME);
    }, [theme]);

    return (
        <div className="container-home">
            <Row className="subcontainer-home d-flex flex-nowrap">
                <Col className="d-flex flex-wrap">
                    <span className="fw-bold">Invoices</span>
                    <span className="text-secondary fw-bold" style={{fontSize: '12px'}}>7 invoices</span>
                </Col>
                <Col className="d-flex align-items-center">
                    <DropDownContainer className={theme}>
                        <DropDownHeader onClick={toggling} className={`d-flex align-items-center ${theme}`}>
                            <span className="" style={{marginRight: '5px'}}>{selectedOption || "Filter"}</span>
                            {isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-caret-down"
                                    viewBox="0 0 16 16"
                                    color="#7c5dfa"
                                >
                                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-caret-up"
                                    viewBox="0 0 16 16"
                                    color="#7c5dfa"
                                >
                                    <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
                                </svg>
                            )}
                        </DropDownHeader>
                        {isOpen && (
                            <DropDownListContainer className={theme}>
                                <DropDownList
                                    className={`${theme} ${themeBoxShadow} lista-opciones`}
                                >
                                    {options.map((option) => (
                                        <ListItem
                                            onClick={onOptionClicked}
                                            key={Math.random()}
                                        >
                                            <Form.Check
                                                type="checkbox"
                                                id={`default-checkbox`}
                                                label={`${option.typography}`}
                                            />
                                        </ListItem>
                                    ))}
                                </DropDownList>
                            </DropDownListContainer>
                        )}
                    </DropDownContainer>
                </Col>
                <Col>
                    <Button
                        nombre="New"
                        colorFondo="colorFondoA"
                        color=""
                        colorHover="colorHoverB"
                        to="#"
                        width="80px"
                    >
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-plus-circle-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                            </svg>
                        </span>
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default Home;