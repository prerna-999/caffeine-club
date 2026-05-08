// import { Container, Row, Col } from "react-bootstrap";
// import { FiLink } from "react-icons/fi";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaClock } from "react-icons/fa";
// import { FaUsers } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { FaCopyright } from "react-icons/fa";

// const FooterMenu = () => {
//     return (
//         <footer className="footer">
//             <Container>
//                 <Row>
//                     <Col xl={3}>
//                         <img src="/assets/img/logo/logo.png" alt="" />
//                         <p>Fresh Brews . Cool Vibes. <br></br>One Happy Club ❤️</p>
//                         <p>
//                             Serving Handcrafted Coffee and  Cafe Bites with a playfiuly twist.
//                         </p>
//                     </Col>
//                     <Col xl={3}>
//                         <h4>< FiLink /> QUICK LINKS</h4>
//                         <ul>
//                             <li><a href=""><MdKeyboardArrowRight />The Signature Brews</a></li>
//                             <li><a href=""><MdKeyboardArrowRight />Chilled & Refreshing</a></li>
//                             <li><a href=""><MdKeyboardArrowRight />Club House Bites</a></li>
//                             <li><a href=""><MdKeyboardArrowRight />Customizations</a></li>
//                             <li><a href=""><MdKeyboardArrowRight />The Monkey's Tale</a></li>
//                         </ul>
//                     </Col>
//                     <Col xl={3}>
//                         <h4><FaMapMarkerAlt /> CONTACT</h4>
//                         <ul>
//                             <li><a href=""><MdEmail /> contact@gmail.com</a></li>
//                             <li><a href=""><FaPhoneAlt /> 9874563217</a></li>
//                             <li><a href=""><FaMapMarkerAlt />Mohali City Center</a></li>
//                             <li><a href=""><FaClock />9:00am - 11pm</a></li>
//                         </ul>
//                     </Col>
//                     <Col xl={3}>
//                         <h4><FaUsers /> STAY CONNECTED</h4>
//                         <div>
//                             <a href="">< FaFacebookF /></a>
//                             <a href="">< FaInstagram /></a>
//                             <a href="">< FaYoutube /></a>
//                         </div>
//                         <h4><MdEmail />JION OUR CLUB </h4>
//                         <p>Get updates, offers & brewing stories straight to your in box</p>
//                         <form action="">
//                             <input type="text" placeholder="enter your email" />
//                             <button type="submit">Join the club </button>
//                         </form>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col xl={6} >
//                         <p>
//                             <FaCopyright /> {new Date().getFullYear()} Caffeine Club
//                         </p>
//                     </Col>
//                     <Col xl={6}>
//                         <ul>
//                             <li><a href=""></a>Privacy Policy</li>
//                             <li><a href=""></a>Terms</li>
//                             <li><a href=""></a>Refund Policy</li>
//                         </ul>
//                     </Col>
//                 </Row>
//             </Container>
//         </footer>
//     )
// }

// export default FooterMenu;

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
    { icon: <MdEmail />, text: "contact@gmail.com" },
    { icon: <FaPhoneAlt />, text: "9874563217" },
    { icon: <FaMapMarkerAlt />, text: "Mohali City Center" },
    { icon: <FaClock />, text: "9:00am - 11pm" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaYoutube />, url: "#" },
  ];

  const bottomLinks = ["Privacy Policy", "Terms", "Refund Policy"];

  return (
    <footer className="footer">
      <Container>
        <Row>
       
          <Col xl={3}>
            <img src="/assets/img/logo/logo.png" alt="" />
            <p className="text-18 pb-20 pt-10">Fresh Brews. Cool Vibes. <br />One Happy Club ❤️</p>
            <p className="text-18">Serving Handcrafted Coffee and <br/>  Cafe Bites with a playful twist.</p>
          </Col>

      
          <Col xl={3}>
            <h4 className="text-18"><FiLink /> QUICK LINKS</h4>
            <ul className="pt-20">
              {quickLinks.map((item, index) => (
                <li key={index} className="pb-20 ">
                  <a href="#" className="text-18 ">
                    <MdKeyboardArrowRight /> {item}
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

            <div className="social-icons">
              {socialLinks.map((item, index) => (
                <a key={index} href={item.url}>
                  {item.icon}
                </a>
              ))}
            </div>

            <h4  className="text-18"><MdEmail /> JOIN OUR CLUB</h4>
            <p  className="text-18">Get updates, offers & brewing stories straight to your inbox</p>

            <form>
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