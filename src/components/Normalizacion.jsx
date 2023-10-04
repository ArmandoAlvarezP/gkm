import { Carousel, Col, Container, Row } from "react-bootstrap"
import { Roller } from "./Roller"

export const Normalizacion = () => {
  return (
    <section id="normalizacion" className="section-normalizacion">
        <Container fluid>
            <Row>
                <Col>
                    <p><Roller words={["Normalización"]} styles={"roller"} /> de información</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item interval={30000}>
                            <Row className="normalizacion-item">
                                <Col lg={6}>
                                    <p>
                                        Levantamiento de Inventario de Almacenes, generación de Catálogo de Artículos a detalle con evidencia fotográfica por tipo de bien y firma de los responsables por bodega.
                                    </p>
                                    <p>
                                        Levantamientos realizados al día de hoy de diversos proyectos:
                                    </p>
                                </Col>
                                <Col lg={6}>
                                    <video src="/video/almacen-video.mp4" autoPlay={true} muted={true} loop={true}></video>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item interval={30000}>
                            <Row className="normalizacion-item-2">
                                <Col lg={6}>
                                    <video src="/video/almacen-video.mp4" autoPlay={true} muted={true} loop={true}></video>
                                </Col>
                                <Col lg={6}>
                                    <p>
                                        Levantamiento y/o actualización del Padrón Inventarial (Activo Fijo), que consiste en la verificación de la existencia física de los bienes, actualización del estado actual, elaboración y colocación de etiquetas de identificación (Código de Barras, QR o RFID) y recolección de la firma del resguardo del usuario.
                                    </p>
                                    <p>
                                        Levantamientos realizados al día de hoy de diversos proyectos:
                                    </p>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
