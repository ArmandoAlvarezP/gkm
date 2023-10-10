import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export const MenuSalud = () => {

    // eslint-disable-next-line no-unused-vars
    const [section, setSection] = useState('');

    const toSection = (section) => {
        setSection(section);
        window.location.href=`#${section}`
    }

  return (
    <section className="menu-salud">
        <Container fluid>
            <Row>
                <Col>
                    <h2>Nuestros Servicios en Salud</h2>
                </Col>
            </Row>
            <Row id="accordion" className="accordion">
                <Col className="service-description mastografias" lg={true} onClick={() => toSection('mastografias')}>
                    <Row className="mt-3">
                        <Col className="text-center">
                            <i>
                                <img src="/img/mamografia.png" alt="mamografia" />
                            </i>
                        </Col>
                    </Row>
                    <h6>Mastografías</h6>
                    <Row className="mt-5 mb-5">
                        <Col className="text-center">
                            <p>
                                Mastografía por Electroimpedancia Multifrecuencia (MEM)
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col className="service-description devac" lg={true} onClick={() => toSection('devac')}>
                    <Row className="mt-3">
                        <Col className="text-center">
                            <i>
                                <img src="/img/silla.png" alt="devac" />
                            </i>
                        </Col>
                    </Row>
                    <h6>Sillas de Evacuación</h6>
                    <Row className="mt-5 mb-5">
                        <Col className="text-center">
                            <p>
                                Las mejores sillas de evacuación por escaleras en México y Latinoamérica.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
