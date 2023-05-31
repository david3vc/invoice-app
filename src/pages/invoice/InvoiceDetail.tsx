import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../../components/Button";
import CardInvoiceStatus from "../home/components/CardInvoiceStatus";
import { LIGHT_THEME } from "../../constants";
import PageLayout from "../../components/PageLayout";
import useGetInvoice from "../../hooks/useGetInvoice";
import useMarkAsPaid from "../../hooks/useMarkAsPaid";
import useDeleteInvoice from "../../hooks/useDeleteInvoice";
import dayjs from "dayjs";

interface IInvoiceDetail {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const InvoiceDetail = ({ theme, setTheme }: IInvoiceDetail) => {
    const [grandTotal, setGrandTotal] = useState(0);
    const { id } = useParams();
    const {
        data,
        refetch: refecthInvoice,
        isSuccess: isGetInvoice,
    } = useGetInvoice(Number(id ?? 0));
    const { mutateAsync: markAsPaid, isSuccess: isMarkAsPaid } =
        useMarkAsPaid();
    const { mutateAsync: deleteInvoice } = useDeleteInvoice();

    useEffect(() => {
        if (isMarkAsPaid) refecthInvoice();
    }, [isMarkAsPaid]);

    useEffect(() => {
        if (isGetInvoice && data?.invoiceItems?.length > 0) {
            let total = 0;
            for (let i = 0; i < data.invoiceItems.length; i++) {
                total += data.invoiceItems[i].total;
            }
            setGrandTotal(total);
        }
    }, [isGetInvoice, data?.invoiceItems?.length]);

    return (
        <PageLayout setTheme={setTheme} theme={theme}>
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
                                    fillRule="evenodd"
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
                        <span className="text-secondary">Status</span>
                        <div className="d-flex">
                            <CardInvoiceStatus
                                status={data?.invoiceStatus?.name ?? ""}
                            />
                        </div>
                    </div>
                    <div className="container-invoice-detail__buttons">
                        <Button
                            nombre="Edit"
                            colorFondo=""
                            color="colorA"
                            colorHover="colorHoverE"
                            to={`/edit-invoice/${id}`}
                            width=""
                        />
                        <Button
                            nombre="Delete"
                            colorFondo="colorFondoI"
                            color=""
                            colorHover="colorHoverJ"
                            to="#"
                            width=""
                            onClick={() => deleteInvoice(Number(id))}
                        />
                        <Button
                            nombre="Mark as Paid"
                            colorFondo="colorFondoA"
                            color=""
                            colorHover="colorHoverB"
                            to="#"
                            width="150px"
                            onClick={async () => markAsPaid(Number(id))}
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
                            <span className="fw-bold">{data?.id}</span>
                        </p>
                        <p className="text-secondary">
                            {data?.projectDescription}
                        </p>
                    </Col>
                    <Col
                        xs={12}
                        sm={6}
                        className="d-flex flex-column align-items-sm-end"
                    >
                        <span className="text-secondary">
                            {data?.invoiceIssuer?.streetAddress}
                        </span>
                        <span className="text-secondary">
                            {data?.invoiceIssuer?.city}
                        </span>
                        <span className="text-secondary">
                            {data?.invoiceIssuer?.postCode}
                        </span>
                        <span className="text-secondary">
                            {data?.invoiceIssuer?.country}
                        </span>
                    </Col>
                    <Col xs={6} sm={4}>
                        <div className="d-flex flex-column mt-4">
                            <span className="text-secondary">Invoice Date</span>
                            <span className="fw-bold">
                                {dayjs(data?.invoiceDate).format("DD-MM-YYYY")}
                            </span>
                        </div>
                    </Col>
                    <Col xs={6} sm={4} className="d-flex flex-column mt-4">
                        <span className="text-secondary">Bill To</span>
                        <span className="fw-bold">{data?.subject?.name}</span>
                        <span className="text-secondary">
                            {data?.subject?.streetAddress}
                        </span>
                        <span className="text-secondary">
                            {data?.subject?.city}
                        </span>
                        <span className="text-secondary">
                            {data?.subject?.postCode}
                        </span>
                        <span className="text-secondary">
                            {data?.subject?.country}
                        </span>
                    </Col>
                    <Col xs={12} sm={4} className="d-flex flex-column mt-4">
                        <span className="text-secondary">Send to</span>
                        <span className="fw-bold">{data?.subject?.email}</span>
                    </Col>

                    <div className="container-invoice-detail__total-movil d-sm-none mt-5">
                        <div
                            className="container-invoice-detail__total-movil__detail"
                            style={
                                theme === LIGHT_THEME
                                    ? { backgroundColor: "#2c3152" }
                                    : { backgroundColor: "#f8f8fb" }
                            }
                        >
                            {data?.invoiceItems.map((item) => (
                                <div className="total-movil__detail__item d-flex justify-content-between align-items-center">
                                    <div className="total-movil__detail__item__name d-flex flex-column">
                                        <span className="fw-bold">
                                            {item.name}
                                        </span>
                                        <span className="text-secondary fw-bold">
                                            {item.quantity} x S/.{" "}
                                            {item.price.toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="total-movil__detail__item__amount">
                                        <span className="fw-bold">
                                            S/. {item.total.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div
                            className="container-invoice-detail__total-movil__grand-total d-flex justify-content-between align-items-center"
                            style={
                                theme === LIGHT_THEME
                                    ? { backgroundColor: "#141625" }
                                    : {
                                          backgroundColor: "#1e2139",
                                          color: "white",
                                      }
                            }
                        >
                            <span className="fw-bold">Grand Total</span>
                            <span className="fw-bold fs-5">S/. {grandTotal.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="container-invoice-detail__total-desktop mt-5">
                        <div
                            className="container-invoice-detail__total-desktop__detail"
                            style={
                                theme === LIGHT_THEME
                                    ? { backgroundColor: "#2c3152" }
                                    : { backgroundColor: "#f8f8fb" }
                            }
                        >
                            <Row className="mb-4">
                                <Col sm={5}>
                                    <span className="text-secondary">
                                        Item Name
                                    </span>
                                </Col>
                                <Col sm={2}>
                                    <span className="text-secondary">Qty</span>
                                </Col>
                                <Col sm={2}>
                                    <span className="text-secondary">
                                        Price
                                    </span>
                                </Col>
                                <Col
                                    sm={3}
                                    className="d-flex justify-content-end"
                                >
                                    <span className="text-secondary">
                                        Total
                                    </span>
                                </Col>
                            </Row>
                            <div className="total-desktop__detail__items">
                                {data?.invoiceItems.map((item, i) => (
                                    <Row key={i}>
                                        <Col sm={5}>
                                            <span className="fw-bold">
                                                {item.name}
                                            </span>
                                        </Col>
                                        <Col sm={2}>
                                            <span className="text-secondary fw-bold">
                                                {item.quantity}
                                            </span>
                                        </Col>
                                        <Col sm={2}>
                                            <span className="text-secondary fw-bold">
                                                S/. {item.price.toFixed(2)}
                                            </span>
                                        </Col>
                                        <Col
                                            sm={3}
                                            className="d-flex justify-content-end"
                                        >
                                            <span className="fw-bold">
                                                S/. {item.total.toFixed(2)}
                                            </span>
                                        </Col>
                                    </Row>
                                ))}
                            </div>
                        </div>
                        <div
                            className="container-invoice-detail__total-desktop__grand-total d-flex justify-content-between align-items-center"
                            style={
                                theme === LIGHT_THEME
                                    ? { backgroundColor: "#141625" }
                                    : {
                                          backgroundColor: "#1e2139",
                                          color: "white",
                                      }
                            }
                        >
                            <span>Grand Total</span>
                            <span className="fw-bold fs-3">
                                S/. {grandTotal.toFixed(2)}
                            </span>
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
                        nombre="Edit"
                        colorFondo=""
                        color="colorA"
                        colorHover="colorHoverE"
                        // width="130px"
                        to={`/edit-invoice/${id}`}
                    />
                    <Button
                        nombre="Delete"
                        colorFondo="colorFondoI"
                        color=""
                        colorHover="colorHoverJ"
                        to="#"
                        // width="130px"
                        onClick={() => deleteInvoice(Number(id))}
                    />
                    <Button
                        nombre="Paid"
                        colorFondo="colorFondoA"
                        color=""
                        colorHover="colorHoverB"
                        to="#"
                        // width="130px"
                        onClick={async () => markAsPaid(Number(id))}
                    />
                </div>
            </div>
        </PageLayout>
    );
};

export default InvoiceDetail;
