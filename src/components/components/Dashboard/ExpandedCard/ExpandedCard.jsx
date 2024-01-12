import React, { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UilTimes } from '@iconscout/react-unicons';
import { Alert, Button, TextField } from '@mui/material';
import { Label } from 'reactstrap';
import { UserContext } from '../App/DashboardApp';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function ExpandedCard({ param, setExpanded }) {
  const { profileData, setProfileData } = useContext(UserContext);
  const [passType, setPassType] = useState();
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [amount, setAmount] = useState(0);
  
 function loadScript(src) {
      return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
              resolve(true);
          };
          script.onerror = () => {
              resolve(false);
          };
          document.body.appendChild(script);
      });
  }

  async function displayRazorpay() {
  
    const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
          alert("Razorpay SDK failed to load. Are you online?");
          return;
      }

      const data1 = {
        amount: param.amount,
        type:param.title,
        info: 'order_request'
      };
      alert(data1);
      const result = await axios.post("http://localhost:8081/create_order", data1);
      if (!result) {
          alert("Server error. Are you online?");
          return;
      }
      console.log(JSON.stringify(result));
      
      const { amount, id: order_id, currency } = result.data;

      const options = {
          key: "rzp_test_t6U6FMDUOwMVMj", // Enter the Key ID generated from the Dashboard
          amount: amount.toString(),
          currency: currency,
          name: profileData.name,
          description: "Pass Generation Transaction",
          image:  "" ,
          order_id: order_id,
          handler: async function (response) {
              const data = {
                  orderCreationId: order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpayOrderId: response.razorpay_order_id,
                  razorpaySignature: response.razorpay_signature,
              };
             alert(JSON.stringify(data));
              const result = await axios.post("http://localhost:8081/payment/success/"+profileData.aadharNo, {
                transactionId:order_id,
                passType:passType,
                amount:amount,
                date:selectedDate
              });
              if(res.data===404){
                alert("Payment Failed");
                return;
              }
              const data2= {
                "type": param.title,
                "activatedOn": selectedDate,
                "validity": "",
                "status": "active",
                "renewalDate": "",
                "passId": "1234"
              }
              alert("Success "+JSON.stringify(result.data));
              const response1 = await axios.post("http://localhost:8081/api/users/pass/"+profileData.aadharNo,data2);
              if(response1.data){
                alert("Pass Generated");
              }
          },
          prefill: {
              name: profileData.name,
              email: profileData.email,
              contact: profileData.mobileNo,
          },
          notes: {
              address: "E-Pass Office",
          },
          theme: {
              color: "#fbcf61",
          },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
  }

  
  const checkPassAlreadyExist = async() =>{
    try {
      if (selectedDate === '') {
        alert("Please Fill Complete Details");
        return;
      }
      const data = {
        "type": param.title,
        "activatedOn": selectedDate,
        "validity": "",
        "status": "active",
        "renewalDate": "",
        "passId": "1234",
        "source":source,
        "destination":destination,
      }
     
      
      let res = await axios.post("http://localhost:8081/api/users/pass/conflict/"+profileData.aadharNo,data)
      
      if(res.data===404){
        alert("Pass Already Exists Try again!!");
        return;
      }
      
      alert("No Conflict");
      
      console.log(JSON.stringify(data));

      displayRazorpay();
      // const response = await axios.post('http://localhost:8081/api/users/pass/' + profileData.aadharNo, data);
      // const userData = response.data;
      // if (userData) {
      //   toast("Successfully created a new Pass!", "success");
      // } else {
      //   toast.error("Please Try Again");
      // }
    } catch (error) {
      toast.error("Error Occured! Please Try Again");
    }  
  }
    

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div
        style={{
          alignSelf: 'flex-end',
          cursor: 'pointer',
          color: 'white',

        }}
      >
        <UilTimes onClick={setExpanded} />
      </div>


      {/* Pass type input */}
      <TextField
        label="Pass Type"
        value={param.title}
        onChange={(e) => setPassType(e.target.value)}
        InputProps={{
          readOnly: true,
        }}
      />
      <div >
        {/* Source input */}
        <TextField className='m-1'
          label="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        {/* Destination input */}
        <TextField className='m-1'
          label="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      {/* Amount input */}
      <TextField
        label="Pass Amount"
        value={param.charges}
        onChange={(e) => setAmount(e.target.value)}
        InputProps={{
          readOnly: true,
        }}
      />
      {/* Date input */}
      <Label>Select Date</Label>
      <TextField
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        required
      />

      <Button onClick={checkPassAlreadyExist}>Get Pass</Button>
      <span>Last 24 Hours</span>
      <div className="toast-container">
        <ToastContainer />
      </div>
      <ToastContainer />
    </motion.div>
  );
}

export default ExpandedCard;
