import { Row, Col, Container } from 'react-bootstrap';
export const MisionVision = () => {
  return (
    <section className='mision_vision'>
        <Container fluid>
            <Row>
                <Col className='mision' lg={6} md={12}>
                    <h3 className='mision-title' >Misión</h3>
                    <p>
                        Generar Líderes que desarrollen talento, formulen e implementen Servicios y Soluciones Integrales de calidad a través de experiencia, innovación, creatividad y reingeniería, para contribuir al logro de los Objetivos de nuestros Clientes de forma sustentable y con responsabilidad social.
                    </p>
                </Col>
                <Col className='vision' lg={6} md={12}>
                    <h3 className='vision-title'>Visión</h3>
                    <p>
                        Ser una Empresa referente a nivel Internacional que desarrolla talento; servicios y soluciones integrales de calidad, sustentables y de responsabilidad social. Generadora de empleo en cuatro pilares: crecimiento profesional, cultural, económico y calidad de vida.
                    </p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
