import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"

export const MenuEducacion = () => {
  
    // eslint-disable-next-line no-unused-vars
    const [section, setSection] = useState('');

    const toSection = (section) => {
        setSection(section);
        window.location.href=`#${section}`
    }

  return (
    <section className="menu-educacion">
        <Container fluid>
            <Row>
                <Col>
                    <h2>Educación</h2>
                </Col>
            </Row>
            <Row id="accordion" className="accordion">
                <Col className="service-description educacion" lg={true} onClick={() => toSection('capacitacion')}>
                    <Row className="mt-3">
                        <Col className="text-center">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book-2" width="68" height="68" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
                                <path d="M19 16h-12a2 2 0 0 0 -2 2" />
                                <path d="M9 8h6" />
                                </svg>
                            </i>
                        </Col>
                    </Row>
                    <h6>Capacitación y Educación</h6>
                </Col>
                <Col className="service-description prepa" lg={true} onClick={() => toSection('prepa')}>
                    <Row className="mt-3">
                        <Col className="text-center">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-school" width="68" height="68" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                                <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                                </svg>
                            </i>
                        </Col>
                    </Row>
                    <h6>¡Termina tu prepa en 4 meses!</h6>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
