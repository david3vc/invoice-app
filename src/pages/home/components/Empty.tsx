import iconoEmpty from "../../../assets/illustration-empty.svg";

const Empty = () => {
    return (
        <>
            <div className="d-flex justify-content-center mt-5">
                <img src={iconoEmpty} alt="" />
            </div>
            <div className="d-flex flex-column align-items-center">
                <span className="fw-bold fs-4 mt-5 mb-3">
                    There is nothing here
                </span>
                <span className="text-secondary">
                    Create an invoice by clickling the
                </span>
                <span className="text-secondary">
                    <b>New</b> button and get started
                </span>
            </div>
        </>
    );
};

export default Empty;
