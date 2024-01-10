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
    heading:"Download Pass"
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
    barValue:70,
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
    barValue:80,
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
    barValue:60,
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
    img:img1,
    name:"Shubhangi",
    noti:"Works on Backend and database",
    time:"25 seconds ago"
  },
  {
    img:img2,
    name:"Vishal",
    noti:"Works on Frontend",
    time:"25 minutes ago"
  },
  {
    img:img3,
    name:"Vaishnavi",
    noti:"Works on Backend ",
    time:"5 minutes ago"
  },
  
];

export const initialPassState = {
  aadharNo: 0,
  name: '',
  mobileNo: '',
  email: '',
  address: {
    street: '',
    city: '',
    state: '',
    zipCode: ''
  },
  busPass: {
    type: '',
    activatedOn: '',
    validity: '',
    status: '',
    renewalDate: '',
    passId: ''
  },
  paymentHistory: [{
    transactionId: '',
    amount: '',
    date: ''
  }],
};
