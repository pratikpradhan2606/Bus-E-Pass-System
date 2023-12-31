import { useState } from "react";
import Base from "../components/Base"
import { useAuth0 } from "@auth0/auth0-react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

const Dashboard = ()=>{
    const [islogin,setLogin] = useState(false);
    const { user, isAuthenticated } = useAuth0();
    function showDetails(){
        alert("User data");
    }
    return (
        <Base>
        {
            !isAuthenticated && <h1>Please Login</h1>            
        }
        {
            isAuthenticated &&
            <div>
                <p>Welcome {user.email}</p>
                <div className="container">
                    <Row>
                        <Col className="col-lg-3">
                            <Card>
                                <CardHeader>
                                    User
                                </CardHeader>
                                <CardBody>
                                    <button onClick={() => showDetails()}>Details</button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="col-lg-3">
                            <Card>
                                <CardHeader>
                                    Current Pass
                                </CardHeader>
                                <CardBody>
                                    <button onClick={() => showDetails()}>Show</button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            
        }
        </Base>
    )
}
export default Dashboard;