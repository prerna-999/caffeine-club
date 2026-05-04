import { Container, Row, Col } from "react-bootstrap";
import MobileMenu from "./MobileMenu";

const HeaderMenu = () => {
    return (
        <header className="header">
            <Container>
                <Row className="align-items-center">

                    <Col xl={2} lg={3} xs={6} className="text-start">
                        <img src="/assets/img/logo/logo.png" alt="logo" />
                    </Col>

                    <Col xl={8} className="d-xl-flex d-none align-items-center justify-content-center">
                        <ul className="nav-list d-flex gap-20">
                            <li><a href="">The Signature Brews</a></li>
                            <li><a href="">Chilled & Refreshing</a></li>
                            <li><a href="">Club House Bites</a></li>
                            <li><a href="">Customizations</a></li>
                            <li><a href="">The Monkey's Tale</a></li>
                        </ul>
                    </Col>

                    <Col lg={6} xs={6} className="d-flex d-xl-none justify-content-center">
                        <MobileMenu />
                    </Col>

                    <Col xl={2} lg={3} className="d-none d-lg-flex align-items-center justify-content-end">
                        <a href="" className="header-btn ">Sip With Us<span className="wave pl-10">👋</span></a>
                    </Col>

                </Row>
            </Container>
        </header>
    );
};

export default HeaderMenu;