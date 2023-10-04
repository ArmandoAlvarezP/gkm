import { Col, Container, Row } from "react-bootstrap"
import { Roller } from "./Roller"
import { GRPAccordion } from "./GRPAccordion"

export const GRP = () => {
  return (
    <section className="section-grp" id="grp">
        <Container>
            <Row>
                <Col>
                    <h6>GRP - GESTIONNET</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Sistema Integral de Administración y Finanzas Gubernamentales</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Roller words={["GestionNet"]} styles={ "roller" }/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <GRPAccordion />
                </Col>
            </Row>
        </Container>
    </section>
  )
}
