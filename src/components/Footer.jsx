import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <section className='footer'>
        <Container>
            <Row>
                <Col lg={6}>
                    <img src="/img/gkm-footer-logo.png" alt="" />
                </Col>
                <Col lg={3}>
                    <Row>
                        <h6>Contacto</h6>
                    </Row>
                    <Row className='footer-element'>
                        <Col>
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                </svg>
                            </i>
                        </Col>
                        <Col>
                            <p>(55) 9303 0398</p>
                        </Col>
                    </Row>
                    <Row className='footer-element'>
                        <Col>
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                <path d="M3 7l9 6l9 -6" />
                                </svg>
                            </i>
                        </Col>
                        <Col>
                            <p>ventas@gkm.mx; contacto@gkm.mx</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>    
  )
}
