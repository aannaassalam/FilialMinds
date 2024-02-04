
import { useState } from 'react';
const ParentForm2 = () =>{

const [question1, setQuestion1] = useState(0);
const [question2, setQuestion2] = useState(0);
const [question3, setQuestion3] = useState(0);
const [question4, setQuestion4] = useState(0);


    return(
        
                <>
                    

                    <div className="flex justify-evenly flex-wrap py-20">
                    <div className="q1 w-[45%] h-[300px] ">
                    <p className="text-2xl">5. My child values his/her relationship with me.</p>
                    <div className="options text-2xl flex justify-evenly flex-wrap">
                    
                    <label className={question1 === 1?"block active py-8":"block py-8" } onClick={()=>setQuestion1(1)}> <input type="radio" value="1" name="q1" /> Definitely, doesn't apply</label>
                    <label className={question1 === 2?"block active py-8":"block py-8"}  onClick={()=>setQuestion1(2)}><input type="radio" value="2" name="q1" /> Not really</label>
                    <label className={question1 === 3?"block active py-8":"block py-8"} onClick={()=>setQuestion1(3)} ><input type="radio" value="3" name="q1" /> Neutral, not sure</label>
                    <label className={question1 === 4?"block active py-8":"block py-8"} onClick={()=>setQuestion1(4)} ><input type="radio" value="4" name="q1"/> Applies somewhat</label>
                    <label className={question1 === 5?"block active py-8":"block py-8"} onClick={()=>setQuestion1(5)} ><input type="radio"  value="5" name="q1"/> Definitely applies</label>
                    </div>

                </div>


                <div className="q2 w-[45%] ">
                    <p className="text-2xl">6. My child appears hurt or embarrassed when I correct him/her.</p>
                    <div className="options text-2xl flex justify-evenly flex-wrap">
                    <label className={question2 === 1?"block active py-8":"block py-8"}  onClick={()=>setQuestion2(1)}> <input type="radio" value="1" name="q2" /> Definitely, doesn't apply</label>
                    <label className={question2 === 2?"block active py-8":"block py-8"} onClick={()=>setQuestion2(2)} ><input type="radio" value="2" name="q2"  /> Not really</label>
                    <label className={question2 === 3?"block active py-8":"block py-8"} onClick={()=>setQuestion2(3)}  ><input type="radio" value="3" name="q2"  /> Neutral, not sure</label>
                    <label className={question2 === 4?"block active py-8":"block py-8"} onClick={()=>setQuestion2(4)} ><input type="radio" value="4" name="q2" /> Applies somewhat</label>
                    <label className={question2 === 5?"block active py-8":"block py-8"} onClick={()=>setQuestion2(5)} ><input type="radio" value="5" name="q2" /> Definitely applies</label>
                    </div>

                </div>


                <div className="q3 w-[45%] ">
                    <p className="text-2xl">7. My child does not want to accept help when he/she needs it.</p>
                    <div className="options text-2xl flex justify-evenly flex-wrap">
                    <label className={question3 === 1?"block active py-8":"block py-8"}  onClick={()=>setQuestion3(1)}> <input type="radio" value="1" name="q2" /> Definitely, doesn't apply</label>
                    <label className={question3 === 2?"block active py-8":"block py-8"} onClick={()=>setQuestion3(2)} ><input type="radio" value="2" name="q2"  /> Not really</label>
                    <label className={question3 === 3?"block active py-8":"block py-8"} onClick={()=>setQuestion3(3)}  ><input type="radio" value="3" name="q2"  /> Neutral, not sure</label>
                    <label className={question3 === 4?"block active py-8":"block py-8"} onClick={()=>setQuestion3(4)} ><input type="radio" value="4" name="q2" /> Applies somewhat</label>
                    <label className={question3 === 5?"block active py-8":"block py-8"} onClick={()=>setQuestion3(5)} ><input type="radio" value="5" name="q2" /> Definitely applies</label>
                    </div>

                </div>


                <div className="q4 w-[45%] ">
                    <p className="text-2xl">8. When I praise my child, he/she beams with pride.</p>
                    <div className="options text-2xl flex justify-evenly flex-wrap">
                    <label className={question4 === 1?"block active py-8":"block py-8"}  onClick={()=>setQuestion4(1)}> <input type="radio" value="1" name="q2" /> Definitely, doesn't apply</label>
                    <label className={question4 === 2?"block active py-8":"block py-8"} onClick={()=>setQuestion4(2)} ><input type="radio" value="2" name="q2"  /> Not really</label>
                    <label className={question4 === 3?"block active py-8":"block py-8"} onClick={()=>setQuestion4(3)}  ><input type="radio" value="3" name="q2"  /> Neutral, not sure</label>
                    <label className={question4 === 4?"block active py-8":"block py-8"} onClick={()=>setQuestion4(4)} ><input type="radio" value="4" name="q2" /> Applies somewhat</label>
                    <label className={question4 === 5?"block active py-8":"block py-8"} onClick={()=>setQuestion4(5)} ><input type="radio" value="5" name="q2" /> Definitely applies</label>
                    </div>

                </div>
                
                    </div>

                    
                </>
                
                

        

    );


} 
export default ParentForm2;



















