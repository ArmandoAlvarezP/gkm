import { Col, Container, Row } from "react-bootstrap"
import { TarjetaPrepa } from "./TarjetaPrepa"
import { TarjetaCapacitacionR } from "./TarjetaCapacitacionR"

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
                    <h5 style={{"color": "#59B460"}}>ACUERDO 286 SEP-FEDERAL</h5>
                    <br />
                    <p>
                        Con la celebración del Acuerdo 286-SEP Federal usted está al centro del modelo educativo, lo que significa que siempre contará con facilitadores y tutores, que te acompañarán para que curses esta atractiva opción de bachillerato y alcances los aprendizajes esperados en cada módulo, según el plan de estudios y el mapa curricular Esas y otras figuras de la comunidad educativa serán tu apoyo para que, con constancia y disciplina, demuestres que poseen las competencias que se esperan al término de tus estudios y te certifiques.
                    </p>
                    <p>
                        El Programa Preparatoria En Línea tiene como objetivo desarrollar en el alumno los conocimientos teóricos y las habilidades técnicas para conseguir una acreditación y certificación correspondiente al nivel bachillerato por medio de evaluaciones escritas que toman en cuenta su experiencia laboral (Acuerdo 286-y 02/04/2017 de la SEP).
                    </p>
                </TarjetaPrepa>
                <TarjetaPrepa 
                    imgNumber={<img src="/img/2.png"/>}
                    img={<img src="/img/2-vectores.png"/>}
                >
                    <h5 style={{"color": "#19B6BE"}}>Perfil de Egreso</h5>
                    <br />
                    <p>
                        Al finalizar sus estudios educativos a nivel bachillerato, el alumno deberá contar con las competencias necesarias para el desenvolvimiento personal, profesional y social.
                    </p>
                    <h5 style={{"color": "#19B6BE"}}>El alumno deberá de desempeñar las siguientes habilidades:</h5>
                    <br />
                    <p>
                       <ul>
                            <li>Comunicación: El alumno será capaz de comunicarse de manera afectiva y asertivamente.</li>
                            <li>Organiza y jerarquiza la información: Será capaz de buscar información necesaria para cada una de las asignaturas, así como de organizarla y jerarquizarla, para un mejor manejo de la misma.</li>
                            <li>Hábitos de estudio y de lectura: Generará nuevos hábitos de estudio y de lectura, que le permitirán una mejor comprensión y organización.</li>
                            <li>Piensa critica y reflexivamente: Sustenta una postura personal sobre temas de interés y relevancia general considerando otros puntos de vista de manera critica y reflexiva.</li>
                            <li>Tomas de decisiones: Desarrolla innovaciones y propone solución de problemas a partir de métodos establecidos.</li>
                            <li>Dominio ortográfico: Maneja buena redacción ortográfica, lo que permite una buena comunicación escrita.</li>
                       </ul>
                    </p>
                    <h5 style={{"color": "#19B6BE"}}>El alumno deberá de desempeñar las siguientes actitudes:</h5>
                    <p>
                        <ul>
                            <li>Iniciativa: Será capaz de proponer o desarrollar, nuevas ideas o proyectos.</li>
                            <li>Gestión del tiempo: Sera capaz de manejar las diversas tareas, a trabajar bajo presión y manejar los tiempos.</li>
                        </ul>
                    </p>
                    <p>Además de las habilidades y aptitudes que el alumno desempeñará, deberá contar con los conocimientos adquiridos en cada una de las áreas de conocimientos.</p>
                </TarjetaPrepa>
                <img src="/img/planEducativo.png" alt="plan educativo" />
                <TarjetaCapacitacionR
                    imgNumber={<img src="/img/3.png"/>}
                    img={<img src="/img/3-foto.png"/>}
                >
                    <h5 style={{"color": "#58595B"}}>Enfoque Educativo</h5>
                    <br />
                    <p>
                        Contamos con profesores que tienen un alto nivel intelectual, que te ayudarán a fortalecer y desarrollar nuevas habilidades, aptitudes y conocimientos, que además de que te ayudarán a acreditar el examen y obtener tu certificado de estudios, esto te permitirá que tenga un mejor desempeño laboral, personal y social. Y que este sistema educativo, está basado en los enfoques por competencias y constructivista.
                    </p>
                    <br />
                    <h5 style={{"color": "#58595B"}}>Competencias</h5>
                    <br />
                    <p>
                        Competencia es «El conjunto de comportamientos socio-afectivos y habilidades cognoscitivas, psicológicas, sensoriales y motoras que permiten llevar a cabo adecuadamente un desempeño, una función, una actividad o una tarea.» (UNESCO. 1999). No se refiere únicamente a conocimientos producto de un estudio teórico de una determinada disciplina, sino en esencia a un saber hacer complejo, operado sobre la realidad para resolver problemas y enfrentar situaciones.
                    </p>
                    <p>
                        Este enfoque, busca facilitar el aprendizaje a los alumnos, donde adquieran los contenidos de cada materia a través de situaciones prácticas y entornos experimentales, el cual se basa desde una metodología más didáctica y participativa, lo que ayudará a que se complementen los enfoques educativos previstos en este sistema educativo y ofertar una educación de calidad y eficiente.
                    </p>
                </TarjetaCapacitacionR>
                <TarjetaPrepa
                    imgNumber={<img src="/img/4.png"/>}
                    img={<img src="/img/4-foto.png"/>}
                >
                    <h5 style={{"color": "#2476B9"}}>Constructivista</h5>
                    <br />
                    <p>
                        El constructivismo es una corriente que explica al aprendizaje como un proceso activo, en el cual el alumno va aprendiendo conforme los aprendizajes que ya tiene, esto es que los nuevos aprendizajes los va incorporando a sus experiencias previas, además de estar centrado completamente en el alumno, éste hace una construcción propia de sus conocimientos, resultado de las actividades extremas e internas que realiza y la interacción con el medio. Por lo tanto, lo que el alumno aprende no solamente debe de ser una copia de la realidad, ni acumulación de conocimientos, sino que todos los conocimientos deben pasar por un proceso activo, el cual consiste en construir conocimiento desde la experiencia, de las cuales se organizan y extrapolan los significados.
                    </p>
                    <h5 style={{"color": "#2476B9"}}>Enseñanza Situada</h5>
                    <p>
                        En concordancia con lo que hemos venido argumentando, la enseñanza situada se refiere a contextualizar los contenidos, es decir, partir del contexto del estudiante para crear situaciones de interés para el alumno que lo involucren activamente en el proceso de aprendizaje, mediante la interacción con otros, la reflexión de lo que se hace y el desarrollo de prácticas en situaciones reales, de tal manera que lo que se aborde en la clase sea significativo para el estudiante para que pueda aprenderlo.
                    </p>
                </TarjetaPrepa>
                <TarjetaCapacitacionR
                    imgNumber={<img src="/img/5.png"/>}
                    img={<img src="/img/5-foto.png"/>}
                >
                    <h5 style={{"color": "#5C4598"}}>Mapa Curricular</h5>
                    <br />
                    <p>
                        El Plan de Estudio Preparatoria se imparte en 5 Módulos de Aprendizaje:
                    </p>
                    <p>
                        <ul>
                            <li>Mapa Curricular</li>
                            <li>Módulo I Comunicación</li>
                            <li>Módulo II Ciencias Sociales</li>
                            <li>Módulo III Humanidades</li>
                            <li>Módulo IV Razonamiento Matemático Módulo V Ciencias Experimentales</li>
                        </ul>
                    </p>
                </TarjetaCapacitacionR>
                <TarjetaPrepa
                    imgNumber={<img src="/img/6.png"/>}
                    img={<img src="/img/6-grafica.png"/>}
                >
                    <h5 style={{"color": "#225D39"}}>Proceso de Certificación</h5>
                    <br />
                </TarjetaPrepa>
                <TarjetaPrepa
                    imgNumber={<img src="/img/7.png"/>}
                    img={<img src="/img/7-iconos.png"/>}
                >
                    <h5>Inicio de Clases</h5>
                    <br />
                    <img src="/img/horarios.png" alt="horarios" />
                </TarjetaPrepa>
            </Row>
        </Container>
    </section>
  )
}
