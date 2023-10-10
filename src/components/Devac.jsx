import { Col, Container, Row } from "react-bootstrap"

export const Devac = () => {
  return (
    <section className="section-devac" id="devac">
        <Container>
            <Row>
                <Col>
                    <img className="devac-logo" src="/img/devacLogo.png" alt="devacLogo" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>
                        <span>Distribuimos</span> las mejores marcas de <span>sillas de evacuación</span> por escaleras en México y Latinoamérica
                    </h1>
                    <p>
                        Sabemos que en una <strong>situación de emergencia</strong> los dispositivos <strong>no pueden fallar</strong>, por eso distribuimos sólo las <strong>mejores marcas</strong>.
                    </p>
                    <br />
                    <p>
                        <ul>
                            <li>Fabricadas en el Reino Unido</li>
                            <li>Garantía limitada de por vida</li>
                            <li>Un modelo para cada necesidad</li>
                            <li>Satisfacción total de nuestros clientes</li>
                        </ul>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>
                        ¿<span>Cómo evacuamos</span> a una persona con discapacidad en una <span>situación de emergencia</span>?
                    </h1>
                    <p>
                        La silla de evacuación fue diseñada con un solo <strong>propósito</strong>, <strong><span>“ayudar a salvar las vidas de personas con problemas de movilidad en una situación de emergencia”</span></strong>.
                    </p>
                    <p>
                        Algunas de las <strong>ventajas</strong> de contar con este dispositivo de evacuación de emergencia son:
                    </p>
                    <br />
                    <p>
                        <ul>
                            <li>Pueden ser usadas por una sola persona</li>
                            <li>Una persona puede ayudar a otra hasta tres veces más pesada</li>
                            <li>No requiere fuerza, ni entrenamiento específico</li>
                        </ul>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="devac-img">
                    <img src="/img/chairs.png" alt="chairs" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}
