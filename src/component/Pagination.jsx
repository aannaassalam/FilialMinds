import React from 'react';
import Circle from './Circle.js'
import {useState,useEffect} from 'react';
import  './Progress.css'



const Pagination = ({currentStep}) => {
    const[circle]= useState(3);
    const[width,setWidth]= useState(0);

    useEffect(() => {
      setWidth(100/(circle-1)*(currentStep-1));
    }, [circle,currentStep]);

    

    // console.log(active)
    const arr=[];
    for(let i=1;i<=circle;i++){
      console.log(i,currentStep-1)
      arr.push(<Circle classname= {i<=currentStep?"circle active":"circle"} key={i}>{i}</Circle>);
    }

  return (
    <>
    <div className="container ">
    <div className="content ">
        <div className="progressbar">
        <div className="progress " style={{width: width+"%"}}></div>
          {arr}
        </div>
      
    </div>
    {/* <div className="button ">
        <button className="prev btn" disabled={active>0? false:true} onClick={()=>{active<=0?setActive(0):setActive(active-1)}}>Prev </button>
       <button className="next btn" disabled={active>=circle-1?true:false} onClick={()=>{active>=circle?setActive(circle):setActive(active+1)}}>Next </button>
    </div> */}




    </div>

    </>    
    
  )
}

export default Pagination;
