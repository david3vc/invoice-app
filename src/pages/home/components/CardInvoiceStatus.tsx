interface ICardInvoiceStatus {
    status: string;
}

const CardInvoiceStatus = ({ status }: ICardInvoiceStatus) => {
    const colorIcon =
        status === "Pending" ? "rgb(255, 155, 55)" : "rgb(63, 187, 98)";
    return (
        <div className={`container-card-invoice-status ${status}`}>
            <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="currentColor"
                    className="bi bi-circle-fill"
                    viewBox="0 0 16 16"
                    // color="rgb(63, 187, 98)"
                    color={
                        status === "Draft" ? "rgb(164, 164, 164)" : colorIcon
                    }
                >
                    <circle cx="8" cy="8" r="8" />
                </svg>
            </span>
            <span
                className={`container-card-invoice-status__term ${status}-term`}
            >
                {status}
            </span>
        </div>
    );
};

export default CardInvoiceStatus;
