//Sidebar imports
import{
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilUsdSquare,
  UilMoneyWithdrawal,
} from "@iconscout/react-unicons";

import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'

export const SidebarData = [
  {
    icon:UilEstate,
    heading:"Dashboard"
  },
  {
    icon:UilClipboardAlt,
    heading:"Profile"
  },
  {
    icon:UilUsersAlt,
    heading:"Pass History"
  },
  {
    icon:UilPackage,
    heading:"Your Pass"
  },
  

]

export const CardsData = [
  {
    title:"Daily",
    charges:40,
    color:{
      backGround:"linear-gradient(180deg,#bb67ff 0%,#c484f3 100%)",
      boxShadow:"0px 10px 20px 0px #e0c6f5",
    },
    barValue:100,
    value:"1 Day Pass",
    png:UilUsdSquare,
    series:[
      {
        name:"Sales",
        data:[31,40,28,51,42,108,100],
      }
    ],
  },
  {
    title:"Weekly",
    charges:250,
    color:{
      backGround:"linear-gradient(180deg,#FF919D 0%,#FC929D 100%)",
      boxShadow:"0px 10px 20px 0px #FDC0C7",
    },
    barValue:100,
    value:"1 Week Pass",
    png:UilMoneyWithdrawal,
    series:[
      {
        name:"Revenue",
        data:[10,100,50,70,80,30,40],
      }
    ],
    
  },
  {
    title:"Monthly",
    charges:1000,
    color:{
      backGround:"linear-gradient(rgb(248,212,154)-146.42%, rgb(255,202,113)-46.42%)",
      boxShadow:"0px 10px 20px 0px #F9D59B",
    },
    barValue:100,
    value:"1 Month Pass",
    png:UilClipboardAlt,
    series:[
      {
        name:"Expenses",
        data:[10,25,15,30,12,15,20],
      }
    ],
   
  }
]

export const UpdatesData = [
  
  {
    heading:'1. Indefinite ‘steering chodo’ stir from today, transport services may be hit'
  },
  {
    heading:'2. HC: Bus damage no ground to claim relief for revenue loss '
  },{
    heading:'3. Now, MSRTC passengers can pay for ticket fares digitally during journey'
  },{
    heading:'Trade unions call off bus strike '
  },{
    heading:'4. ST bus ploughs into 7 vehicles, hits median on Solapur Road '
  },{
    heading:'5. No cancellation of any bus service due e-ticket machine problem: MSRTC official '
  },{
    heading:'6. 3 players in running to ply buses for Delhi govt’s premium services '
  },
  {
    heading:'7. Strike fizzles out as buses operated as per schedule'
  },
  {
    heading:'8. Haryana to provide free transportation to school students in villages'
  },
  {
    heading:'9. Roadways to start direct buses from Noida to Ayodhya'
  }
  
];

export const initialPassState = {
  aadharNo: 0,
  name: '',
  mobileNo: 0,
  email: '',
  address: {
    street: '',
    city: '',
    state: '',
    zipCode: ''
  },
  busPass: [{
    type: '',
    activatedOn: '',
    validity: '',
    status: '',
    renewalDate: '',
    passId: '',
    source:'',
    destination:'',
  }],
  paymentHistory: [{
    transactionId: '',
    amount: '',
    date: ''
  }],
};
export const PassData = 
  {
    title:"Daily",
    charges:40,
    color:{
      backGround:"linear-gradient(180deg,#bb67ff 0%,#c484f3 100%)",
      boxShadow:"0px 10px 20px 0px #e0c6f5",
    },
    barValue:70,
    value:"1 Day Pass",
    png:UilUsdSquare,
    series:[
      {
        name:"Sales",
        data:[31,40,28,51,42,108,100],
      }
    ],
  }
