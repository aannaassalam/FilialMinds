// import Login from "./component/Login";
// import Pagination from "./component/Pagination";
import { useState } from "react";
import Parent_Child from "./component/Parent_Child";
import Parent_Child2 from "./component/Parent_Child2";
import Parent_Child3 from "./component/ParentChild3";
import Pagination from "./component/Pagination";
// import SignUp from "./component/SignUp";

function App() {
  
  const [step, setStep]=useState(1);

  function showStep(){
    switch(step){
      case 1: 
      return <Parent_Child/>
      case 2:
        return <Parent_Child2/>
      case 3: 
      return <Parent_Child3/>
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
                    <h1 className="py-5 text-2xl">Explore your parent child bond</h1>

                </div>
                <div className="Pagination">
                    <Pagination currentStep={step}/>
                </div>
      {showStep()}
      <button className="p-2 w-15 flex items-center mx-auto rounded-md border-2 border-solid border-slate-950" onClick={() => setStep(prev=>prev+1)} disabled={step===3}>Save</button>

                </div>

            </div>
        </div>
      {/* <Parent_Child2/>
      <Parent_Child3/> */}

    </div>
  );
}

export default App;

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