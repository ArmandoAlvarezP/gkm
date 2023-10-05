import { Container, Row, Col, Carousel } from "react-bootstrap"
export const Valores = () => {
  return (
    <section className="valores">
        <Container>
            <Row>
                <Col>
                    <h2>Valores <strong>GKM</strong></h2>
                </Col>
            </Row>
            <Row className="valores_carousel">
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <img src="/img/Innovacion.png" alt="" className="valores_img"/>
                        <img src="/img/Creatividad.png" alt="" className="valores_img"/>
                        <img src="/img/Compromiso.png" alt="" className="valores_img"/>
                        <img src="/img/Empatia.png" alt="" className="valores_img"/>
                        <img src="/img/Pasion.png" alt="" className="valores_img"/>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img src="/img/Honestidad.png" alt="" className="valores_img"/>
                        <img src="/img/Liderazgo.png" alt="" className="valores_img"/>
                        <img src="/img/Responsabilidad-Social.png" alt="" className="valores_img"/>
                        <img src="/img/Trabajo-del-dia.png" alt="" className="valores_img"/>
                        <img src="/img/Adaptacion-al-Cambio.png" alt="" className="valores_img"/>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    </section>
  )
}
