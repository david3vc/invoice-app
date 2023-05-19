import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardInvoiceStatus from "./CardInvoiceStatus";

interface ICardInvoice {
    backgroundColor: string;
    colorText: string;
}

const CardInvoice = ({ backgroundColor, colorText }: ICardInvoice) => {
    return (
        <div className={`container-card-invoice d-sm-flex justify-content-between flex-sm-nowrap flex-md-nowrap shadow-sm p-3 mb-5 bg-body-tertiary rounded ${backgroundColor}`}>
            <Row className="container-card-invoice__user col-sm-5 col-md-5">
                <Col className="col-sm-4">
                    <span className="text-secondary">#</span>
                    <span className="fw-bold">RT3080</span>
                </Col>
                <Col className="d-flex justify-content-end col-sm-8">
                    <span className={`${colorText}`}>Jensen Huang</span> 
                </Col>
            </Row>
            <Row className="container-card-invoice__detail col-sm-7 col-md-7 ps-1 pe-1">
                <Col className="d-sm-flex col-sm-9 col-md-8 justify-content-sm-around">
                    <span className={`d-flex d-sm-inline-flex ${colorText}`}>19 Aug 2021</span>
                    <span className="d-flex d-sm-inline-flex fw-bold">S/. 1800.90</span>
                </Col>
                <Col className="d-flex col-sm-3 col-md-4 justify-content-end align-items-center">
                    <CardInvoiceStatus />
                </Col>
            </Row>
        </div>
    );
};

export default CardInvoice;
