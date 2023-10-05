import { Col, Container, Row } from "react-bootstrap"

export const Informatica = () => {
  return (
    <section className="section-informatica" id="informatica">
        <Container>
            <Row>
                <Col lg={6}>
                    <img src="/img/informatica.jpg" alt="informatica" />
                </Col>
                <Col lg={6}>
                    <h2>Servicios Informáticos</h2>
                    <p>
                        Contamos con un amplio equipo de colaboradores enfocados en el desarrollo de Sistemas y Dispositivos electrónicos de automatización en funcion a las necesidades del Cliente.
                    </p>
                    <p>
                        Suministro e instalación de Equipo de Cómputo, Impresión y Redes.
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
                                Análisis
                            </p>
                            <p>
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="32" height="32" viewBox="0 0 24 24" strokeWidth="3" stroke="#5ca500" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </i>
                                Diseño
                            </p>
                            <p>
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="32" height="32" viewBox="0 0 24 24" strokeWidth="3" stroke="#5ca500" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </i>
                                Desarrollo
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
                                Implementación
                            </p>
                            <p>
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="32" height="32" viewBox="0 0 24 24" strokeWidth="3" stroke="#5ca500" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </i>
                                Capacitación
                            </p>
                            <p>
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="32" height="32" viewBox="0 0 24 24" strokeWidth="3" stroke="#5ca500" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                </i>
                                Reportes - Inteligencia de Negocio
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
