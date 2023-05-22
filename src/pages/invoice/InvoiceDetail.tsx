import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../../components/Button";
import CardInvoiceStatus from "../home/components/CardInvoiceStatus";
import { LIGHT_THEME } from "../../constants";

interface IInvoiceDetail {
    theme: string;
}

const InvoiceDetail = ({ theme }: IInvoiceDetail) => {
    return (
        <div className="container-invoice-detail">
            <Row className="container-invoice-detail__button-back">
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
            </Row>
            <div
                className="container-invoice-detail__header shadow-sm p-3 mb-5 bg-body-tertiary rounded"
                style={
                    theme === LIGHT_THEME
                        ? { backgroundColor: "#252945" }
                        : { backgroundColor: "white" }
                }
            >
                <div className="container-invoice-detail__status">
                    <span>Status</span>
                    <div className="d-flex">
                        <CardInvoiceStatus />
                    </div>
                </div>
                <div className="container-invoice-detail__buttons">
                    <Button
                        nombre="Edit"
                        colorFondo=""
                        color="colorA"
                        colorHover="colorHoverE"
                        to="/"
                        width=""
                    />
                    <Button
                        nombre="Delete"
                        colorFondo="colorFondoI"
                        color=""
                        colorHover="colorHoverJ"
                        to="/"
                        width=""
                    />
                    <Button
                        nombre="Mark as Paid"
                        colorFondo="colorFondoA"
                        color=""
                        colorHover="colorHoverB"
                        to="/"
                        width="150px"
                    />
                </div>
            </div>
            <Row
                className="container-invoice-detail__information shadow-sm p-3 mb-5 bg-body-tertiary rounded"
                style={
                    theme === LIGHT_THEME
                        ? { backgroundColor: "#252945" }
                        : { backgroundColor: "white" }
                }
            >
                <Col xs={12} sm={6}>
                    <p>
                        <span>#</span>
                        <span className="fw-bold">XM9141</span>
                    </p>
                    <p>Graphic Design</p>
                </Col>
                <Col
                    xs={12}
                    sm={6}
                    className="d-flex flex-column align-items-sm-end"
                >
                    <span>19 Union Terrace</span>
                    <span>London</span>
                    <span>E1 3EZ</span>
                    <span>United Kingdom</span>
                </Col>
                <Col xs={6} sm={4}>
                    <div className="d-flex flex-column">
                        <span>Invoice Date</span>
                        <span className="fw-bold">21 Aug 2021</span>
                    </div>
                    <div className="d-flex flex-column">
                        <span>Payment Due</span>
                        <span className="fw-bold">20 Sep 2021</span>
                    </div>
                </Col>
                <Col xs={6} sm={4} className="d-flex flex-column">
                    <span>Bill To</span>
                    <span className="fw-bold">Alex Grim</span>
                    <span>84 Church Way</span>
                    <span>Bradford</span>
                    <span>BD1 9PB</span>
                    <span>United Kingdom</span>
                </Col>
                <Col xs={12} sm={4} className="d-flex flex-column">
                    <span>Send to</span>
                    <span className="fw-bold">alexgrim@gmail.com</span>
                </Col>

                <div className="container-invoice-detail__total-movil d-sm-none">
                    <div
                        className="container-invoice-detail__total-movil__detail"
                        style={
                            theme === LIGHT_THEME
                                ? { backgroundColor: "#2c3152" }
                                : { backgroundColor: "#f8f8fb" }
                        }
                    >
                        <div className="total-movil__detail__item d-flex justify-content-between align-items-center">
                            <div className="total-movil__detail__item__name d-flex flex-column">
                                <span className="fw-bold">Banner Design</span>
                                <span>1 x S/. 156.00</span>
                            </div>
                            <div className="total-movil__detail__item__amount">
                                <span>S/. 156.00</span>
                            </div>
                        </div>
                        <div className="total-movil__detail__item d-flex justify-content-between align-items-center">
                            <div className="total-movil__detail__item__name d-flex flex-column">
                                <span className="fw-bold">Email Design</span>
                                <span>2 x S/. 200.00</span>
                            </div>
                            <div className="total-movil__detail__item__amount">
                                <span>S/. 400.00</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="container-invoice-detail__total-movil__grand-total d-flex justify-content-between"
                        style={
                            theme === LIGHT_THEME
                                ? { backgroundColor: "#141625" }
                                : { backgroundColor: "#1e2139", color: "white" }
                        }
                    >
                        <span>Grand Total</span>
                        <span>S/. 556.00</span>
                    </div>
                </div>

                <div className="container-invoice-detail__total-desktop">
                    <div
                        className="container-invoice-detail__total-desktop__detail"
                        style={
                            theme === LIGHT_THEME
                                ? { backgroundColor: "#2c3152" }
                                : { backgroundColor: "#f8f8fb" }
                        }
                    >
                        <Row>
                            <Col sm={5}>
                                <span>Item Name</span>
                            </Col>
                            <Col sm={2}>
                                <span>Qty</span>
                            </Col>
                            <Col sm={2}>
                                <span>Price</span>
                            </Col>
                            <Col sm={3} className="d-flex justify-content-end">
                                <span>Total</span>
                            </Col>
                        </Row>
                        <div className="total-desktop__detail__items">
                            <Row>
                                <Col sm={5}>
                                    <span className="fw-bold">Banner Design</span>
                                </Col>
                                <Col sm={2}>
                                    <span>1</span>
                                </Col>
                                <Col sm={2}>
                                    <span>S/. 156.00</span>
                                </Col>
                                <Col
                                    sm={3}
                                    className="d-flex justify-content-end"
                                >
                                    <span className="fw-bold">S/. 156.00</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={5}>
                                    <span className="fw-bold">Email Design</span>
                                </Col>
                                <Col sm={2}>
                                    <span>2</span>
                                </Col>
                                <Col sm={2}>
                                    <span>S/. 200.00</span>
                                </Col>
                                <Col
                                    sm={3}
                                    className="d-flex justify-content-end"
                                >
                                    <span className="fw-bold">S/. 400.00</span>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div
                        className="container-invoice-detail__total-desktop__grand-total d-flex justify-content-between align-items-center"
                        style={
                            theme === LIGHT_THEME
                                ? { backgroundColor: "#141625" }
                                : { backgroundColor: "#1e2139", color: "white" }
                        }
                    >
                        <span>Grand Total</span>
                        <span className="fw-bold fs-3">S/. 556.00</span>
                    </div>
                </div>
            </Row>
            <div
                className="container-invoice-detail__buttons-movil shadow-sm p-3 mb-5 bg-body-tertiary rounded"
                style={
                    theme === LIGHT_THEME
                        ? { backgroundColor: "#252945" }
                        : { backgroundColor: "white" }
                }
            >
                <Button
                    nombre="Discard"
                    colorFondo=""
                    color="colorA"
                    colorHover="colorHoverE"
                    to="#"
                    // width="130px"
                />
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
    );
};

export default InvoiceDetail;
