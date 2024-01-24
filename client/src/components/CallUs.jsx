const CallUs = () => {
  return (
    <div className="-mt-6 bg-blue-800 flex">
      <div className="w-3/4 mx-auto py-20 flex flex-col justify-evenly gap-y-10 items-center bg-blue-800 rounded-3xl">
        <h1 className="text-5xl font-semibold text-blue-100 text-center">
          Want to know more about
          <h1 className="text-5xl font-semibold text-teal-400 inline-block">
            Growth Wiz
          </h1>{" "}
          ?
        </h1>
        <button className="w-1/2 bg-orange-500 hover:bg-orange-600 rounded-xl text-blue-100 text-2xl font-bold">
          Schedule a Free 1 to 1 Call
        </button>
      </div>
      <img
        className="object-cover w-1/2"
        src="/homepageProp/callUs.jpg"
        alt=""
      />
    </div>
  );
};

export default CallUs;
