/* eslint-disable react/prop-types */
import { Col, Container, Row } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
export const TarjetaSilla = (
    {
        model, 
        img, 
        capacidad, 
        descenso, 
        ascenso, 
        motorizada, 
        peso, 
        alto, 
        ancho, 
        profundidad, 
        garantia,
        demo, 
        children 
    }
    ) => {
  return (
    <Container className="tarjeta-silla">
        <Row>
            <Col className="silla-model">
                {model}
            </Col>
        </Row>
        <Row>
            <Col className="silla-img">
                {img}
            </Col>
        </Row>
        <Row>
            <Col className="silla-content">
                { 
                    demo ?
                    <p className="silla-demo">
                        <span>Da click a la imagen para ver un video demostrativo</span>
                    </p>  
                    :
                    ""
                }
                {children}
                <p>
                    <strong>Capacidad del pasajero:</strong> {capacidad}
                </p>
                <p>
                    <strong>Descenso:</strong> {descenso}
                </p>
                <p>
                    <strong>Ascenso:</strong> {ascenso}
                </p>
                <p>
                    <strong>Motorizada:</strong> {motorizada}
                </p>
                <p>
                    <strong>Peso:</strong> {peso}
                </p>
                <p>
                    <strong>Alto:</strong> {alto}
                </p>
                <p>
                    <strong>Ancho:</strong> {ancho}
                </p>
                <p>
                    <strong>Profundidad:</strong> {profundidad}
                </p>
                <p>
                    <strong>Garantía:</strong> {garantia}
                </p>
            </Col>
        </Row>
    </Container>
  )
}
