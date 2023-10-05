import { Col, Container, Row } from "react-bootstrap"

export const Cursos = () => {
  return (
    <section className="section-cursos" id="cursos">
        <Container>
            <Row>
                <Col lg={6}>
                    <img src="/img/cursos.png" alt="cursos" />
                </Col>
                <Col lg={6}>
                    <h2>Cursos</h2>
                    <p>
                        Diseño, aplicación y evaluación de cursos en función a las necesidades de nuestros Clientes de forma presencial, en línea y a través de plataformas que colaboran con la ubicación y el tiempo de los participantes.
                    </p>
                    <Row>
                        <Col md={6}>
                            <p>
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="32" height="32" viewBox="0 0 24 24" strokeWidth="3" stroke="#5ca500" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </i>
                                Habilidades blandas y desarrollo personal
                            </p>
                            <p>
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="32" height="32" viewBox="0 0 24 24" strokeWidth="3" stroke="#5ca500" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </i>
                                Desarrollo de competencias laborales
                            </p>
                        </Col>
                        <Col lg={6}>
                            <p>
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="32" height="32" viewBox="0 0 24 24" strokeWidth="3" stroke="#5ca500" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </i>
                                Administrativos
                            </p>
                            <p>
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="32" height="32" viewBox="0 0 24 24" strokeWidth="3" stroke="#5ca500" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </i>
                                Habilidades tecnológicas
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
