import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import Cake from "../../assets/hero/hero1.png"
import {Link} from "react-router-dom"
function Section1() {
  return (
    <section className="hero_section">
     <Container>
        <Row>
            <Col lg={7} className="mb-5 mb-lg-0">
                <div className="position-relative">
                 <img src={Cake} className="img-fluid" alt="hero"/>
                 <div className="price_badge">
                    <div className="badge-text"> 
                         <h4 className="h4_xs">Only</h4>
                         <h4 className="h3_lg">$6.99</h4>
                    </div>
                </div>
                </div>
            </Col>
            <Col lg={5}>
                <div className="hero_text text-center">
                    <h1 className="text-white">Do You Know?</h1>
                    <h2 className="text-white pt-2 pb-4">CAKE CAN ACTUALLY REDUCE YOUR STRESS LEVELS</h2>
                    <Link to="/" className="btn order_now">Order Now</Link>
                </div>
            </Col>
        </Row>
     </Container>
    </section>
  )
}

export default Section1