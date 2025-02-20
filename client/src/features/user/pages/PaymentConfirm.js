import { FaCheckCircle } from "react-icons/fa";

const PaymentConfirm = () => {
  return (
    <section className="d-flex align-items-center justify-content-center " style={{ minHeight: "80vh" }}>
      <div
        className="d-flex flex-column align-items-center"
        role="alert"
      >
        <FaCheckCircle
          className="bi text-success flex-shrink-0 mr-2"
          style={{ height: 40, width: 40 }}
          role="img"
          aria-label="Success:"
        />
        <div style={{ fontSize: "2rem", marginTop: "0.5rem" }}>Payment confirmation</div>
        <div style={{ fontSize: "1.3rem", marginTop: "1.5rem" }}>Thank you for purchase</div>
      </div>
    </section>
  );
};

export default PaymentConfirm;
