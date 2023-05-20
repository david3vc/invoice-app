import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { LIGHT_THEME } from "../../constants";
import Button from "../../components/Button";

interface INewInvoice {
    theme: string;
}

const NewInvoice = ({ theme }: INewInvoice) => {
    return (
        <div className="container-new-invoice d-flex flex-column align-items-center">
            <Row className="container-new-invoice__bill-from">
                <Col xs={12} sm={12} md={12}>
                    <Button
                        nombre="Go back"
                        colorFondo=""
                        color="colorNegro"
                        colorHover="colorHoverE"
                        to="/"
                        width="130px"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-left-short"
                            viewBox="0 0 16 16"
                            color="#7c5dfa"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                            />
                        </svg>
                    </Button>
                </Col>
                <Col xs={12} sm={12} md={12} className="mt-3 mb-3">
                    <span className="fw-bold fs-2">New Invoice</span>
                </Col>
                <Col xs={12} sm={12} md={12} className="mt-3 mb-3">
                    <span className="fw-bold" style={{ color: "#7c5dfa" }}>
                        Bill From
                    </span>
                </Col>
                <Col xs={12} sm={12} md={12}>
                    <Form.Label className="text-secondary">
                        Street Address
                    </Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        name="descripcion"
                        // value={formik.values.descripcion ?? ''}
                        // onChange={formik.handleChange}
                        style={
                            theme === LIGHT_THEME
                                ? { background: "#252945", color: "white" }
                                : {}
                        }
                    />
                </Col>
                <Col xs={6} sm={6} md={4}>
                    <Form.Label className="text-secondary">City</Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        name="descripcion"
                        // value={formik.values.descripcion ?? ''}
                        // onChange={formik.handleChange}
                        style={
                            theme === LIGHT_THEME
                                ? { background: "#252945", color: "white" }
                                : {}
                        }
                    />
                </Col>
                <Col xs={6} sm={6} md={4}>
                    <Form.Label className="text-secondary">
                        Post Code
                    </Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        name="descripcion"
                        // value={formik.values.descripcion ?? ''}
                        // onChange={formik.handleChange}
                        style={
                            theme === LIGHT_THEME
                                ? { background: "#252945", color: "white" }
                                : {}
                        }
                    />
                </Col>
                <Col xs={12} sm={12} md={4}>
                    <Form.Label className="text-secondary">Country</Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        name="descripcion"
                        // value={formik.values.descripcion ?? ''}
                        // onChange={formik.handleChange}
                        style={
                            theme === LIGHT_THEME
                                ? { background: "#252945", color: "white" }
                                : {}
                        }
                    />
                </Col>
            </Row>
            <Row className="container-new-invoice__bill-to">
                <Col xs={12} sm={12} md={12} className="mt-5 mb-3">
                    <span className="fw-bold" style={{ color: "#7c5dfa" }}>
                        Bill To
                    </span>
                </Col>
                <Col xs={12} sm={12} md={12}>
                    <Form.Label className="text-secondary">
                        Client's Name
                    </Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        name="descripcion"
                        // value={formik.values.descripcion ?? ''}
                        // onChange={formik.handleChange}
                        style={
                            theme === LIGHT_THEME
                                ? { background: "#252945", color: "white" }
                                : {}
                        }
                    />
                </Col>
                <Col xs={12} sm={12} md={12}>
                    <Form.Label className="text-secondary">
                        Client's Email
                    </Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        name="descripcion"
                        // value={formik.values.descripcion ?? ''}
                        // onChange={formik.handleChange}
                        style={
                            theme === LIGHT_THEME
                                ? { background: "#252945", color: "white" }
                                : {}
                        }
                    />
                </Col>
                <Col xs={12} sm={12} md={12}>
                    <Form.Label className="text-secondary">
                        Street Address
                    </Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        name="descripcion"
                        // value={formik.values.descripcion ?? ''}
                        // onChange={formik.handleChange}
                        style={
                            theme === LIGHT_THEME
                                ? { background: "#252945", color: "white" }
                                : {}
                        }
                    />
                </Col>
                <Col xs={6} sm={6} md={4}>
                    <Form.Label className="text-secondary">City</Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        name="descripcion"
                        // value={formik.values.descripcion ?? ''}
                        // onChange={formik.handleChange}
                        style={
                            theme === LIGHT_THEME
                                ? { background: "#252945", color: "white" }
                                : {}
                        }
                    />
                </Col>
                <Col xs={6} sm={6} md={4}>
                    <Form.Label className="text-secondary">
                        Post Code
                    </Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        name="descripcion"
                        // value={formik.values.descripcion ?? ''}
                        // onChange={formik.handleChange}
                        style={
                            theme === LIGHT_THEME
                                ? { background: "#252945", color: "white" }
                                : {}
                        }
                    />
                </Col>
                <Col xs={12} sm={12} md={4}>
                    <Form.Label className="text-secondary">Country</Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        name="descripcion"
                        // value={formik.values.descripcion ?? ''}
                        // onChange={formik.handleChange}
                        style={
                            theme === LIGHT_THEME
                                ? { background: "#252945", color: "white" }
                                : {}
                        }
                    />
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <Form.Label className="text-secondary">
                        Invoice Date
                    </Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        name="descripcion"
                        // value={formik.values.descripcion ?? ''}
                        // onChange={formik.handleChange}
                        style={
                            theme === LIGHT_THEME
                                ? { background: "#252945", color: "white" }
                                : {}
                        }
                    />
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <Form.Label className="text-secondary">
                        Payment Terms
                    </Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        name="descripcion"
                        // value={formik.values.descripcion ?? ''}
                        // onChange={formik.handleChange}
                        style={
                            theme === LIGHT_THEME
                                ? { background: "#252945", color: "white" }
                                : {}
                        }
                    />
                </Col>
                <Col xs={12} sm={12} md={12}>
                    <Form.Label className="text-secondary">
                        Project Description
                    </Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        name="descripcion"
                        // value={formik.values.descripcion ?? ''}
                        // onChange={formik.handleChange}
                        style={
                            theme === LIGHT_THEME
                                ? { background: "#252945", color: "white" }
                                : {}
                        }
                    />
                </Col>
            </Row>
            <Row className="container-new-invoice__item-list">
                <Col xs={12} sm={12} md={12} className="mt-4 mb-3">
                    <span className="text-secondary fs-4 fw-bold">
                        Item List
                    </span>
                </Col>
                <Col xs={12} sm={12} md={4}>
                    <Form.Label className="text-secondary">
                        Item Name
                    </Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        name="descripcion"
                        // value={formik.values.descripcion ?? ''}
                        // onChange={formik.handleChange}
                        style={
                            theme === LIGHT_THEME
                                ? { background: "#252945", color: "white" }
                                : {}
                        }
                    />
                </Col>
                <Col xs={3} sm={3} md={2}>
                    <Form.Label className="text-secondary">Qty.</Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        name="descripcion"
                        // value={formik.values.descripcion ?? ''}
                        // onChange={formik.handleChange}
                        style={
                            theme === LIGHT_THEME
                                ? { background: "#252945", color: "white" }
                                : {}
                        }
                    />
                </Col>
                <Col xs={4} sm={4} md={2}>
                    <Form.Label className="text-secondary">Price</Form.Label>
                    <Form.Control
                        type="text"
                        size="sm"
                        name="descripcion"
                        // value={formik.values.descripcion ?? ''}
                        // onChange={formik.handleChange}
                        style={
                            theme === LIGHT_THEME
                                ? { background: "#252945", color: "white" }
                                : {}
                        }
                    />
                </Col>
                <Col xs={5} sm={5} md={4} className="d-flex flex-column">
                    <Form.Label className="text-secondary">Total</Form.Label>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="text-secondary fw-bold">400.00</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                        >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                    </div>
                </Col>
                <Col xs={12} className="mt-3 mb-4">
                    <Button
                        nombre="Add New Item"
                        colorFondo=""
                        color="colorA"
                        colorHover="colorHoverE"
                        to="#"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-plus-lg"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                            />
                        </svg>
                    </Button>
                </Col>
            </Row>
            <div className="container-new-invoice__buttons shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <div className="container-new-invoice__buttons__discard">
                    <Button
                        nombre="Discard"
                        colorFondo=""
                        color="colorA"
                        colorHover="colorHoverE"
                        to="#"
                        // width="130px"
                    />
                </div>
                <div className="container-new-invoice__buttons__save">
                    <Button
                        nombre="Draft"
                        colorFondo="colorFondoC"
                        color="colorF"
                        colorHover="colorHoverD"
                        to="#"
                        // width="130px"
                    />
                    <Button
                        nombre="Save"
                        colorFondo="colorFondoA"
                        color=""
                        colorHover="colorHoverB"
                        to="#"
                        // width="130px"
                    />
                </div>
            </div>
        </div>
    );
};

export default NewInvoice;
