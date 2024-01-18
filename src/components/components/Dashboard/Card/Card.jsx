import React, { useState } from 'react'
import './Card.css'
import {motion,AnimateSharedLayout} from "framer-motion"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {UilTimes} from "@iconscout/react-unicons"
import { Button } from '@mui/material';
import ExpandedCard from '../ExpandedCard/ExpandedCard';

const Card = (props) => {
    const [expanded,setExpanded] = useState(false);
   
  return (
    <AnimateSharedLayout>
        {
            expanded ?
                <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>:
            <CompactCard param = {props} setExpanded={()=>setExpanded(true)}/>
        }
    </AnimateSharedLayout>
)
}

//Compact Card
function CompactCard({param,setExpanded}) {
    const Png = param.png;
    return (
        <motion.div className="CompactCard" 
        style={{
            background:param.color.backGround,
            boxShadow:param.color.boxShadow,
        }} 
        onClick={setExpanded}
        layoutId='expandableCard'
        >
            <div className="radialBar">
                <CircularProgressbar
                    value={param.barValue}
                    text="E-Pass"
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png/>
                <span>{param.value}</span>
                
            </div>
            
        </motion.div>
    )
}

export default Card