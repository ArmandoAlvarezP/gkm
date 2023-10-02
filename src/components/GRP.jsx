import { Col, Container, Row } from "react-bootstrap"
import { Roller } from "./Roller"

export const GRP = () => {
  return (
    <section className="section-grp">
        <Container>
            <Row>
                <Col>
                    <h6>GRP - GESTIONNET</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    Sistema Integral de Administración y Finanzas Gubernamentales
                </Col>
            </Row>
            <Row>
                <Col>
                    <Roller words={["GestionNet"]} styles={ "roller" }/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
