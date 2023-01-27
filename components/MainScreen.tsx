import React from "react";

function MainScreen() {
  return (
    <section className="min-w-screen min-h-screen bg-[url('../public/homebg.png')]">
      <div className="min-h-screen text-white max-w-[40vw] flex flex-col justify-center p-[5rem] gap-[1rem]">
        <h1 className="text-5xl font-semibold">
          Beautiful Game, Intense reality
        </h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quis
          in assumenda amet consectetur adipisicing.
        </p>
        <div className="flex gap-3">
          <button className="bg-[#4521f3] px-4 py-2 border border-[#4521f3] rounded-md">
            Play Now
          </button>
          <button className=" px-4 py-2 border border-[#4521f3] rounded-md">
            Learn More
          </button>
        </div>
      </div>
      <div className="text-white  px-[10rem] py-[4rem]">
        <div className="flex flex-col gap-2 w-fit">
          <h2 className="text-3xl font-semibold max-w-[24vw]">
            Synergy of light update is live now
          </h2>
          <p className="text-gray-200 max-w-[30vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas a
            dolores sapiente placeat accusamu.
          </p>
          <button className="bg-[#4521f3] px-4 py-2 border border-[#4521f3] rounded-md w-fit">
            Play Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default MainScreen;
