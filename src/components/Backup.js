import Base from "../components/Base";
import '../styles/signup.css'
import React, { useState } from 'react';
import {
Button,
Form,
FormGroup,
Label,
Input,
Container,
} from 'reactstrap';

const Signup = () =>{
    
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const nextStep = () => {
      setStep(step + 1);
    };
  
    const prevStep = () => {
      setStep(step - 1);
    };
  
    const steps = ['Your Details ', 'Confirm Password ', 'Terms/Conditions'];
    return (
<Base>
<div className="step-indicator">
        
        {steps.map((label, index) => (
          <div key={index} className="step">
            <div className={`step-number ${step === index + 1 ? 'active' : ''}`}>
              {index + 1}
            </div>
            <div className="step-label">&nbsp;{label}&nbsp;</div>
          </div>
        ))}
      </div>
      <h3>Sign up</h3>
        <Container>
            
        <Form>
            {step === 1 && (
            <div>
                <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                />
                </FormGroup>
                <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                />
                </FormGroup>
                <Button onClick={nextStep}>Next</Button>
            </div>
            )}

            {step === 2 && (
            <div>
                <FormGroup>
                <Label for="email">Email</Label>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                </FormGroup>
                <FormGroup>
                <Label for="password">Password</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                </FormGroup>
                <Button onClick={prevStep}>Previous</Button>
                <Button onClick={nextStep}>Next</Button>
            </div>
            )}

            {step === 3 && (
            <div>
                <p>Review your information:</p>
                <p>First Name: {formData.firstName}</p>
                <p>Last Name: {formData.lastName}</p>
                <p>Email: {formData.email}</p>
                <Button onClick={prevStep}>Previous</Button>
                <Button type="submit">Sign Up</Button>
            </div>
            )}
        </Form>
        </Container>

      </Base>
    );
}

export default Signup;