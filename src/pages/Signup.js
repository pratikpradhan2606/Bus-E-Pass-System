import React, { useEffect, useState } from 'react'
import Base from '../components/Base'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const Signup = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        about: '',
    })
    const [error, setError] = useState({
        errors:{},
        isError:false
    });

    useEffect(()=>{
        
    },[data])
    
    const resetData = () =>{
        setData({name:'',email:"",password:"",about:""});
    }

    const handleChange = (event,property) =>{
        //dynamically changing value
        setData({...data,[property]:event.target.value})
    }
    const submitForm = (event) =>{
        event.preventDefault()
        console.log(data);
        //data validate

        //call server api for sending data
    }

  return (
    <Base>

    <Container>
        <Row className='mt-4'>
            <Col sm={{size:6,offset:3}}   >
            <Card color='dark' inverse>
            <CardHeader>
               <h3> Fill Information to register !!</h3>
            </CardHeader>
            <CardBody>

                {/* Creating form */}
                <Form onSubmit={submitForm}>
                    <FormGroup>
                        <Label for="name" >Enter Name</Label>
                        <Input 
                        type="text"
                        placeholder='Enter Name'
                        id="name"
                        onChange={(e)=>handleChange(e,'name')}
                        value={data.name}
                        />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="email" >Enter Email</Label>
                        <Input 
                        type="email"
                        placeholder='Enter Email'
                        id="email"
                        onChange={(e)=>handleChange(e,'email')}
                        value={data.email}
                        />
                    </FormGroup>

                    
                    <FormGroup>
                        <Label for="password" >Enter Password</Label>
                        <Input 
                        type="password"
                        placeholder='Enter Password'
                        id="password"
                        onChange={(e)=>handleChange(e,'password')}
                        value={data.password}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="about" >Enter About</Label>
                        <Input 
                        type="textarea"
                        placeholder='Enter Here'
                        id="about"
                        onChange={(e)=>handleChange(e,'about')}
                        value={data.about}
                        style={{height:"100px"}}
                        />
                    </FormGroup>
                    <Container className='text-center'>
                        <Button color='primary'>Register</Button>
                        <Button color='secondary' className="m-1"type="reset"onClick={resetData} >Reset</Button>
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

export default Signup