import './Radio.css'
import Pagination from "./Pagination";
import { useState } from 'react';
function Parent_Child(){

const [question1, setQuestion1] = useState(0);
const [question2, setQuestion2] = useState(0);
const [question3, setQuestion3] = useState(0);
const [question4, setQuestion4] = useState(0);
const [question5, setQuestion5] = useState(0);

    return(
        
        
                <div className=" questions flex  justify-center items-start  flex-col text-[#000000] font-semibold px-4 mb-10 text-xl ">
                <div className="q1 w-full ">
                    <p >1. I share an affectionate, warm relationship with my child</p>
                    <div className="options py-4 flex justify-between gap-12">
                    <label className={question1 === 1?"block active":"block"} onClick={()=>setQuestion1(1)}> <input type="radio" value="1" name="q1" /> Definitely, doesn't apply</label>
                    <label className={question1 === 2?"block active":"block"}  onClick={()=>setQuestion1(2)}><input type="radio" value="2" name="q1" /> Not really</label>
                    <label className={question1 === 3?"block active":"block"} onClick={()=>setQuestion1(3)} ><input type="radio" value="3" name="q1" /> Neutral, not sure</label>
                    <label className={question1 === 4?"block active":"block"} onClick={()=>setQuestion1(4)} ><input type="radio" value="4" name="q1"/> Applies somewhat</label>
                    <label className={question1 === 5?"block active":"block"} onClick={()=>setQuestion1(5)} ><input type="radio"  value="5" name="q1"/> Definitely applies</label>
                    </div>

                </div>
                <div className="q2 w-full ">
                    <p>2. My child and I always seem to be struggling with each other</p>
                    <div className="options py-4 flex justify-evenly gap-12">
                    <label className={question2 === 1?"block active":"block"}  onClick={()=>setQuestion2(1)}> <input type="radio" value="1" name="q2" /> Definitely, doesn't apply</label>
                    <label className={question2 === 2?"block active":"block"} onClick={()=>setQuestion2(2)} ><input type="radio" value="2" name="q2"  /> Not really</label>
                    <label className={question2 === 3?"block active":"block"} onClick={()=>setQuestion2(3)}  ><input type="radio" value="3" name="q2"  /> Neutral, not sure</label>
                    <label className={question2 === 4?"block active":"block"} onClick={()=>setQuestion2(4)} ><input type="radio" value="4" name="q2" /> Applies somewhat</label>
                    <label className={question2 === 5?"block active":"block"} onClick={()=>setQuestion2(5)} ><input type="radio" value="5" name="q2" /> Definitely applies</label>
                    </div>

                </div>
                <div className="q3 w-full  ">
                    <p>3. If upset, my child will seek confort from me </p>
                    <div className="options py-4 flex justify-evenly gap-12">
                    <label className="block" > <input type="radio" value="1" name="q3"  /> Definitely, doesn't apply</label>
                    <label className="block" ><input type="radio" value="2" name="q3"  /> Not really</label>
                    <label className="block" ><input type="radio" value="3" name="q3"  /> Neutral, not sure</label>
                    <label className="block" ><input type="radio" value="4" name="q3" /> Applies somewhat</label>
                    <label className="block" ><input type="radio" value="5" name="q3" /> Definitely applies</label>
                    </div>

                </div>
                <div className="q4 w-full ">
                    <p>4. My child is uncomfortable with physical attention or touch from me </p>
                    <div className="options py-4 flex justify-evenly gap-12">
                    <label className="block" > <input type="radio" value="1" name="q4"  /> Definitely, doesn't apply</label>
                    <label className="block" ><input type="radio" value="2" name="q4" /> Not really</label>
                    <label className="block" ><input type="radio" value="3" name="q4" /> Neutral, not sure</label>
                    <label className="block" ><input type="radio" value="4" name="q4"/> Applies somewhat</label>
                    <label className="block" ><input type="radio" value="5" name="q4"/> Definitely applies</label>
                    </div>

                </div>
                <div className="q5 w-full  ">
                    <p>5. My child values his/her relationship with me </p>
                    <div className="options py-4 flex justify-evenly gap-12">
                    <label className="block" > <input type="radio" value="1" name="q5" /> Definitely, doesn't apply</label>
                    <label className="block" ><input type="radio" value="2" name="q5" /> Not really</label>
                    <label className="block" ><input type="radio" value="3" name="q5" /> Neutral, not sure</label>
                    <label className="block" ><input type="radio" value="4" name="q5" /> Applies somewhat</label>
                    <label className="block" ><input type="radio" value="5" name="q5"/> Definitely applies</label>
                    </div>

                </div>

                </div>
                

        

    );


} 
export default Parent_Child;