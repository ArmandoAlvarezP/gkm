import { Col, Container, Row } from "react-bootstrap"
import { TarjetaCapacitacionR } from "./TarjetaCapacitacionR"
import { TarjetaCapacitacionL } from "./TarjetaCapacitacionL"

export const Capacitacion = () => {
   
  return (
    <section className="section-capacitacion" id="capacitacion">
        <Container>
            <Row>
                <Col className="capacitacion-title">
                    <h1>Capacitacion y Educación</h1>
                    <hr/>
                </Col>
            </Row>  
            <Row className="tarjeta-text">
                <TarjetaCapacitacionR 
                    imgNumber={<img src="/img/1-flag.png" />} 
                    img={<img src="/img/Cursos-Web-fotos.png" />}
                >
                    <h5 style={{"color": "#59B460"}}>Gluon Knowledge México</h5>
                    <h5 style={{"color": "#59B460"}}>Sector de Capacitación y Educación</h5>
                    <p>
                        En <strong>Gluon Knowledge</strong> estamos convencidos que el conocimiento nos ayuda a comprender e interpretar mejor nuestro entorno. La forma en la que interactuamos con los demás, así como la forma en la que influimos en todo lo que nos rodea a lo largo de nuestras vidas.
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
                    <h5 style={{"color": "#19B6BE"}}>Enfoque Social</h5>
                    <p>
                        Somos una organización encargada de proporcionar soluciones de capacitación y educación con el compromiso de contribuir al desarrollo económico sostenible por medio de la colaboración con sus empleados, sus familias, la comunidad local y la inclusión laboral de personas con discapacidad, participando en proyectos de responsabilidad social en alianza con organizaciones civiles, impulsando un programa de becas para personas de escasos recursos.
                    </p>
                    <h5 style={{"color": "#19B6BE"}}>Enfoque Internacional</h5>
                    <p>
                        Contamos con alianzas internacionales que nos permite integrar un equipo consolidado de consultores, expositores, y maestros con amplia experiencia, con la finalidad de brindar a nuestros clientes, soluciones a sus necesidades de capacitación.
                    </p>
                    <p>
                        Argentina, Colombia, Chile, República Dominicana, Guatemala, Costa Rica, Panamá, España, Perú, Ecuador, Venezuela.
                    </p>
                    <img src="/img/flags.png" alt="flags" style={{ "maxWidth": "100%"}} className="mt-5"/>
                </TarjetaCapacitacionL>
                <TarjetaCapacitacionR 
                    imgNumber={<img src="/img/3-flag.png" />} 
                    img={<img src="/img/Cursos-Web-fotos3.png"/>}
                >
                    <h5>Áreas de Capacitación Presencial o Virtual</h5>
                    <h5>A) Desarrollo Profesional y Personal</h5>
                    <p>
                        <ul>
                            <li>
                                Unir dos ámbitos muy importantes como el personal y el profesional. permitirá reforzar los conocimientos y habilidades que las personas trabajan diariamente, obteniendo nuevas herramientas para los desafios de la vida cotidiana para lograr alcanzar los máximos estándares de exigencia que las organizaciones están requiriendo en la actualidad, así como la forma de poder interactuar con equipos de trabajo, familia y sociedad.
                            </li>
                        </ul>
                    </p>
                    <br />
                    <h5>B) Capacitaciones con fines de Certificación</h5>
                    <h5>(Estándares de Competencias. CONOCER/ISO).</h5>
                    <p>
                        <ul>
                            <li>
                                Contar con capacitación con fines de certificación a nivel nacional o internacional. mediante Estándares de Competencia o ISO (International
                                Organization for Standardization). fortalecerá de manera individual o grupal el reconocimiento y validación de los conocimientos. habilidades y aptitudes adquiridas sobre alguna función, proceso. prestación de servicios para obtener mayor competitividad en el ámbito laboral.
                            </li>
                        </ul>
                    </p>
                </TarjetaCapacitacionR>
                <TarjetaCapacitacionL 
                    imgNumber={<img src="/img/4-flag.png"/>} 
                    img={<img src="/img/Cursos-Web-fotos4.png"/>}
                >
                    <h5 style={{"color": "#2476B9"}}>C) Habilidades Administrativas</h5>
                    <br />
                    <p>
                        Para contar con personas y equipos de alto desempeño, es indispensable que cada organización diseñe un programa anual de capacitación que ayude a mejor las competencias y habilidades de sus integrantes, por ello ofrecemos una serie de cursos enfocados a desarrollar y fortalecer habilidades administrativas que resuelvan las necesidades de cada institución pública o privada.
                    </p>
                    <br />
                    <h5 style={{"color": "#2476B9"}}>D) Temas Legales y de Gobierno</h5>
                    <br />
                    <p>
                        Conocer y reforzar los conocimientos sobre los derechos y obligaciones que tiene cada organización en el marco legal vigente, previendo cualquier observación de la autoridad local o nacional que pudiera generar gastos.
                        molestias y contratiempos en los procesos de nuestros clientes.
                    </p>
                </TarjetaCapacitacionL>
                <TarjetaCapacitacionR
                    imgNumber={<img src="/img/5-flag.png"/>}
                    img={<img src="/img/Cursos-Web-fotos5.png"/>}
                >
                    <h5 style={{"color": "#5C4598"}}>Desarrollo profesional y personal</h5>
                    <br />
                    <p>
                        <ul>
                            <li>
                                A través del Acuerdo 286 de la Secretaría de Educación Pública celebramos convenio de colaboración con el Colegio Nacional de Integración Profesional
                                (CONAIP). para poder capacitar a las personas que no han podido concluir sus estudios de preparatoria y licenciatura (pedagogia y administración)
                                preparándolos para el examen que certificará sus conocimientos ante una
                                instancia evaluadora.
                            </li>
                            <li>
                                Resistencia al cambio
                            </li>
                            <li>
                                ¿Cómo facilitar y desarrollar resiliencia en poblaciones. grupos y personas vulnerables?
                            </li>
                            <li>
                                Mujeres resilientes ante lo adverso: ¿cómo construir oportunidades en las crisis?
                            </li>
                            <li>
                                Resiliencia aplicada en familias y hogares con violencia.
                            </li>
                            <li>
                                Niños y adolescentes resilientes: de la vulnerabilidad a la oportunidad.
                            </li>
                            <li>
                                Liderazgo de excelencia.
                            </li>
                            <li>
                                Trabajo en equipo.
                            </li>
                        </ul>
                    </p>
                </TarjetaCapacitacionR>
                <TarjetaCapacitacionL
                    imgNumber={<img src="/img/6-flag.png"/>}
                    img={<img src="/img/Cursos-Web-fotos6.png"/>}
                >
                    <h5 style={{"color": "#225D39"}}>Desarrollo profesional y personal</h5>
                    <br />
                    <p>
                        <ul>
                            <li>
                                Comunicación asertiva.
                            </li>
                            <li>
                                Manejo de estrés.
                            </li>
                            <li>
                                Empatía.
                            </li>
                            <li>
                                Resolución de conflictos.
                            </li>
                            <li>
                                Manejo de usuarios molestos.
                            </li>
                            <li>
                                Fenotipos.
                            </li>
                            <li>
                                Anclaje energético de los alimentos.
                            </li>
                            <li>
                                Idiomas comercial y corporativo (Inglés. Francés. Alemán. Chino).
                            </li>
                            <li>
                                Ortografía y redacción.
                            </li>
                            <li>
                                Paquetería Office.
                            </li>
                            <li>
                                Diplomado Neuroliderazgo.
                            </li>
                            <li>
                                Inteligencia emocional para ejecutivos.
                            </li>
                        </ul>
                    </p>
                </TarjetaCapacitacionL>
                <TarjetaCapacitacionR
                    imgNumber={<img src="/img/7-flag.png"/>}
                    img={<img src="/img/Cursos-Web-fotos7.png"/>}
                >
                    <h5>Capacitación con fines de certificación</h5>
                    <h5>Competencias y habilidades laborales</h5>
                    <br />
                    <p>
                        Estándares de Competencia ante el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER):
                    </p>
                    <p>
                        <ul>
                            <li>EC1268 ‘Atención al usuario basada en la cultura del buen trato».</li>
                            <li>EC0076 Evaluación de la competencia de candidatos con base en
                            Estándares de Competencia».</li>
                            <li>EC1364 Prestación de servicios de limpieza y desinfección. con el uso de equipo de protección en establecimientos de salud».</li>
                            <li>EC0207.01 «Impartición de cursos de formación del capital humano de manera presencial-grupal».</li>
                        </ul>
                    </p>
                    <img src="img/7-Conocer.png" alt="conocer" style={{"paddingLeft": "10vw"}}/>
                </TarjetaCapacitacionR>
                <TarjetaCapacitacionL
                    imgNumber={<img src="/img/8-flag.png"/>}
                    img={<img src="/img/Cursos-Web-fotos8.png"/>}
                >
                    <h5>Capacitación con fines de certificación</h5>
                    <h5>Competencias y habilidades laborales</h5>
                    <br />
                    <p>
                        Son un conjunto de estándares con reconocimiento internacional, que fueron creados con el objetivo de ayudar a las empresas a establecer niveles de homogeneidad en relación con la gestión. prestación de servicios y desarrollo de productos en la industria.
                        Cursos de interpretación, auditor líder interno. Auditor líder en:
                    </p>
                    <p>
                        <ul>
                            <li>ISO 9001: Gestión de la calidad.</li>
                            <li>ISO 14001: Gestión del medio ambiente.</li>
                            <li>ISO 45001: Gestión de Salud y Seguridad en el Trabajo.</li>
                            <li>ISO 37001: Gestión Anti-Soborno.</li>
                            <li>ISO 28001: Gestión de Seguridad en la Cadena de Suministro.</li>
                            <li>ISO 50001: Gestión de la Energía.</li>
                            <li>HACCP: Inocuidad Alimentaria.</li>
                        </ul>
                    </p>
                </TarjetaCapacitacionL>
                <TarjetaCapacitacionR
                    imgNumber={<img src="/img/9-flag.png"/>}
                    img={<img src="/img/Cursos-Web-fotos9.png"/>}
                >
                    <h5>Habilidades Administrativas</h5>
                    <br />
                    <p>
                        <ul>
                            <li>Dirección estratégica.</li>
                            <li>Gestión de crisis.</li>
                            <li>Resiliencia organizacional.</li>
                            <li>Respuesta a emergencias.</li>
                            <li>Mapeo de procesos.</li>
                            <li>Herramientas para identificar y atender no conformidades.</li>
                            <li>Ciclo de vida.</li>
                            <li>Identificación de riesgos y peligros.</li>
                            <li>Identificación de aspectos e impactos ambientales.</li>
                            <li>Continuidad de negocio.</li>
                            <li>Gestión de riesgo.</li>
                            <li>Grupos de trabajo inteligentes, emocionales y resilientes.</li>
                            <li>Ventas de alto rendimiento.</li>
                            <li>Como construir equipos de trabajo exitosos.</li>
                            <li>Crea tu modelo de servicio al cliente.</li>
                            <li>Ejecución en la empresa.</li>
                        </ul>
                    </p>
                </TarjetaCapacitacionR>
                <TarjetaCapacitacionL
                    imgNumber={<img src="/img/10-flag.png"/>}
                    img={<img src="/img/Cursos-Web-fotos10.png"/>}
                >
                    <h5>Habilidades Administrativas</h5>
                    <br />
                    <p>
                        <ul>
                            <li>Supervisión efectiva. liderazgo y dirección de grupos de trabajo</li>
                            <li>¿Cómo identificar y controlar las respuestas de estrés, ansiedad. burn out y peak performance en los colaboradores de la organización?</li>
                            <li>Planificación estratégica.</li>
                            <li>Desarrollo de indicadores de gestión.</li>
                            <li>Gestión de centros de contacto.</li>
                            <li>Contexto de la organización + matriz de riesgo.</li>
                            <li>5 S’s en los sistemas de gestión.</li>
                            <li>Gestión de la calidad-satisfacción delcliente-directrices para el tratamiento de las quejas en las organizaciones.</li>
                            <li>Directrices para el tratamiento de las quejas en las organizaciones.</li>
                        </ul>
                    </p>
                </TarjetaCapacitacionL>
                <TarjetaCapacitacionR
                    imgNumber={<img src="/img/11-flag.png"/>}
                    img={<img src="/img/Cursos-Web-fotos11.png"/>}
                >
                    <h5>Temas Legales y Gobierno</h5>
                    <br />
                    <p>
                        <ul>
                            <li>Protección civil</li>
                            <li>Derechos humanos.</li>
                            <li>Estrategias fiscales para empresas y personas físicas.</li>
                            <li>Seguridad social (afiliación, vigencia de derechos. pensiones).</li>
                            <li>Igualdad de género.</li>
                            <li>Transparencia, protección de datos personales y acceso a la información pública.</li>
                            <li>Responsabilidades administrativas.</li>
                            <li>Rendición de cuentas, ética y combate a la corrupción.</li>
                            <li>Poligrafía</li>
                            <li>Regulación sanitaria en México.</li>
                            <li>Seguridad y prevención del delito.</li>
                            <li>Seguridad informática.</li>
                            <li>NOM-035-STPS-2018. Factores de riesgo psicosocial en el trabajo-
                            Identificación, análisis y prevención.</li>
                            <li>Asesoría para la preparación en la certificación ESG (Environmental. Social
                            and Governance).</li>
                            <li>Regularización de las empresas en materia de protección civil. medio
                            establecimientos mercantiles y desarrollo urbano para
                            prevención de sanciones.</li>
                        </ul>
                    </p>
                </TarjetaCapacitacionR>
                <TarjetaCapacitacionL
                    imgNumber={<img src="/img/12-flag.png"/>}
                    img={<img src="/img/Cursos-Web-fotos12.png"/>}
                >
                    <h5>Beneficios Corporativos</h5>
                    <br />
                    <p>
                        Al tomar algún curso de nuestros colaboradores. obtendrás grandes beneficios, como lo es:
                    </p>
                    <br />
                    <p>
                        <ul>
                            <li>Membresía gratuita para viajes en lo que duran tus capacitaciones.</li>
                            <li>Membresía gratuita en seguro médico, donde obtendrás un kit. teniendo los siguientes beneficios:</li>
                            <li>Sin limite de edad a los servicios de salud. sin restricciones por condiciones de salud, uso ilimitado. expediente clínico en línea, receta digital para surtido y resurtido de medicamentos, red médica tabulada con precio estandarizado, acceso inmediato a servicios de salud, servicios de telemedicina desde donde quiera que estén, servicio de omnicanal.
                            servicios 24/7; Entre otros.</li>
                            <li>Tendrás acceso a la oferta de cursos gratuitos o de bajo costo de manera presencial y en línea para reforzar tu formación académica y profesional.</li>
                        </ul>
                    </p>
                </TarjetaCapacitacionL>
            </Row>
            <Row>
                <Col>
                    <img src="/img/Presentacion-Cursos-Web13.png" alt="cursos" style={{"width": "100%"}}/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
