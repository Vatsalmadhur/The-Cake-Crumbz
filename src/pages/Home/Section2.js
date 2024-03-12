import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import {Link} from "react-router-dom"
function Section2() {
  return (
    <section className="about_section">
     <Container>
        <Row>
            <Col lg={{span:8,offset:2}} className="text-center">
                <h2>The cake tastes better when you eat it with your family</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                     nisi ut aliquip </p>
                <Link to="/" className="btn order_now btn_red">
                    Explore Full Menu
                </Link>
            </Col>
        </Row>
     </Container>
    </section>
  )
}
export default Section2