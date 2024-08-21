import React from 'react'
import './banner.css'
import { Container, Col, Row, Card } from 'react-bootstrap'
import banner_img from '../../assets/banner_img.png'
import bell from '../../assets/bell.png'

const Banner = () => {
    return (
        <section className='banner_main'>

            <Container>
                <div className="banner_body">
                    {/* row starts */}
                    <Row>
                        {/* col starts */}
                        <Col lg={5}>
                        {/* startup starts */}
                            <div className="startup">
                                <span>Startup Business</span>
                                <div className="startup_img">
                                    <img src={bell} alt="" />
                                </div>
                        {/* startup ends */}
                        <div className="banner_body_text">
                            <h2>Empowering startups to fuel
                            their business growth</h2>
                            <p>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,
                            velit
                            nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
                            <a href="">Get started now </a>
                        </div>

                            </div>
                        </Col>
                        {/* col ends */}
                        {/* col starts */}
                        <Col lg={{span:6,offset:1}}>
                            <div className="banner_img">
                                <img src={banner_img} alt="" />
                            </div>
                        </Col>
                        {/* col ends */}
                    </Row>
                    {/* row ends */}
                </div>
            </Container>
        </section>
    )
}

export default Banner