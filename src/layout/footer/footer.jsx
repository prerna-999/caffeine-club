import { Container, Row, Col } from "react-bootstrap";
import { FiLink } from "react-icons/fi";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaUsers, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdKeyboardArrowRight } from "react-icons/md";

const FooterMenu = () => {
  const quickLinks = [
    "The Signature Brews",
    "Chilled & Refreshing",
    "Club House Bites",
    "Customizations",
    "The Monkey's Tale",
  ];

  const contactInfo = [
    { icon: <MdEmail className="footer-icon" />, text: "contact@gmail.com" },
    { icon: <FaPhoneAlt className="footer-icon" />, text: "9874563217" },
    { icon: <FaMapMarkerAlt  className="footer-icon"/>, text: "Mohali City Center" },
    { icon: <FaClock className="footer-icon" />, text: "9:00am - 11pm" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF className="footer-icon" />, url: "#" },
    { icon: <FaInstagram className="footer-icon" />, url: "#" },
    { icon: <FaYoutube className="footer-icon" />, url: "#" },
  ];

  const bottomLinks = ["Privacy Policy", "Terms", "Refund Policy"];

  return (
    <footer className="footer">
      <Container>
        <Row>
       
          <Col xl={3}>
            <img src="/assets/img/logo/logo.png" alt="" />
            <p className="text-18-brown pb-20 pt-10">Fresh Brews. Cool Vibes. <br />One Happy Club ❤️</p>
            <p className="text-18-brown">Serving Handcrafted Coffee and <br/>  Cafe Bites with a playful twist.</p>
          </Col>

      
          <Col xl={3}>
            <h4 className="text-18"><FiLink /> QUICK LINKS</h4>
            <ul className="pt-20">
              {quickLinks.map((item, index) => (
                <li key={index} className="pb-20 ">
                  <a href="#" className="text-18 ">
                    <MdKeyboardArrowRight className="footer-icon"/> {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

       
          <Col xl={3}>
            <h4 className="text-18"><FaMapMarkerAlt /> CONTACT</h4>
            <ul className="pt-20 ">
              {contactInfo.map((item, index) => (
                <li key={index} className="pb-20 ">
                  <a href="#" className="text-18 ">
                    {item.icon} {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

       
          <Col xl={3}>
            <h4 className="text-18"><FaUsers /> STAY CONNECTED</h4>

            <div className="social-icons mt-20 mb-20">
              {socialLinks.map((item, index) => (
                <a key={index} href={item.url}>
                  {item.icon}
                </a>
              ))}
            </div>

            <h4  className="text-18"><MdEmail /> JOIN OUR CLUB</h4>
            <p  className="text-18">Get updates, offers & brewing stories straight to your inbox</p>

            <form className="subscribe-form mt-20">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Join the club</button>
            </form>
          </Col>
        </Row>


        <Row className="mt-3">
          <Col xl={6}>
            <p  className="text-18">© {new Date().getFullYear()} Caffeine Club</p>
          </Col>

          <Col xl={6} >
            <ul className="bottom-links d-flex gap-20 justify-content-end">
              {bottomLinks.map((item, index) => (
                <li key={index}>
                  <a href="#"  className="text-18">{item}</a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterMenu;