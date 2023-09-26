import { Row, Col, Container } from 'react-bootstrap';
export const MisionVision = () => {
  return (
    <section className='mision_vision'>
        <Container fluid>
            <Row>
                <Col className='mision' lg={6} md={12}>
                    Misión
                </Col>
                <Col className='vision' lg={6} md={12}>
                    Visión
                </Col>
            </Row>
        </Container>
    </section>
  )
}
