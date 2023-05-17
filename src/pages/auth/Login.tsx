import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Button from "../../components/Button";
import imagenInvoice from "../../assets/undraw_printing_invoices_-5-r4r.svg";

const Login = () => {
    return (
        <div className="container-login d-flex justify-content-center">
            <Row className="subcontainer-login d-flex justify-content-center shadow p-3 mb-5 bg-body-tertiary rounded">
                <Col
                    md={7}
                    lg={7}
                    className="container-login__imagen d-flex align-items-center"
                >
                    <img src={imagenInvoice} alt="" />
                </Col>
                <Col xs={12} sm={8} md={5} lg={4}>
                    <Stack gap={5}>
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <span className="fs-2 fw-bold" style={{color: '#7c5dfa'}}>LOGIN</span>
                            </Col>
                        </Row>
                        <Row className="">
                            <Stack gap={3}>
                                <Col>
                                    <Form.Label>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-person"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                        </svg>{" "}
                                        Username
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        size="sm"
                                        name="descripcion"
                                        // value={formik.values.descripcion ?? ''}
                                        // onChange={formik.handleChange}
                                    />
                                </Col>
                                <Col sm={12}>
                                    <Form.Label>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-lock"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                                        </svg>{" "}
                                        Password
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        size="sm"
                                        name="descripcion"
                                        // value={formik.values.descripcion ?? ''}
                                        // onChange={formik.handleChange}
                                    />
                                </Col>
                            </Stack>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <Button
                                    nombre="Login"
                                    colorFondo="colorFondoA"
                                    color="colorK"
                                    colorHover="colorHoverB"
                                    to="#"
                                    width="120px"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex align-items-center">
                                <Stack direction="horizontal" gap={3}>
                                    <span>Don't have an account?</span>
                                    <Button
                                        nombre="Singup"
                                        colorFondo="colorFondoK"
                                        color="colorA"
                                        colorHover="colorHoverE"
                                        to="/singup"
                                        width="100px"
                                    />
                                </Stack>
                            </Col>
                        </Row>
                    </Stack>
                </Col>
            </Row>
        </div>
    );
};

export default Login;
