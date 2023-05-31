import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dayjs from "dayjs";
import CardInvoiceStatus from "./CardInvoiceStatus";
import { NavLink } from "react-router-dom";
import { InvoiceModel } from "../../../types";
import { LIGHT_THEME } from "../../../constants";
import { useEffect, useState } from "react";

interface ICardInvoice {
    backgroundColor: string;
    colorText: string;
    to: string;
    data: InvoiceModel;
    theme: string;
    key?: number;
}

const CardInvoice = ({
    backgroundColor,
    colorText,
    to,
    data,
    theme,
}: ICardInvoice) => {
    const [grandTotal, setGrandTotal] = useState(0);
    const fecha = dayjs(data.invoiceDate).format("DD-MM-YYYY");
    useEffect(() => {
        let total = 0;
        for (let i = 0; i < data.invoiceItems.length; i++) {
            total += data.invoiceItems[i].total;
        }
        setGrandTotal(total);
    }, []);
    return (
        <NavLink
            to={to}
            style={{ textDecoration: "none" }}
            className={`container-card-invoice d-sm-flex justify-content-between flex-sm-nowrap flex-md-nowrap shadow-sm p-3 mb-3 bg-body-tertiary rounded ${backgroundColor}`}
        >
            <Row className="container-card-invoice__user col-sm-5 col-md-5">
                <Col className="col-sm-4">
                    <span className="text-secondary">#</span>
                    <span
                        className="fw-bold"
                        style={{
                            color: theme !== LIGHT_THEME ? "black" : "white",
                        }}
                    >
                        {data.id}
                    </span>
                </Col>
                <Col className="d-flex justify-content-end col-sm-8">
                    <span
                        className={`${colorText}`}
                        style={{ color: theme !== LIGHT_THEME ? "" : "white" }}
                    >
                        {data.subject?.name}
                    </span>
                </Col>
            </Row>
            <Row className="container-card-invoice__detail col-sm-7 col-md-7 ps-1 pe-1">
                <Col className="d-sm-flex col-sm-9 col-md-8 justify-content-sm-around">
                    <span
                        className={`d-flex d-sm-inline-flex ${colorText}`}
                        style={{ color: theme !== LIGHT_THEME ? "" : "white" }}
                    >
                        {fecha}
                    </span>
                    <span
                        className="d-flex d-sm-inline-flex fw-bold"
                        style={{
                            color: theme !== LIGHT_THEME ? "black" : "white",
                        }}
                    >
                        S/. {grandTotal.toFixed(2)}
                    </span>
                </Col>
                <Col className="d-flex col-sm-3 col-md-4 justify-content-end align-items-center">
                    <CardInvoiceStatus
                        status={data.invoiceStatus?.name ?? ""}
                    />
                </Col>
            </Row>
        </NavLink>
    );
};

export default CardInvoice;
