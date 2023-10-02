import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"

export const MenuServicios = () => {

    const [section, setSection] = useState('');
    const nav = useNavigate();

    const toSection = (section) => {
        setSection(section);
        nav(`/servicios/#${section}`);
    }

  return (
    <section className="menu-servicios">
        <Container fluid>
            <Row>
                <Col>
                    <h2>Nuestros <strong>Servicios</strong></h2>
                </Col>
            </Row>
            <Row id="accordion" className="accordion">
                <Col className="service-description grp" lg={true} onClick={() => toSection('grp')}>
                    <Row className="mt-3">
                        <Col className="text-center">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-antenna-bars-5" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M6 18l0 -3" />
                                <path d="M10 18l0 -6" />
                                <path d="M14 18l0 -9" />
                                <path d="M18 18l0 -12" />
                                </svg>
                            </i>
                        </Col>
                    </Row>
                    <h6>Sistema Integral Gestionet-GRP</h6>
                    <Row className="mt-5 mb-5">
                        <Col className="text-center">
                            <p>
                                Sistema Integral Mexicano con más de 20 años de experiencia que cumple puntualmente con la Ley General de Contabilidad Gubernamental (LGCG) y la normatividad emitida por el Consejo Nacional de Armonización Contable (CONAC).
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col className="service-description normalizacion" lg={true} onClick={() => toSection('normalizacion')}>
                    <Row className="mt-3">
                        <Col className="text-center">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-qrcode" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                <path d="M7 17l0 .01" />
                                <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                <path d="M7 7l0 .01" />
                                <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                                <path d="M17 7l0 .01" />
                                <path d="M14 14l3 0" />
                                <path d="M20 14l0 .01" />
                                <path d="M14 14l0 3" />
                                <path d="M14 20l3 0" />
                                <path d="M17 17l3 0" />
                                <path d="M20 17l0 3" />
                                </svg>
                            </i>
                        </Col>
                    </Row>
                    <h6>Normalización de Información</h6>
                    <Row className="mt-5 mb-5">
                        <Col className="text-center">
                            <p>
                                Análisis de información, definición de catálogos y estructura, homologación, levantamiento y/o reconstrucción y ajustes.
                            </p>
                            <p>
                                Levantamiento y/o actualización de registros del Padrón Inventarial (Activo Fijo), Levantamiento de Inventario de Almacenes, entre otros servicios.
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col className="service-description informatica" lg={true} onClick={() => toSection('informatica')}>
                    <Row className="mt-3">
                        <Col className="text-center">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-devices-2" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 15h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h6" />
                                <path d="M13 4m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
                                <path d="M7 19l3 0" />
                                <path d="M17 8l0 .01" />
                                <path d="M17 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                <path d="M9 15l0 4" />
                                </svg>
                            </i>
                        </Col>
                    </Row>
                    <h6>Servicios Informáticos</h6>
                    <Row className="mt-5 mb-5">
                        <Col className="text-center">
                            <p>
                                Análisis, diseño, desarrollo, implementación y capacitación de proyectos Administrativos
                            </p>
                            <p>
                                Suministro e instalación de Equipo de Cómputo, Impresión y Redes.
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col className="service-description comercializadora" lg={true} onClick={() => toSection('comercializadora')}>
                    <Row className="mt-3">
                        <Col className="text-center">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-dollar" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                                <path d="M12 3v3m0 12v3" />
                                </svg>
                            </i>
                        </Col>
                    </Row>
                    <h6>Comercializadora</h6>
                    <Row className="mt-5 mb-5">
                        <Col className="text-center">
                            <p>
                                Suministro de equipos de computo, licenciamiento de software de uso común, consumibles para equipos de impresión y multifuncionales, Material Medico y Hospitalario, Artículos para Sanitización, Papelería, Artículos de Oficina, Artículos de Limpieza, Herramientas, Pintura, Señalización, Artículos Publicitarios, entre otros.
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col className="service-description cursos" lg={true} onClick={() => toSection('cursos')}>
                    <Row className="mt-3">
                        <Col className="text-center">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bulb" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                                <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
                                <path d="M9.7 17l4.6 0" />
                                </svg>
                            </i>
                        </Col>
                    </Row>
                    <h6>Cursos</h6>
                    <Row className="mt-5 mb-5">
                        <Col className="text-center">
                            <p>
                                Diseño, aplicación y evaluación de cursos en función a las necesidades de nuestros Clientes de forma presencial, en línea y a través de plataformas que colaboran con la ubicación y el tiempo de los participantes.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
