import { Col, Container, Row } from "react-bootstrap"

// eslint-disable-next-line react/prop-types
export const TarjetaPrepa = ({imgNumber, img, children}) => {
  return (
    <Container className="tarjeta-prepa">
        <Row>
            <Col>
                <Row className="imgNumberPrepa">
                    {imgNumber}
                </Row>
                <Row>
                    {children}
                </Row>
                <Row>
                    {img}
                </Row>
            </Col>
        </Row>
    </Container>
  )
}
