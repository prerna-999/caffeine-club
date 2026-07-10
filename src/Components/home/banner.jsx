import { Container, Row, Col } from "react-bootstrap"

const Banner = () => {
    return (
        <section className="banner padding">
            <Container>
                <Row>
                    <Col xl={6} className="pt-80">
                        <span className="small-heading text-animation">☕ Freshly Brewed Every Day</span>
                        <h1 className="heading-h1 pt-30">Fresh Brews, Cozy Vibes & Delicious Café Bites</h1>
                        <p className="text pt-20">From rich espressos and creamy lattes to refreshing cold brews and tasty bites, Caffeine Club is your perfect destination for great coffee, good food, and unforgettable moments.</p>
                        <div className="d-flex gap-20 pt-30">
                            <button type="submit" className="primary-btn">Grab Your Brew</button>
                            <button type="submit" className="secondary-btn">Explore Flavors </button>
                        </div>
                    </Col>
                    <Col xl={6}>
                        {/* <img src="/assets/img/all-images/home/banner.png" alt="" className="coffee-animation"  height={450} /> */}

                        <div className="coffee-wrapper">
                            <img src="/assets/img/all-images/home/banner.png" className="coffee-animation" alt="Coffee" />

                            <span className="steam steam1"></span>
                            <span className="steam steam2"></span>
                            <span className="steam steam3"></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;