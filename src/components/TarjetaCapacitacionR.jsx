import { Col, Container, Row } from "react-bootstrap"

// eslint-disable-next-line react/prop-types
export const TarjetaCapacitacionR = ({imgNumber, img, children}) => {
  return (
    <Container className="tarjeta-capacitacion">
        <Row>
            <Col>
                <Row className="imgNumberL">
                    {imgNumber}
                </Row>
                {children}
            </Col>
            <Col className="imgR" >
                {img}
            </Col>
        </Row>
    </Container>
  )
}
