import Pagination from "./Pagination";
function Parent_Child3(){
    return(
                <div className=" questions flex  justify-center items-start  flex-col px-4 mb-10 text-xl ">
                <div className="q1 w-full ">
                    <p >1. I share an affectionate, warm relationship with my child</p>
                    <div className="options py-4 flex justify-between gap-12">
                    <label className="block" > <input type="radio" value="1" /> Definitely, doesn't apply</label>
                    <label className="block" ><input type="radio" value="2" /> Not really</label>
                    <label className="block" ><input type="radio" value="3" /> Neutral, not sure</label>
                    <label className="block" ><input type="radio" value="4"/> Applies somewhat</label>
                    <label className="block" ><input type="radio" value="5"/> Definitely applies</label>
                    </div>

                </div>
                <div className="q2 w-full ">
                    <p>2. My child and I always seem to be struggling with each other</p>
                    <div className="options py-4 flex justify-evenly gap-12">
                    <label className="block" > <input type="radio" value="1" /> Definitely, doesn't apply</label>
                    <label className="block" ><input type="radio" value="2" /> Not really</label>
                    <label className="block" ><input type="radio" value="3" /> Neutral, not sure</label>
                    <label className="block" ><input type="radio" value="4"/> Applies somewhat</label>
                    <label className="block" ><input type="radio" value="5"/> Definitely applies</label>
                    </div>

                </div>
                <div className="q3 w-full  ">
                    <p>3. If upset, my child will seek confort from me </p>
                    <div className="options py-4 flex justify-evenly gap-12">
                    <label className="block" > <input type="radio" value="1" /> Definitely, doesn't apply</label>
                    <label className="block" ><input type="radio" value="2" /> Not really</label>
                    <label className="block" ><input type="radio" value="3" /> Neutral, not sure</label>
                    <label className="block" ><input type="radio" value="4"/> Applies somewhat</label>
                    <label className="block" ><input type="radio" value="5"/> Definitely applies</label>
                    </div>

                </div>
                <div className="q4 w-full ">
                    <p>4. My child is uncomfortable with physical attention or touch from me </p>
                    <div className="options py-4 flex justify-evenly gap-12">
                    <label className="block" > <input type="radio" value="1" /> Definitely, doesn't apply</label>
                    <label className="block" ><input type="radio" value="2" /> Not really</label>
                    <label className="block" ><input type="radio" value="3" /> Neutral, not sure</label>
                    <label className="block" ><input type="radio" value="4"/> Applies somewhat</label>
                    <label className="block" ><input type="radio" value="5"/> Definitely applies</label>
                    </div>

                </div>
                <div className="q5 w-full  ">
                    <p>5. My child values his/her relationship with me </p>
                    <div className="options py-4 flex justify-evenly gap-12">
                    <label className="block" > <input type="radio" value="1" /> Definitely, doesn't apply</label>
                    <label className="block" ><input type="radio" value="2" /> Not really</label>
                    <label className="block" ><input type="radio" value="3" /> Neutral, not sure</label>
                    <label className="block" ><input type="radio" value="4"/> Applies somewhat</label>
                    <label className="block" ><input type="radio" value="5"/> Definitely applies</label>
                    </div>

                </div>

                </div>

        

    );


} 
export default Parent_Child3;