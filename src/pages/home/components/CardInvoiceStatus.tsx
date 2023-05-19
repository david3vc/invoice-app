const CardInvoiceStatus = () => {
    return (
        <div className="container-card-invoice-status">
            <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="currentColor"
                    className="bi bi-circle-fill"
                    viewBox="0 0 16 16"
                    color="rgb(63, 187, 98)"
                >
                    <circle cx="8" cy="8" r="8" />
                </svg>
            </span>
            <span className="container-card-invoice-status__term">Paid</span>
        </div>
    );
};

export default CardInvoiceStatus;
