import { Col, Row } from "react-bootstrap"

export const Divider = () => {
  return (
    <>
        <Row className="mt-5">
            <Col style={{"background": "#004C19B3", "height": "0.7vh"}}>
            </Col>
            <Col style={{"background": "#008215B3", "height": "0.7vh"}}>
            </Col>
            <Col style={{"background": "#12B700B3", "height": "0.7vh"}}>
            </Col>
        </Row>
    </>
  )
}
