import { Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label,Button, Row, Col } from "reactstrap";
import Base from "../components/Base";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import register from '../assets/images/register.jpeg'

const Signup = () =>{
    const formik = useFormik({
        initialValues: {
          fullName: '',
          aadharNumber: '',
          email: '',
          password: '',
          confirmPassword: '',
          acceptTerms: false,
        },
        validationSchema: Yup.object({
          fullName: Yup.string().required(<i style={{color:'red'}}>Full Name is required</i>),
          aadharNumber: Yup.string()
            .matches(/^\d{12}$/, 'Aadhar number must be 12 digits')
            .required(<i style={{color:'red'}}>Aadhar Number is required</i>),
          email: Yup.string().email('Invalid email address').required(<i style={{color:'red'}}>Email is required</i>),
          password: Yup.string()
            .required(<i style={{color:'red'}}>Password is required</i>)
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              'Password must be at least 8 characters long and include a special character, a digit, and an uppercase letter'
            ),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required(<i style={{color:'red'}}>Confirm Password is required</i>),
          acceptTerms: Yup.bool().oneOf([true], 'You must accept the Terms and Conditions'),
        }),
        onSubmit: (values) => {
          console.log(values);

        },
      });
    return(

        <Base>
            <Container className="my-4" maxWidth="md">
                <Row>
                 {/* Half of the screen for the image */}

                <Col md="6" className="mt-5">
                    <img
                    src={register}
                    alt="Registration Image"  
                    style={{ width: '100%', height: 'auto' }}
                    />
                </Col>
                <Col>
                
                <Card>
                    <CardHeader >
                        <center><h3>Register Yourself</h3></center>
                    </CardHeader>
                    <CardBody>
                        {/* Creating form*/}
                        <Form onSubmit={formik.handleSubmit}>
      <FormGroup>
        <Label for="fullName">Full Name</Label>
        <Input
          type="text"
          name="fullName"
          id="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
        />
        {formik.errors.fullName && <div className="error">{formik.errors.fullName}</div>}
      </FormGroup>

      <FormGroup>
        <Label for="aadharNumber">Aadhar Number</Label>
        <Input
          type="text"
          name="aadharNumber"
          id="aadharNumber"
          value={formik.values.aadharNumber}
          onChange={formik.handleChange}
        />
        {formik.errors.aadharNumber && <div className="error">{formik.errors.aadharNumber}</div>}
      </FormGroup>

      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && <div className="error">{formik.errors.password}</div>}
      </FormGroup>

      <FormGroup>
        <Label for="confirmPassword">Confirm Password</Label>
        <Input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        {formik.errors.confirmPassword && <div className="error">{formik.errors.confirmPassword}</div>}
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="acceptTerms"
            checked={formik.values.acceptTerms}
            onChange={formik.handleChange}
          />{' '}
          I accept the <Link to="/terms">Terms and Conditions</Link>
        </Label>
        {formik.errors.acceptTerms && <div className="error">{formik.errors.acceptTerms}</div>}
      </FormGroup>

      <Button type="submit" color="primary">
        Register
      </Button>
    </Form>
                    </CardBody>
                </Card>
                </Col>
               
        </Row>
            </Container>
        </Base>
    )
}

export default Signup;