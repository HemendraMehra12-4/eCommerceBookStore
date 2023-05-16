import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo1 from './facebook.png'
import logo2 from './gmail.jpg'
import logo3 from './linkdin.png'
import logo4 from './insta.jpg'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text py-3'>..........................................................................................................................................................................................................................................................................</Col>
        </Row>
        <Row>
          <Col className='text py-3'>..........................................................................................................................................................................................................................................................................</Col>
        </Row>
        <Row>
          <Col className='text py-3'>Hello there! here below I am providing with our contact details which will help you to get in touch with us.And if you want to sell your used book then also you can contact us via these platforms but the books/your notes/the study material should be in good condition.</Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>Thank you for using our website and please do inform us if you face any difficulty during your visit.</Col>
        </Row>
        <Row>
          <Col className='text-center py-6'><a href="https://www.facebook.com/profile.php?id=100008889192609" target="blank" rel="noreferrer"><img src={logo1} className="logo" alt="@Facebook" /></a> <a href="mailto:hmehra160@gmail.com"><img src={logo2} className="logo" alt="@Gmail" /></a> <a href="https://www.linkedin.com/in/hemendra-mehra-4432ab1a1/" target="_blank" rel="noreferrer"><img src={logo3} className="logo" alt="@Linkdin" /></a> <a href="https://www.instagram.com/aakash_kakarot_1204/" target="_blank" rel="noreferrer"><img src={logo4} className="logo" alt="@Instagram" /></a></Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; MYBOOK</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
