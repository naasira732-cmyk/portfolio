import img from "../assets/hero.png";

const Home = () => {
  return (
    <div
      id="Home"
      className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-6 py-10"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* TEXT SIDE */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-10">
            Hi, I'm <span className="text-cyan-400">Your Name</span>
          </h1>

          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            I'm a passionate{" "}
            <span className="text-cyan-400">Front-End Developer</span>
            who builds modern, responsive and interactive web applications
            using React and Tailwind CSS.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-cyan-300 transition">
              View Projects
            </button>

            <button className="border border-cyan-400 px-5 py-2 rounded-xl hover:bg-cyan-400 hover:text-black transition">
              Contact Me
            </button>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="flex justify-center mt-16 md:mt-0">
          <div className="bg-cyan-400/10 p-6 rounded-2xl border border-cyan-400 hover:scale-105 transition duration-300">
            <img
              src={img}
              alt="Hero"
              className="w-full max-w-sm rounded-lg"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;