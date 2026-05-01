import { Container, Row, Col } from "react-bootstrap";

const HeaderMenu = () => {
    return (
            <header className="header">
                <Container>
                    <Row>
                        <Col xl={2} className="text-start">
                        <img src="/assets/img/logo/logo.png" alt="" />
                        </Col>
                        <Col xl={8} className="d-flex  align-items-center justify-content-center">
                                <ul className="nav-list d-flex gap-20">
                                <li> <a href="">The Signature Brews</a> </li>
                                <li> <a href="">Chilled & Refreshing</a> </li>
                                <li> <a href="">Club House Bites</a> </li>
                                <li> <a href="">Customizations</a> </li>
                                <li> <a href="">The Monkey's Tale</a> </li>
                            </ul>
                        </Col>
                        <Col xl={2} className="d-flex  align-items-center justify-content-end ">
                        <a href="">Connect with Club</a>
                        </Col>
                    </Row>
                </Container>
            </header>
    )
}

export default HeaderMenu;



