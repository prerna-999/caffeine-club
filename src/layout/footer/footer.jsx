import { Container, Row, Col } from "react-bootstrap";
import { FiLink } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const FooterMenu = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col xl={3}>
                        <img src="/assets/img/logo/logo.png" alt="" />
                        <p>Fresh Brews . Cool Vibes. <br></br>One Happy Club ❤️</p>
                        <p>
                            Serving Handcrafted Coffee and  Cafe Bites with a playfiuly twist.
                        </p>
                    </Col>
                    <Col xl={3}>
                        <h4>< FiLink /> QUICK LINKS</h4>
                        <ul>
                            <li><a href="">The Signature Brews</a></li>
                            <li><a href="">Chilled & Refreshing</a></li>
                            <li><a href="">Club House Bites</a></li>
                            <li><a href="">Customizations</a></li>
                            <li><a href="">The Monkey's Tale</a></li>
                        </ul>
                    </Col>
                    <Col xl={3}>
                        <h4><FaMapMarkerAlt /> CONTACT</h4>
                        <ul>
                            <li><a href=""><MdEmail /> contact@gmail.com</a></li>
                            <li><a href=""><FaPhoneAlt /> 9874563217</a></li>
                            <li><a href=""><FaMapMarkerAlt />Mohali City Center</a></li>
                            <li><a href=""><FaClock />9:00am - 11pm</a></li>
                        </ul>
                    </Col>
                    <Col xl={3}>
                        <h4><FaUsers /> STAY CONNECTED</h4>
                        <div>
                            <a href="">< FaFacebookF /></a>
                            <a href="">< FaInstagram /></a>
                            <a href="">< FaYoutube /></a>
                        </div>
                        <h4><MdEmail />JION OUR CLUB </h4>
                        <p>Get updates, offers & brewing stories straight to your in box</p>
                    <form action="">
                        <input type="text" placeholder="enter your email" />
                        <button type="submit">Join the club </button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterMenu;