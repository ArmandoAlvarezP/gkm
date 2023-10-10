import { Col, Container, Row } from "react-bootstrap"
import { TarjetaSilla } from "./TarjetaSilla"

export const Devac = () => {
    const openVideo = (url) => {
        window.open(url);
    }
  return (
    <>
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
            
        <section className="section-devac-models">
            <Container>
                    <Row className="devac-modelos">
                    <Col>
                        <h2>Modelos</h2>
                        <hr />
                    </Col>
                </Row>
                <Row className="devac-modelos">
                    <Col lg={true}>
                        <img className="sillas-logos" src="/img/evac.png" alt="evac" />
                    </Col>
                    <Col lg={true}>
                        <img className="sillas-logos" src="/img/safety.png" alt="safety" />
                    </Col>
                </Row>
                <Row>
                    <Col lg={true}>
                        <TarjetaSilla 
                            model={<h3>Evac+Chair Power 800</h3>}
                            img={<img src="/img/evac800.png" onClick={() => openVideo('https://www.youtube.com/watch?v=iSsQ_ylt1wg')}/>}
                            capacidad={"180 kg"}
                            descenso={"Sí"}
                            ascenso={"Sí"}
                            motorizada={"Sí"}
                            peso={"33 kg"}
                            alto={"116 cm"}
                            ancho={"57 cm"}
                            profundidad={"33 cm"}
                            garantia={"Limitada por 2 años"}
                            demo
                            >
                            <p>
                                <strong>Impulsada por baterías para ascender y descender escaleras</strong>
                            </p>
                        </TarjetaSilla>
                    </Col>
                    <Col lg={true}>
                    <TarjetaSilla 
                            model={<h3>Safety Chair EV-9000 (Próximamente)</h3>}
                            img={<img src="/img/safety9000.png" />}
                            capacidad={"227 kg"}
                            descenso={"Sí"}
                            ascenso={"Sí"}
                            motorizada={"Sí"}
                            peso={"33 kg"}
                            alto={"116 cm"}
                            ancho={"57 cm"}
                            profundidad={"32 cm"}
                            garantia={"Limitada de por vida"}
                            >
                        </TarjetaSilla>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col lg={true}>
                        <TarjetaSilla 
                            model={<h3>Evac+Chair 600H</h3>}
                            img={<img src="/img/evac600.png" onClick={() => openVideo('https://www.youtube.com/watch?v=gTuR42iOOmA')}/>}
                            capacidad={"180 kg"}
                            descenso={"Sí"}
                            ascenso={"Sí"}
                            motorizada={"No"}
                            peso={"10.9 kg"}
                            alto={"119.4 cm"}
                            ancho={"58.4 cm"}
                            profundidad={"30.5 cm"}
                            garantia={"Limitada de por vida"}
                            demo
                            >
                            <p>Incorpora <strong>dos asas</strong> que <strong>permiten la evacuación hacia arriba.</strong></p>
                        </TarjetaSilla>
                    </Col>
                    <Col lg={true}>
                    <TarjetaSilla 
                            model={<h3>Safety Chair EV-7000</h3>}
                            img={<img src="/img/safety7000.png" onClick={() => openVideo('https://www.youtube.com/watch?v=1iDkGUsfkbw')}/>}
                            capacidad={"250 kg"}
                            descenso={"Sí"}
                            ascenso={"Sí"}
                            motorizada={"No"}
                            peso={"14 kg"}
                            alto={"124 cm"}
                            ancho={"57 cm"}
                            profundidad={"26.5 cm"}
                            garantia={"Limitada de por vida"}
                            demo
                            >
                        </TarjetaSilla>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col lg={true}>
                        <TarjetaSilla 
                            model={<h3>Evac+Chair 500H</h3>}
                            img={<img src="/img/evac500.png" onClick={() => openVideo('https://www.youtube.com/watch?v=gTuR42iOOmA')}/>}
                            capacidad={"226.8 kg"}
                            descenso={"Sí"}
                            ascenso={"No"}
                            motorizada={"No"}
                            peso={"8.62 kg"}
                            alto={"114.3 cm"}
                            ancho={"50.8 cm"}
                            profundidad={"22.8 cm"}
                            garantia={"Limitada de por vida"}
                            demo
                            >
                        </TarjetaSilla>
                    </Col>
                    <Col lg={true}>
                    <TarjetaSilla 
                            model={<h3>Safety Chair EV-4000</h3>}
                            img={<img src="/img/safety4000.png"  onClick={() => openVideo('https://www.youtube.com/watch?v=5SFOmLMaaQs')}/>}
                            capacidad={"200 kg"}
                            descenso={"Sí"}
                            ascenso={"No"}
                            motorizada={"No"}
                            peso={"14.3 kg"}
                            alto={"124 cm"}
                            ancho={"50.8 cm"}
                            profundidad={"26 cm"}
                            garantia={"Limitada de por vida"}
                            demo
                            >
                        </TarjetaSilla>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col lg={true}>
                        <TarjetaSilla 
                            model={<h3>Evac+Chair 300H MK4</h3>}
                            img={<img src="/img/evac500.png" onClick={() => openVideo('https://www.youtube.com/watch?v=gNnhMX14FFI')}/>}
                            capacidad={"180 kg"}
                            descenso={"Sí"}
                            ascenso={"No"}
                            motorizada={"No"}
                            peso={"8.62 kg"}
                            alto={"104.2 cm"}
                            ancho={"50.8 cm"}
                            profundidad={"20.3 cm"}
                            garantia={"Limitada de por vida"}
                            demo
                            >
                        </TarjetaSilla>
                    </Col>
                    <Col lg={true}>
                    </Col>
                </Row>
                <hr />
                <Row className="mt-5">
                    <Col lg={true} className="sillas-details">
                        <h2>Todas nuestras sillas cuentan con:</h2>
                        <br />
                        <p>
                            <ul>
                                <li>Soporte para montaje en pared</li>
                                <li>Funda de vinil contra polvo</li>
                                <li>Señalización de ubicación</li>
                                <li>Guía de uso y vídeos instructivos</li>
                            </ul>
                        </p>
                    </Col>
                    <Col lg={true}>
                        <img src="/img/safetyDemo.png" alt="demo" className="devac-demo"/>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}
