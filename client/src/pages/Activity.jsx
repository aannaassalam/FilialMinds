

const Activity = () => {
  return (
    <>
      <div className="flex">
        <div className="basis-1/6 bg-red-500"></div>
        <div className="basis-4/6 bg-blue-500">
          <h1 className="mx-10 my-4 text-4xl">Emotional Reactivity</h1>
          <div className="mx-10 my-4 shadow-lg bg-white">
            <h1 className="text-yellow-400 text-xl font-bold">Question 1</h1>
            <h1 className="text-yellow-400 text-2xl">Do you like going to school?</h1>
          </div>
        </div>
        <div className="basis-1/6 bg-yellow-500 h-screen"></div>
      </div>
    </>
  );
};

export default Activity;
