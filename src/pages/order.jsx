import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const OrderPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const item = state?.item;

    const [form, setForm] = useState({
        name: "",
        phone: "",
        address: "",
        qty: 1,
        notes: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleOrder = () => {
        if (!form.name || !form.phone || !form.address) return;
        setSubmitted(true);
    };

    if (!item) {
        return (
            <div className="order-page section-padding text-center">
                <h2>No item selected.</h2>
                <button className="primary-btn mt-20" onClick={() => navigate("/")}>
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <section className="order-page section-padding">
            <Container>
                <button className="back-btn" onClick={() => navigate(-1)}>
                    ← Back
                </button>

                {submitted ? (
                    <div className="order-success fade-in-animate">
                        <div className="success-icon">☕</div>
                        <h2>Order Placed!</h2>
                        <p>
                            Thank you <strong>{form.name}</strong>! Your{" "}
                            <strong>{item.title}</strong> is being brewed.
                        </p>
                        <button className="primary-btn mt-20" onClick={() => navigate("/")}>
                            Back to Home
                        </button>
                    </div>
                ) : (
                    <Row className="align-items-start">
                        <Col xl={5} lg={5}>
                            <div className="order-item-preview slide-up-animate">
                                <img src={item.image} alt={item.title} className="order-img" />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <span className="card-price">{item.price}</span>
                            </div>
                        </Col>

                        <Col xl={7} lg={7}>
                            <div className="order-form slide-up-animate">
                                <h2 className="order-form-title">Complete Your Order</h2>

                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        value={form.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+91 XXXXX XXXXX"
                                        value={form.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Delivery Address</label>
                                    <textarea
                                        name="address"
                                        placeholder="Your delivery address"
                                        value={form.address}
                                        onChange={handleChange}
                                        rows={3}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Quantity</label>
                                    <input
                                        type="number"
                                        name="qty"
                                        min="1"
                                        max="20"
                                        value={form.qty}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Special Instructions (optional)</label>
                                    <textarea
                                        name="notes"
                                        placeholder="Extra sugar, less milk..."
                                        value={form.notes}
                                        onChange={handleChange}
                                        rows={2}
                                    />
                                </div>

                                <div className="order-total">
                                    Total:{" "}
                                    <strong>
                                        ${(parseFloat(item.price.replace("$", "")) * form.qty).toFixed(2)}
                                    </strong>
                                </div>

                                <button className="primary-btn w-100" onClick={handleOrder}>
                                    Confirm Order ☕
                                </button>
                            </div>
                        </Col>
                    </Row>
                )}
            </Container>
        </section>
    );
};

export default OrderPage;