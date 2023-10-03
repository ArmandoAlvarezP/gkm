import { Accordion, Card } from "react-bootstrap";
import { CustomToggle } from "./CustomToggle";

export const GRPAccordion = () => {
  return (
    <Accordion defaultActiveKey="0">
        <Card className="grp-accordion">
            <Card.Header>
                <CustomToggle eventKey="0">Click me!</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card className="grp-accordion">
            <Card.Header>
                <CustomToggle eventKey="1">Click me!</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card className="grp-accordion">
            <Card.Header>
                <CustomToggle eventKey="2">Click me!</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
                <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card className="grp-accordion">
            <Card.Header>
                <CustomToggle eventKey="3">Click me!</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
                <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card className="grp-accordion">
            <Card.Header>
                <CustomToggle eventKey="4">Click me!</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
                <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>
    );
}
