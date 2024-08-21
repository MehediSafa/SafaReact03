import React from 'react'
import  './footer.css'
import { Col, Container, Row } from 'react-bootstrap'

import FooterReusable from '../reusable/FooterReusable'

const Footers = () => {
  return (
    <section className='footer_main'>
        <div className="footer_body">

        <Container>
            <Row>
                <Col lg={4}>
                <FooterReusable/>
                </Col>
                <Col lg={4}>
                <FooterReusable/>
                </Col>
                <Col lg={4}>
                <FooterReusable/>
                </Col>
            </Row>
        </Container>
        </div>
    </section>
  )
}

export default Footers