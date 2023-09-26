import { Container, Row, Col } from "react-bootstrap"
export const Nosotros = () => {
  return (
    <>
        <Container className="nosotros">
            <Row>
                <Col>
                    <h3>Nosotros</h3>
                    <hr className="divider" />
                    <p>
                    De Cero en Adelante, S.A. de C.V., marca comercial “Gluon Knowledge México”, somos una empresa mexicana de consultoría integral conformada por un equipo de trabajo con más de 20 años de experiencia en el Sector Público y Privado.

                    Estamos orientados a la modernización institucional con el fin de satisfacer y atender las necesidades de control y administración de los Entes Públicos y Privados, encaminándolos a obtener una mejor gestión de sus recursos, auditabilidad, trazabilidad, transparencia de todas sus operaciones, así como la rendición de cuentas y el cumplimiento de los objetivos para los que fueron creados.
                    </p>
                </Col>
            </Row>
        </Container>
    </>
  )
}
