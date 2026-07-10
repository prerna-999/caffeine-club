import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import categoriesData from "../../data/Home/categoriesData";

const Categories = () => {
    const [quantities, setQuantities] = useState(
        categoriesData.reduce((acc, item) => {
            acc[item.id] = 0;
            return acc;
        }, {})
    );

    const increaseQty = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: prev[id] + 1,
        }));
    };

    const decreaseQty = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: prev[id] > 0 ? prev[id] - 1 : 0,
        }));
    };

    return (
        <section className="padding">
            <Container>
                <Row>
                    {categoriesData.map((item) => (
                        <Col xl={3} sm={6}  key={item.id}>
                            <Card className=" mt-10 mb-10">
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>

                                    <div className="d-flex align-items-center gap-2">
                                        <Button
                                            // variant="danger"
                                            onClick={() => decreaseQty(item.id)}
                                        >
                                            -
                                        </Button>

                                        <span>{quantities[item.id]}</span>

                                        <Button
                                            // variant="success"
                                            onClick={() => increaseQty(item.id)}
                                        >
                                            +
                                        </Button>
                                    </div>
                                    <Button>{item.button}</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Categories;