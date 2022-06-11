import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
            <footer>
                <Container>
                    <Row>
                        <Col className="text-center py-3">
                            Copyright &copy; Royale
                        </Col>
                        <Col>
                            C2
                        </Col>
                    </Row>
                </Container>
            </footer>
    )
}

export default Footer
