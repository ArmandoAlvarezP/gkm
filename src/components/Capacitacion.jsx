import { Col, Container, Row } from "react-bootstrap"
import { TarjetaCapacitacionR } from "./TarjetaCapacitacionR"
import { TarjetaCapacitacionL } from "./TarjetaCapacitacionL"

export const Capacitacion = () => {
   
  return (
    <section className="section-capacitacion" id="capacitacion">
        <Container>
            <Row>
                <Col>
                    <h1>Capacitacion y Educación</h1>
                    <hr />
                </Col>
            </Row>  
            <Row>
                <TarjetaCapacitacionR 
                    imgNumber={<img src="/img/1-flag.png" />} 
                    img={<img src="/img/Cursos-Web-fotos.png" />} 
                >
                    <h5>Gluon Knowledge México</h5>
                    <h5>Sector de Capacitación y Educación</h5>
                    <p>
                        En Gluon Knowledge estamos convencidos que el conocimiento nos ayuda a comprender e interpretar mejor nuestro entorno. La forma en la que interactuamos con los demás, así como la forma en la que influimos en todo lo que nos rodea a lo largo de nuestras vidas.
                    </p>
                    <p>
                        De igual forma creemos que el conocimiento nos permite:
                    </p>
                    <p>
                        <ul>
                            <li>Comunicarnos de una manera más efectiva a través de los idiomas.</li>
                            <li>Comprender mejor la forma de pensar de otras culturas, sociedades y religiones.</li>
                            <li>Conocer nuevos lugares, especies, climas y formas de vivir.</li>
                            <li>Aportar valor a nuestra sociedad a través de la innovación, experiencia y creatividad.</li>
                            <li>Generar consciencia social en las organizaciones donde impartamos capacitación.</li>
                            <li>Replicar los conocimientos y la experiencia adquirida con nuestros colaboradores, familia y sociedad, para inspirar a nuevas generaciones para ser agentes de cambio.</li>
                        </ul>
                    </p>
                </TarjetaCapacitacionR>
                <TarjetaCapacitacionL 
                    imgNumber={<img src="/img/2-flag.png" />}
                    img={<img src="/img/Cursos-Web-fotos2.png" />}
                >
                    <h5>Enfoque Social</h5>
                    <p>
                        Somos una organización encargada de proporcionar soluciones de capacitación y educación con el compromiso de contribuir al desarrollo económico sostenible por medio de la colaboración con sus empleados, sus familias, la comunidad local y la inclusión laboral de personas con discapacidad, participando en proyectos de responsabilidad social en alianza con organizaciones civiles, impulsando un programa de becas para personas de escasos recursos.
                    </p>
                    <h5>Enfoque Internacional</h5>
                    <p>
                        Contamos con alianzas internacionales que nos permite integrar un equipo consolidado de consultores, expositores, y maestros con amplia experiencia, con la finalidad de brindar a nuestros clientes, soluciones a sus necesidades de capacitación.
                    </p>
                    <p>
                        Argentina, Colombia, Chile, República Dominicana, Guatemala, Costa Rica, Panamá, España, Perú, Ecuador, Venezuela.
                    </p>
                    <img src="/img/flags.png" alt="flags" style={{ "maxWidth": "100%"}} className="mt-5"/>
                </TarjetaCapacitacionL>
            </Row>
        </Container>
    </section>
  )
}
