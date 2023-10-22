import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Base from "../components/Base";

const Services = () =>{
    return (
        <Base>
            <Container>
               
            <Row className="mt-4">
                <Col md='4'>
                    <Card className="">
                        <CardHeader>Bus Pass Info</CardHeader>
                        <CardBody>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At soluta dolore, molestiae optio modi ut vitae quis deleniti ullam et! Architecto eveniet veritatis, impedit illo excepturi quasi. Exercitationem, cum at!</CardBody>
                    </Card>
                </Col>
                <Col md='4'>
                    <Card>
                        <CardHeader>Depo Information</CardHeader>
                        <CardBody>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At soluta dolore, molestiae optio modi ut vitae quis deleniti ullam et! Architecto eveniet veritatis, impedit illo excepturi quasi. Exercitationem, cum at!</CardBody>
                    </Card>
                </Col>
                <Col md='4'>
                    <Card>
                        <CardHeader>Bus Info</CardHeader>
                        <CardBody>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At soluta dolore, molestiae optio modi ut vitae quis deleniti ullam et! Architecto eveniet veritatis, impedit illo excepturi quasi. Exercitationem, cum at!</CardBody>
                    </Card>
                </Col>
            </Row>
            </Container>
        
        </Base>
    );  

}
 export default Services;