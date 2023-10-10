import { Col, Container, Row } from "react-bootstrap"

export const Mastografias = () => {
  return (
    <section className="section-mastografias" id="mastografias">
        <Container>
            <Row>
                <Col>
                    <h1>Mastografía por Electroimpedancia Multifrecuencia (MEM)</h1>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        <strong>Estudio</strong> de las <strong>Glándulas Mamarias</strong> que se realiza mediante el <strong>método de Electroimpedancia por Multifrecuencia</strong>, el cual consiste en enviar <strong>frecuencias eléctricas a través de la mama</strong>, gracias a la <strong>capacidad</strong> que tienen los <strong>tejidos biológicos</strong> de <strong>conducir electricidad</strong>, estas <strong>lecturas</strong> se <strong>envían</strong> al <strong>Sistema</strong> denominado <strong>«Sistema de Mastografia Multifrecuencia de Impedancia eléctrica versión 6.1» (Sistema <span>MEM</span>) en español</strong>, el cual <strong>genera</strong> una <strong>imagen</strong> de <strong>siete cortes tomográficos</strong>, la cual permite realizar una <strong>evaluación visual</strong> y <strong>cuantitativa</strong> del tejido, permitiendo corroborar si la <strong>mama se encuentra sana</strong> o existe alguna <strong>patología mamaria benigna o maligna</strong> incluyendo el <strong>Cáncer de Mama.</strong>
                    </p>
                    <p>
                        <strong><span>La Mastografía MEM</span> es un estudio:</strong>
                    </p>
                    <br />
                    <strong>
                    <p>Sin <span>Dolor</span></p>
                    <p>No <span>Invasivo</span></p>
                    <p>Sin <span>Radiación</span></p>
                    <p>Estudio <span>Simple</span></p>
                    <p>Cualquier <span>Edad</span></p>
                    <p>Estudio en <span>15 Minutos</span></p>
                    </strong>
                    <br />
                    <p>
                        <strong>Amigable con <span>Mujeres</span> embarazadas, lactando,</strong> con <strong>implantes,prótesis</strong> o <strong>modelantes.</strong>
                    </p>
                    <p>
                        La <strong>Electroimpedancia Multifrecuencia</strong> solo requiere unas gotas de agua.
                    </p>
                    <p>
                        Puede utilizarse con la <strong>frecuencia requerida</strong>, colaborando para el <strong>seguimiento</strong> del tratamiento en <strong>mujeres</strong> con <strong>patologías mamarias.</strong>
                    </p>
                    <p>
                        Alta <strong>sensibilidad</strong> del <strong>96%</strong> y una <strong>especificidad</strong> del <strong>98%.</strong>
                    </p>
                    <p>
                        Para más <strong>información</strong> sobre el <strong>estudio <span>Mastografía por Electroimpedancia Multifrecuencia (MEM)</span></strong> puedes contactarnos en nuestro <strong>Centro de Salud y Belleza Integral para la <span>Mujer</span>.</strong> 
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>Estudio rápido y eficaz</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src="/img/mem.png" alt="mem" />
                </Col>
            </Row>
            <Row>
                <Col className="mem-video">
                    <iframe src="https://www.youtube.com/embed/-wOZjMFk89A?si=9w6YUNHnMrdd5jC6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
