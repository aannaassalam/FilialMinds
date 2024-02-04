// import React from 'react'

// const ParentChildRelationship = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }




import { useState } from "react";
import ParentForm from "./ParentForm";
import ParentForm2 from "./ParentForm2";
import ParentForm3 from "./ParentForm3";
import ParentForm4 from "./ParentForm4";
// import Parent_Child2 from "./component/Parent_Child2";
// import Parent_Child3 from "./component/ParentChild3";
import Pagination from "./Pagination";
// import SignUp from "./component/SignUp";

function ParentChildRelationship() {
  
  const [json, setjson] = useState([]);
  const [step, setStep]=useState(1);

  function showStep(){
    switch(step){
      case 1: 
      return <ParentForm/>
      case 2:
        return <ParentForm2/>
      case 3: 
      return <ParentForm3/>
      case 4:
        return <ParentForm4/>
    }
  }
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <Pagination/> */}
      {/* {showStep(2)} */}
      <div className="main h-[100vh]">
             <div className="main-container w-[90%] h-[100%]  mx-auto  rounded-2xl ">
                <div className="questions-div  rounded-2xl">
                <div className="heading text-center">
                    <h1 className="pt-6 text-5xl text-[#664dd4] font-bold italic underline mb-16 ">Explore your parent child bond</h1>

                </div>
                <div className="Pagination">
                    <Pagination currentStep={step}/>
                </div>
      {showStep()}
      <button className="px-4 py-2 w-15  flex items-center mx-auto rounded-xl bg-[#f6d26f]" onClick={() => setStep(prev=>prev+1)} disabled={step===4}>Save</button>

                </div>

            </div>
        </div>
      {/* <Parent_Child2/>
      <Parent_Child3/> */}

    </div>
  );
}

export default ParentChildRelationship

{
  page1:[
   "I share an affectionate, warm relationship with my child.", "My child and I always seem to be struggling with each other","If upset, my child will seek comfort from me.","My child is uncomfortable with physical affection or touch from me."," My child values his/her relationship with me."
  ]
  page2:["My child appears hurt or embarrassed when I correct him/her.","My child does not want to accept help when he/she needs it.","When I praise my child, he/she beams with pride.","My child reacts strongly to separation from me",". My child spontaneously shares information about himself/herself."

  ] 
  page3:["My child is overly dependent on me","My child easily becomes angry at me.","My child tries to please me","My child feels that I treat him/her unfairly.",". My child asks for my help when he/she really does not need help"

  ]
  page4:["It is easy to be in tune with what my child is feeling","My child sees me as a source of punishment and criticism","My child expresses hurt or jealousy when I spend time with other children.","My child remains angry or is resistant after being disciplined.","When my child is misbehaving, he/she responds to my look or tone of voice."

  ]
  page5:["Dealing with my child drains my energy."," I've noticed my child copying my behavior or ways of doing things."," When my child is in a bad mood, I know we're in for a long and difficult day",". My child's feelings toward me can be unpredictable or can change suddenly",". Despite my best efforts, I'm uncomfortable with how my child and I get along."

] 
page6:["I often think about my child when at work.","My child whines or cries when he/she wants something from me.","My child is sneaky or manipulative with me","My child openly shares his/her feelings and experiences with me",". My interactions with my child make me feel effective and confident as a parent."

]

}
