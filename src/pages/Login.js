import React from 'react'
import Base from '../components/Base'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const Login = () => {
  return (
    <Base>
        <Container>
            <Row className='mt-4'>
                <Col sm={
                    {
                        size:6,
                        offset:3
                    }
                }>
                        <Card color='dark' inverse>
                            <CardHeader>
                                <h3>Login Here !!</h3>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label 
                                        for="email"

                                        >Enter Email</Label>
                                    <Input
                                     type="email"
                                     id="email" />
                                    </FormGroup>
                                    {/* Password*/}
                                    <FormGroup>
                                        <Label 
                                        for="password"

                                        >Enter Password</Label>
                                    <Input
                                     type="password"
                                     id="password" />
                                    </FormGroup>
                                    <Container className='text-center'>
                                        <Button color='primary'>Login</Button>
                                        <Button color='secondary' className='ms-2' type='reset'>Reset</Button>
                                    </Container>
                                </Form>
                            </CardBody>
                        </Card>

                </Col>
            </Row>

        </Container>
    </Base>
  )
}

export default Login