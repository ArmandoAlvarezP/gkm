import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

export const Banner = () => {

const toRotate = [ "Ideas", "Soluciones" ];
const [loopNum, setLoopNum] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const [text, setText] = useState('');
const [delta, setDelta] = useState(100 - Math.random() * 100);
const period = 2000;

useEffect(() => {
    let ticker = setInterval(() => {
        tick();
    }, delta )

    return () => { clearInterval(ticker) }
}, [text]);

const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if(isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
    }

    if(!isDeleting && updatedText === fullText){
        setIsDeleting(true);
        setDelta(period);
    } else if(isDeleting && updatedText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(200);
    }
}

return (
    <section className="banner" id="home">
            <video src="./video/Video-480.mov" loop="true" autoPlay="true" muted="true"></video>
            <Row className="align-items-center">
                <Col>
                    <h1>Creamos<span className="wrap"> {text}</span></h1>
                </Col>
            </Row>
    </section>
)

}