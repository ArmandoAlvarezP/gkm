import { Container, Row, Col } from "react-bootstrap"

export const Clientes = () => {
  return (
    <section className="clientes">
        <Container>
            <Row>
                <Col>
                    <h2>Nuestros Principales <strong>Clientes</strong>, <strong>Aliados Comerciales</strong> e <strong>Iniciativas</strong></h2>
                </Col>
            </Row>
            <Row>
                    <img src="/img/Alianzas-1.png" alt="Alianzas" />
            </Row>
        </Container>
    </section>
  )
}
