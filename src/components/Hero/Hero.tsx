import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white ">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#14b8a6] font-bold p-2 uppercase">
          Aspire to become a Web Developer ?
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Test your skills.
        </h1>
        <div className="flex justify-center  py-4">
          <p className="md:text-2xl sm:text-xl text-m font-bold uppercase">
            Get confident in&nbsp;
          </p>
          <Typed
            className="md:text-2xl sm:text-xl text-m text-[#14b8a6] font-bold uppercase"
            strings={[" HTML", " CSS", " JavaScript", " React"]}
            typeSpeed={100}
            backSpeed={120}
            loop
          />
        </div>
        <p className="md:text-xl text-m font-bold text-slate-600">
          Compare your score with others in Leaderboard.
        </p>
        <button className="bg-[#14b8a6] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#111827]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
