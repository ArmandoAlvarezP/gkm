import { Col, Container, Row } from "react-bootstrap"
import { TarjetaPrepa } from "./TarjetaPrepa"

export const Prepa = () => {
  return (
    <section className="section-prepa" id="prepa">
        <Container>
            <Row className="portada-prepa">
                <Col>
                    <img src="/img/portadaPrepa.png" alt="portada" />
                    <h1>¡Termina tu prepa en 4 meses!</h1>
                    <h2>Validez Oficial ante la SEP</h2>
                </Col>
            </Row>
            <Row className="portada-prepa-p">
                <h1>¡Inclusión y educación para todos!</h1>
                <h1>Solicita tu beca</h1>
            </Row>
            <Row>
                <TarjetaPrepa 
                    imgNumber={<img src="/img/1.png"/>}
                    img={<img src="/img/1-CONAIP.png"/>}
                >
                    <h5>ACUERDO 286 SEP-FEDERAL</h5>
                    <br />
                    <p>
                        Con la celebración del Acuerdo 286-SEP Federal usted está al centro del modelo educativo, lo que significa que siempre contará con facilitadores y tutores, que te acompañarán para que curses esta atractiva opción de bachillerato y alcances los aprendizajes esperados en cada módulo, según el plan de estudios y el mapa curricular Esas y otras figuras de la comunidad educativa serán tu apoyo para que, con constancia y disciplina, demuestres que poseen las competencias que se esperan al término de tus estudios y te certifiques.
                    </p>
                    <p>
                        El Programa Preparatoria En Línea tiene como objetivo desarrollar en el alumno los conocimientos teóricos y las habilidades técnicas para conseguir una acreditación y certificación correspondiente al nivel bachillerato por medio de evaluaciones escritas que toman en cuenta su experiencia laboral (Acuerdo 286-y 02/04/2017 de la SEP).
                    </p>
                </TarjetaPrepa>
            </Row>
        </Container>
    </section>
  )
}
