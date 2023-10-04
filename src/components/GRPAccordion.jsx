import { Accordion, Card, Col, Row } from "react-bootstrap";
import { CustomToggle } from "./CustomToggle";

export const GRPAccordion = () => {
  return (
    <Accordion defaultActiveKey="0">
        <Card className="grp-accordion">
            <Card.Header>
                <CustomToggle eventKey="0">Descripción</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body className="accordion-body">
                    <Row>
                        <Col>
                            <p>
                                GestionNet es un Sistema Integral Mexicano de tipo GRP desarrollado exclusivamente para Gobierno, con más de 20 años de experiencia y cumple al 100% con la Ley General de Contabilidad Gubernamental (LGCG) y la normatividad emitida por el Consejo Nacional de Armonización Contable (CONAC), nuestro sistema consta de 3 grandes Módulos; Recursos Financieros, Recursos Materiales y Recursos Humanos.Además es un Software propio, lo que permite realizar cualquier tipo de modificaciones encaminadas a la mejora de procesos y la normatividad aplicable, así como el manejo de usuarios ilimitados.Actualmente contamos con clientes Locales, Federales y Autónomos.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src="/img/modulos.png" alt="módulos" />
                        </Col>
                    </Row>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card className="grp-accordion">
            <Card.Header>
                <CustomToggle eventKey="1">Ventajas Competitivas</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
                <Card.Body className="accordion-body">
                    <Row>
                        <Col>
                            <p>
                                <ul>
                                    <li>
                                        Sistema 100% mexicano desarrollado exclusivamente para Gobierno.
                                    </li>
                                    <li>
                                        Contamos con Derechos de autor, lo que permite realizar adecuaciones y desarrollos sin límite.
                                    </li>
                                    <li>
                                        Licenciamiento de Usuarios ilimitados.
                                    </li>
                                    <li>
                                        Opción de Licenciamiento perpetuo o en renta.
                                    </li>
                                </ul>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src="/img/submodulos.png" alt="submódulos" />
                        </Col>
                    </Row>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card className="grp-accordion">
            <Card.Header>
                <CustomToggle eventKey="2">Recursos Financieros</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
                <Card.Body className="accordion-body">
                    <Row>
                        <Col>
                            <p>
                                Este módulo administra todo el ciclo financiero desde el anteproyecto, la administración del ejercicio presupuestal (de varios tipos de fuentes de financiamiento y programas) a través de cada uno de los momentos presupuestales en interacción con las áreas administrativas y sustantivas, su afectación contable, el reflejo y control de todas las obligaciones de pago de la Entidad derivadas de la propia gestión operativa, así como la gestión de Viáticos e Ingresos Propios.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src="/img/rf.png" alt="rf" />
                        </Col>
                    </Row>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card className="grp-accordion">
            <Card.Header>
                <CustomToggle eventKey="3">Recursos Materiales</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
                <Card.Body className="accordion-body">
                    <Row>
                        <Col>
                            <p>
                                Este Módulo administra todos los procesos de recursos Materiales derivados de las áreas requirentes, desde la solicitud de un Bien o Servicio y la autorización de la misma, la solicitud de una adecuación de Obra Pública, el control Vehicular, el control de un Activo Fijo desde su adquisición, pasando por su asignación transferencias, mantenimientos, depreciación, seguros hasta su destino final. De igual forma administra el ingreso de los bienes adquiridos a los Almacenes Centrales y su transferencia diversos multi-almacenes hasta la entrega al usuario final. Todo lo anterior con interacción con el módulo de Recursos Financieros desde la Solicitud de Suficiencia, el Compromiso, su Devengo, Ejercido y llegando al Pagado, presupuestalmente hablando con su afectación contable correspondiente, así como la afectación del gasto, la depreciación y el control del Patrimonio.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src="/img/rm.png" alt="rm" />
                        </Col>
                    </Row>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card className="grp-accordion">
            <Card.Header>
                <CustomToggle eventKey="4">Recursos Humanos</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
                <Card.Body className="accordion-body">
                    <Row>
                        <Col>
                            <p>
                                Este Módulo administra todo el ciclo del Personal desde la Selección y Evaluación, Capacitación, Evaluación del Desempeño, Movimientos y el cálculo de la Nómina. Nuestro sistema administra todo tipo de nóminas (Eventuales, Base, Confianza, Interinos, Honorarios, Provisionales, entre otras), con un solo tipo de Fuente de Financiamiento o varios identificando las diferentes áreas funcionales, con su conexión al 100% con Financieros al igual que Recursos Materiales, así como una gran serie de funcionalidades y productos como son; calculo de aguinaldo, ajuste anual de ISR, vales de despensa, pagos a terceros, reportes FONAC, CONSAR, Recibos de nómina, Timbrado, entre muchos otros. Cabe mencionar que el Sistema actualmente calcula aproximadamente 18 tipos de nómina de uno de nuestros clientes, de casi 16,000 empleados.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img src="/img/rh.png" alt="rh" />
                        </Col>
                    </Row>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>
    );
}
