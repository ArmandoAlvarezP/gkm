import { Col, Row } from "react-bootstrap";
import { Roller } from "./Roller";

export const Banner = () => {

return (
    <section className="banner" id="home">
            <video src="./video/Video-480.mov" loop={true} autoPlay={true} muted={true}></video>
            <Row className="align-items-center">
                <Col>
                    <h1>Creamos <Roller words={["Soluciones", "Ideas"]} styles={"wrap"} /></h1>
                </Col>
            </Row>
    </section>
)

}