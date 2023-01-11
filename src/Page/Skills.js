import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import '../Page/css/Skills.css'


function Skills2() {
    return (
        <div id="skills">
           <div className="text"> 기술스택 </div>
            <Row className="Row">
                <Col><Img src="img/html.png"/></Col>
                <Col><Img src="img/css.png"/></Col>
                <Col><Img src="img/js.png"/></Col>
            </Row>
            <span className="line"/>
            <Row className="Row">
            <Col><Img src="img/react.png"/></Col>
                <Col><Img src="img/nodejs.png"/></Col>
                <Col><Img src="img/express.png"/></Col>
            </Row>
            <span className="line"/>
            <Row className="Row">
            <Col><Img src="img/mongodb.png"/></Col>
                <Col><Img src="img/mysql.png"/></Col>
            </Row>
        </div>
    )    
}

const Img = styled.img`
height:4em;
@media (max-width: 580px) {
    height:3em;
}
`

export default Skills2;