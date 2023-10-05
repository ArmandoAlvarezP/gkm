import { Col, Container, Row } from "react-bootstrap"

// eslint-disable-next-line react/prop-types
export const TarjetaCapacitacionL = ({imgNumber, img, children}) => {
  return (
    <Container className="tarjeta-capacitacion">
        <Row>
            <Col className="imgL">
                {img}
            </Col>
            <Col>
                <Row className="imgNumberR">
                    {imgNumber}
                </Row>
                {children}
            </Col>
        </Row>
    </Container>
  )
}
